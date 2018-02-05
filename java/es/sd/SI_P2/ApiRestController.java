package es.sd.SI_P2;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class ApiRestController {
	
	@Autowired
	private RepositorioUsuario repositorio;
	
	private int intento;
	
	@RequestMapping(value = "/comprobarUs", method = RequestMethod.POST)
	public String getUsuarios(@RequestParam (value = "contraseña")String contraseña) {
		List<Usuario>usuarios= repositorio.findByContraseña(contraseña);
		if(intento==3){
			return "bloquear";
		}
		else if(usuarios.isEmpty()){
			intento++;
			
			return "usuarioIncorrecto";
		}else{
			return "paginaPrincipal";
		}
	}
}
