package App.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import App.Model.Usuario;

public interface  RepositorioUsuario extends CrudRepository<Usuario,Long>{
	
	List<Usuario> findByNombreUsuario(String nombreUsuario);
	List<Usuario>findByContraseña(String contraseña);
	List<Usuario>findByCorreo(String correo);
	
}
