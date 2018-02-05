/**
 * 
 */
/**
 * 
 */

$(document).ready(function(){
	
	
		$('#iniciarS').click(f_login);
		$('#registrarse-button').click(f_registrarse);
		
		function f_login(){
		    nombreU=document.getElementById("nombreULog").value;
			localStorage.setItem("usuario-cabecera",nombreU);
			var contraseña=document.getElementById("contraseñaLog").value;
			if(nombreU == ""  || contraseña == ""){
				alert("Faltan campos por rellenar");
			}
			else{
				 $.ajax({
						type: "POST",
						url: "/comprobarUs",
						data: JSON.stringify({
							nombreUsuario:nombreU,
							contraseña:contraseña,		
						}),
						contentType:"application/json",
						dataType:"text",
					}).done(function(data,status){
						if(status =="success"){	
							if(jQuery.isEmptyObject(data)){
								alert("Usuario incorrecto");
							}
							else{
								localStorage.setItem("iniciado-sesion",true);
								window.location.href="index.html";
							}
						}
			});
			
		}
		}
		
		function f_registrarse(){
			var nombreU=document.getElementById("nombreUReg").value;
			var nombre=document.getElementById("nombre").value;
			var contraseña=document.getElementById("contraseñaReg").value;
			var email=document.getElementById("email").value;
			var contraseñac=document.getElementById("contraseñac").value;
			var apellidos=document.getElementById("apellidos").value;
			
			if(nombreU == ""  || contraseña == "" || nombre == "" || email == "" || contraseñac == "" || apellidos == ""){
				alert("Faltan campos por rellenar");
			}
			else if(!contraseñaReg==contraseñac){
				alert("Contraseñas no coinciden");
			}
			else{
				  $.ajax({
					
						type: "POST",
						url: "/registrarUs",
						data: JSON.stringify({
							idUsuario: '0',
							nombre:nombre,
							apellidos:apellidos,
							nombreUsuario:nombreU,
							contraseña:contraseña,
							correo:email,		
						}),
						contentType:"application/json",
						dataType:"text",
					}).done(function(data){
						alert("USUARIO REGISTRADO");
					});
			}
			
		}
							});
function login(usuarios, status){
	if(status =="success"){	
		if((jQuery.isEmptyObject(usuarios))){
			alert("Usuario incorrecto");
		}
		else if(usuarios[0].intento > 0 && usuarios[0].intento < 3){
			var intento;
			if(usuarios[0].intento == 1){
				intento = 2;
			}
			else{
				intento = 1;
			}
			alert("Contraseña incorrecta, te quedan "+intento+" intentos");
		}
		else if(usuarios[0].intento >= 3){
			alert("Usuario Bloqueado");
		}
		else{
			localStorage.setItem("iniciado-sesion",true);
			window.location.href="index.html";
		}
	}
	else{
		alert("Error: Peticion web fallida");
	}
};

function registrar(usuarios, status){
	alert("USUARIO REGISTRADO CON EXITO");
};