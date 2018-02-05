package App.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import App.Model.UrlOfertas;
import App.Model.Usuario;

public interface RepositorioUrls extends CrudRepository<UrlOfertas,Long>{
	
}
