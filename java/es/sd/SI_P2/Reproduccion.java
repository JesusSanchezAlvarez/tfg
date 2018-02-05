package es.sd.SI_P2;

import javax.persistence.OneToMany;

public class Reproduccion {
	
	private String fecha;
	private String hora;
	
	@OneToMany(mappedBy = "idUsuario")
	private Usuario usuario;
	
	private Pelicula pelicula;
	
	public Reproduccion() {
		
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Pelicula getPelicula() {
		return pelicula;
	}

	public void setPelicula(Pelicula pelicula) {
		this.pelicula = pelicula;
	}
	
	
}
