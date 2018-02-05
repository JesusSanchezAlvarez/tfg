package e.sd.SI_P2.App;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Clase principal de Ejemplo REST Spring
 * 
 * @author J. M. Colmenar
 *
 */
@SpringBootApplication
public class App {

	public static void main(String[] args) {
		SpringApplication.run(App.class , args);
	}
	
	/* 
	   Inserción de datos básicos en MySQL:
	   
	   insert into pelicula(anio,titulo,imdb) values (1999,'Matrix','http://www.imdb.com/title/tt0133093/'),(1972,'El Padrino','http://www.imdb.com/title/tt0068646/');
	 */
}
