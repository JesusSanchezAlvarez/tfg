/**
 * 
 */
$(document).ready(function(){
		document.getElementById("usuario-cabecera").innerHTML=localStorage.getItem("usuario-cabecera");
		localStorage.setItem("usuario",localStorage.getItem("usuario-cabecera"));
		localStorage.setItem("usuario-cabecera","");
		localStorage.setItem("registrado",false);
		var elemento2 = document.getElementById("icono-opinion");
		elemento2.style.display = 'none';
		if(localStorage.getItem("iniciado-sesion")=="true"){
			var elemento = document.getElementById("elemento-lista");
			elemento.style.display = 'none';
			var elemento2 = document.getElementById("icono-opinion");
			elemento2.style.display = 'block';
			var elemento3 = document.getElementById("ofertas");
			elemento3.style.display = 'block';
			var elemento4 = document.getElementById("parallax1-ofertas");
			elemento4.style.display = 'block';
			localStorage.setItem("iniciado-sesion",false);
			if(localStorage.getItem("usuario")=="admin"){
				document.getElementById("usuario-cabecera").innerHTML=localStorage.getItem("usuario-cabecera");
				var elemento = document.getElementById("icono-admin");
				elemento.style.display = 'block';
			}
		}
});
