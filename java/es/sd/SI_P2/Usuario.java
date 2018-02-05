package es.sd.SI_P2;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Usuario {
	
	@Id
	private long idUsuario;
	private String nombreUsuario;
	private String contraseña;
	private String nombre;
	private String apellidos;
	private String correo;
	private String nacimiento;
	private String pais;
	private String ciudad;
	
	@OneToMany(mappedBy = "idConexion")
	private List <Conexion> conexiones;
	
	@ManyToMany
	private List<Pelicula> peliculas;
	
	@ManyToOne
	private List<Reproduccion> reproducciones;
	
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

	public String getNacimiento() {
		return nacimiento;
	}

	public void setNacimiento(String nacimiento) {
		this.nacimiento = nacimiento;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}
	
	
	
}
