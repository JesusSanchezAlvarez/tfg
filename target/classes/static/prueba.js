//$(document).ready(function(){
	$('#iniciarS').click(f);
	function f(){
		var nombre=document.getElementById("nombre").value;
		var contraseña=document.getElementById("contraseña").value;
		$.ajax('/comprobarUs',{
			data:{
			nombre:nombre,
			contraseña:contraseña
		},
		type:'GET',
		dataType:'String',
		success:alert("por aqui"); function(String){alert("CACACAMMMMMPOS");}
		}
		);
		
	};
//});