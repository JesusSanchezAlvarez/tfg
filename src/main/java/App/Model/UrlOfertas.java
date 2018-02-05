package App.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UrlOfertas {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	private String urlImagen;
	
	public UrlOfertas() {
		
	}
	public UrlOfertas(String url) {
		this.urlImagen=url;
	}
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUrlImagen() {
		return urlImagen;
	}

	public void setUrlImagen(String urlImagen) {
		this.urlImagen = urlImagen;
	}
}
