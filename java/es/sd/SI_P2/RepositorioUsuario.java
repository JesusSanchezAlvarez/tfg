package es.sd.SI_P2;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface  RepositorioUsuario extends CrudRepository<Usuario,Long>{
	
	List<Usuario>findByNombreUsuario(String nombreUsuario);
	List<Usuario>findByContraseña(String contraseña);
	
}
