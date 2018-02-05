package App.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import App.Model.Opinion;
import App.Model.Usuario;

public interface RepositorioOpiniones extends CrudRepository<Opinion,Long> {

	List<Opinion> findByAutor(Usuario us);


	

}
