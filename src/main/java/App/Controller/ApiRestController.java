package App.Controller;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import App.Model.Opinion;
import App.Model.OpinionTemporal;
import App.Model.Usuario;
import App.Model.UrlOfertas;
import App.Repository.RepositorioOpinionesTemporal;
import App.Repository.RepositorioUrls;
import App.Repository.RepositorioUsuario;
import App.Repository.RepositorioOpiniones;



@RestController
public class ApiRestController {
	
	@Autowired
	private RepositorioUsuario repositorio;
	@Autowired
	private RepositorioOpiniones repositorioOp;
	@Autowired
	private RepositorioOpinionesTemporal repositorioOpT;
	@Autowired
	private RepositorioUrls repositorioUrls;
		
	@RequestMapping(value = "/comprobarUs", method=RequestMethod.POST )
	public List<Usuario> getUsuarios(@RequestBody Usuario u) throws UnknownHostException {
		List<Usuario> usuarios= repositorio.findByNombreUsuario(u.getNombreUsuario());
		return usuarios;
	
	}
	@RequestMapping(value = "/registrarUs", method=RequestMethod.POST )
	public Boolean pushUsuarios(@RequestBody Usuario u) throws UnknownHostException {
		System.out.println("entra");
		repositorio.save(u);
		return true;
	
	}
	
	@RequestMapping(value = "/getUsuarios", method=RequestMethod.GET )
	public boolean getUsuarios(@RequestParam(value="nombre")String nombre){
		List<Usuario> us = (List<Usuario>) repositorio.findByNombreUsuario(nombre);
		return !us.isEmpty();
	}
	
	@RequestMapping(value = "/getUsuariosLista", method=RequestMethod.GET )
	public 	List<Usuario> getUsuariosLista(){
		List<Usuario> us = (List<Usuario>) repositorio.findAll();
		return us;
	}
	
	
	@RequestMapping(value = "/getOpiniones", method=RequestMethod.GET )
	public List<Opinion> getOpiniones(){
		List<Opinion>ops=(List<Opinion>) repositorioOp.findAll();
		return ops;
	}
	@RequestMapping(value = "/getOpinionesI", method=RequestMethod.GET )
	public List<Opinion> getOpinionesI(){
		List<Opinion>ops=(List<Opinion>) repositorioOp.findAll();
		return ops;
	}
	@RequestMapping(value = "/getOpinionesTemporal", method=RequestMethod.GET )
	public List<OpinionTemporal> getOpinionestemp(){
		List<OpinionTemporal>opiniones=(List<OpinionTemporal>) repositorioOpT.findAll();
		return opiniones;
	}
	
	@RequestMapping(value = "/almacenarComentario", method=RequestMethod.GET)
	public boolean almacenarComentario(@RequestParam(value="autor") String nombreU,@RequestParam(value="cuerpo") String cuerpo,@RequestParam(value="mail") String mail){
		List<Usuario> us = (List<Usuario>) repositorio.findByNombreUsuario(nombreU);
		if(!us.isEmpty()) {
			OpinionTemporal opinion = new OpinionTemporal(us.get(0),cuerpo,mail);
			repositorioOpT.save(opinion);
			String cuerpoMensaje = crearMensajeValidacion(opinion);
			
			if(enviarCorreo("salyygana@gmail.com", "Registro usuario", cuerpoMensaje, "correo")) {
				repositorioOpT.save(opinion);
			}
			else{
				System.out.println("Error al enviar correo.");
			}
			
			return true;
		}else {
			return false;
		}
	}
	
	@RequestMapping(value = "/almacenarComentarioCorreo", method=RequestMethod.GET)
	public boolean almacenarComentarioCorreo(@RequestParam(value="id") Long id){
		System.out.println(id);
		OpinionTemporal op = repositorioOpT.findOne(id);
		System.out.println(op.getId());
		Opinion opinion = new Opinion(op.getAutor(),op.getCuerpo(),op.getMail());
		repositorioOpT.delete(op.getId());;
		repositorioOp.save(opinion);
		System.out.println("GUARDA temporal");
		return true;

	}
	
