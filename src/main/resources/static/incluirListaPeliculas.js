/**
 * 
 */
$(document).ready(function(){
		peliculas=$.get("/devolverPeliculas",funDevolver,'json');

});			
function funDevolver(peliculas,status){
	for(i in peliculas){
		var elemento=$("#lista").append($("<li/><img/></li>").attr(
				{src:peliculas[i].ruta, 
					withd:"100", 
					height:"100", 
					onclick: "verTrailer('"+peliculas[i].url+"')"}));
		}
	}

function verTrailer(url){
	var fecha= new Date();
	var nhora=fecha.getHours();
	var minutos=fecha.getMinutes();
	var segundos= fecha.getSeconds();
	var hora=nhora+":"+minutos+":"+segundos;
	var dia= fecha.getDate();
	var mes = fecha.getMonth()+1;
	var year= fecha.getFullYear();
	var date=dia+'/'+mes+'/'+year;
	localStorage.setItem("url",url);
	$.post("/almacenarReproduccion",{hora:hora,url:url,fecha:fecha},redireccionar,'json');
}

function redireccionar(respuesta,url){
	window.open(localStorage.getItem("url"));
}

function pincharBotonF(){
	var titulo=document.getElementById("titulo").value;
	var director=document.getElementById("director").value;
	var etiquetas=document.getElementById("etiquetas").value;
	$.get("/buscarPelis",{titulo:titulo,director:director,etiquetas:etiquetas},funInluirConsulta,'json');
			}

function funInluirConsulta(peliculas, status){
	if(status =="success"){
		
	if(!(jQuery.isEmptyObject(peliculas))){
		$('#lista').empty();
		for(i in peliculas){
			var elemento=$("#lista").append($("<li/><img/></li>").attr(
					{src:peliculas[i].ruta, 
						withd:"100", 
						height:"100", 
						onclick: "verTrailer('"+peliculas[i].url+"')"}));
			}
	}else{
		alert("No hay peliculas, prueba a buscar mejor :)");
	}
	}
	else{
		alert("Error: Peticion web fallida");
	}
};


