package es.sd.SI_P2;

import java.util.List;

import javax.persistence.Id;
import javax.persistence.ManyToMany;

public class Pelicula {
	@Id
	private long idPelicula;
	
	private String titulo;
	private String pais;
	private String año;
	private String director;
	private String resumen;
	private String url;
	private List <String> etiquetas;
	
	@ManyToMany
	private List<Usuario>usuarios;
	
	public Pelicula() {
		
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public String getAño() {
		return año;
	}

	public void setAño(String año) {
		this.año = año;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public String getResumen() {
		return resumen;
	}

	public void setResumen(String resumen) {
		this.resumen = resumen;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public List<String> getEtiquetas() {
		return etiquetas;
	}

	public void setEtiquetas(List<String> etiquetas) {
		this.etiquetas = etiquetas;
	}
	
	
}