	@RequestMapping(value = "/almacenarComentarioAlta", method=RequestMethod.GET)
	public boolean almacenarComentarioAlta(@RequestParam(value="id") Long id){
		OpinionTemporal op = repositorioOpT.findOne(id);
		Opinion opinion = new Opinion(op.getAutor(),op.getCuerpo(),op.getMail());
		repositorioOpT.delete(op);
		repositorioOp.save(opinion);
		return true;
	}
			
			private boolean enviarCorreo(String destinatario, String asunto, String cuerpo, String descripcion) {
				
				String usuario = "salyygana";
				String contraseña = "salyygana123";
				Properties properties = System.getProperties();
				properties.put("mail.smtp.host", "smtp.gmail.com");  //El servidor SMTP de Google
				properties.put("mail.smtp.user", usuario);
				properties.put("mail.smtp.clave", contraseña);    //La clave de la cuenta
				properties.put("mail.smtp.auth", "true");    //Usar autenticación mediante usuario y clave
				properties.put("mail.smtp.starttls.enable", "true"); //Para conectar de manera segura al servidor SMTP
				properties.put("mail.smtp.port", "587"); //El puerto SMTP seguro de Google

				Session session = Session.getDefaultInstance(properties);
				MimeMessage message = new MimeMessage(session);
				
				try {
					message.setFrom(new InternetAddress(usuario));
					message.addRecipients(Message.RecipientType.TO, destinatario);
					message.setSubject(asunto);
					message.setContent(cuerpo, "text/html; charset=utf-8");
					
					Transport transport = session.getTransport("smtp");
					transport.connect("smtp.gmail.com", usuario, contraseña);
					transport.sendMessage(message, message.getAllRecipients());
					transport.close();
					return true;
				}
				catch(MessagingException ex) {
					descripcion = ex.toString();
					return false;
				}
				
				
			}
			
			public String crearMensajeValidacion(OpinionTemporal op) {
			System.out.println(op.getId());
				String mensaje = "<p>Se ha añadido el siguiente comentario:</p> <br>" + "<p>"+op.getCuerpo()+ "<p>Para finalizar el proceso de nuevo registro haz click <a href=\"http://localhost:8080/almacenarComentarioCorreo?id=" + op.getId() + "\">aqui<a> y empieza a disfrutar de WikiSeries</p>"; 
								
				
				return mensaje;		
			}
	
	@RequestMapping(value = "/almacenarComentarioConfirmado", method=RequestMethod.GET)
	public boolean almacenarComentarioConfirm(@RequestParam(value="autor") Long idU,@RequestParam(value="cuerpo") String cuerpo,@RequestParam(value="mail") String mail){
		System.out.println("ENTRA confirmado");
		Usuario us = repositorio.findOne(idU);
		Opinion opinion = new Opinion(us,cuerpo,mail);
		repositorioOp.save(opinion);
		System.out.println("GUARDA confirmado");
		return true;
	}
	
	@RequestMapping(value = "/eliminarComentario", method=RequestMethod.DELETE)
	public boolean eliminarComentario(@RequestBody Opinion c){
		Opinion op = repositorioOp.findOne(c.getId());
		if(op==null) {
			return false;
		}else {
			repositorioOp.delete(op);
			return true;
		}
		
	}
	
	@RequestMapping(value = "/getUsuario", method=RequestMethod.GET)
	public String getUusario(@RequestParam(value="id") Long id){
		Opinion op = repositorioOp.findOne(id);
		if(op.getAutor()==null) {
			System.out.println("es nulo");
		}
		System.out.println(op.getAutor().getNombreUsuario());
		System.out.println("usuario3");
		return op.getAutor().getNombreUsuario();
	}
	
	@RequestMapping(value = "/eliminarUsuario", method=RequestMethod.DELETE)
	public boolean eliminarUsuario(@RequestBody Usuario u){
		String n = u.getNombreUsuario();
		System.out.println(n);
		Usuario us = repositorio.findByNombreUsuario(n).get(0);
		if(us==null) {
			return false;
		}else {
			List<Opinion> ops = repositorioOp.findByAutor(us);
			repositorioOp.delete(ops);
			repositorio.delete(us);
			System.out.println("Borra");
			return true;
		}
		
	}
	
	@RequestMapping(value = "/getOfertas", method=RequestMethod.GET)
	public List<UrlOfertas> getOfertas(){
		return (List<UrlOfertas>) repositorioUrls.findAll();
	}
	
	

	
	
}
