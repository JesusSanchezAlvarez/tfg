/**
 * 
 */
function pincharBotonF(){
			var titulo=document.getElementById("titulo").value;
			var director=document.getElementById("director").value;
			var etiquetas=document.getElementById("etiquetas").value;
			$.get("/buscarPelis",{titulo:titulo,director:director,etiquetas:etiquetas},fun,'json');
					}
function fun(peliculas, status){
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