package App;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import App.Model.Opinion;
import App.Model.UrlOfertas;
import App.Model.Usuario;
import App.Repository.RepositorioUrls;
import App.Repository.RepositorioUsuario;
import App.Repository.RepositorioOpiniones;

@Component
public class DatabaseLoader {

	@Autowired
	private RepositorioUsuario repositorio;
	@Autowired
	private RepositorioOpiniones repositorioOp;
	@Autowired
	private RepositorioUrls repositorioUrls;
	@PostConstruct
	private void initDatabase() {
		
		repositorio.deleteAll();
		
		Usuario nulo = new Usuario("nulo","nulo","nulo","nulo","nulo");
		Usuario u1 = new Usuario("JesusU","jesus","Jesus","Sanchez","correo1");
		Usuario u2 = new Usuario("AaronU","aaron","Aaron","Velasco","correo2");
		Usuario admin = new Usuario("Admin","admin","admin","admin","admin");
		
		Opinion op1 = new Opinion(u1,"opinion1","op");
		Opinion op2 = new Opinion(u2,"opinion2","op");
		Opinion op3 = new Opinion(u2,"opinion2","op");
		Opinion op4 = new Opinion(u2,"opinion2","op");
		Opinion op5 = new Opinion(u2,"opinion2","op");
		Opinion op6 = new Opinion(u1,"opinion6","op");
		Opinion op7 = new Opinion(u2,"opinion7","op");

		
		repositorio.save(u1);
		repositorio.save(u2);
		repositorio.save(nulo);
		repositorio.save(admin);
		
		repositorioOp.save(op1);
		repositorioOp.save(op2);
		repositorioOp.save(op3);
		repositorioOp.save(op4);
		repositorioOp.save(op5);
		repositorioOp.save(op6);
		repositorioOp.save(op7);
		
		String sDirectorio = "src/main/resources/static/ofertas";
		File f = new File(sDirectorio);
		if (f.exists()){ 
			// Directorio existe }
			File[] ficheros = f.listFiles();
			for (int x=0;x<ficheros.length;x++){
			  System.out.println(ficheros[x].getName());
			  UrlOfertas urlOf = new UrlOfertas(ficheros[x].getName());
			  repositorioUrls.save(urlOf);
			}
		}
			else { 			  
				System.out.println("no existe");
 }
		
	}
	}
	
	

