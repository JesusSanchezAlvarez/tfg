package App.Model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Usuario {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long idUsuario;
	
	private String nombreUsuario;
	
	

	private String contraseña;
	private String nombre;
	private String apellidos;
	private String correo;
	
	
	@OneToMany(mappedBy = "autor")
	@JsonIgnore
	private List <Opinion> opiniones;
	
	@OneToMany(mappedBy = "autor")
	@JsonIgnore
	private List<OpinionTemporal> opinionesTemporal;
	
	public Usuario(String nu,String c,String n,String ap,String co){
		this.nombreUsuario=nu;
		this.contraseña=c;
		this.nombre=n;
		this.apellidos=ap;
		this.correo=co;
		
	}
	
	public Usuario(String n,String nu,String c,String e){
		this.nombreUsuario=nu;
		this.contraseña=c;
		this.nombre=n;
		this.correo=e;
	}

	public Usuario(){
		
	}

	public String getNombreUsuario() {
		return nombreUsuario;
	}

	public void setUsuario(String usuario) {
		this.nombreUsuario = usuario;
	}

	public String getContraseña() {
		return contraseña;
	}

	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	

	public long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(long idUsuario) {
		this.idUsuario = idUsuario;
	}

	public List<Opinion> getOpiniones() {
		return opiniones;
	}

	public void setOpiniones(List<Opinion> opiniones) {
		this.opiniones = opiniones;
	}

	public List<OpinionTemporal> getOpinionesTemporal() {
		return opinionesTemporal;
	}

	public void setOpinionesTemporal(List<OpinionTemporal> opinionesTemporal) {
		this.opinionesTemporal = opinionesTemporal;
	}

	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}
	
}
