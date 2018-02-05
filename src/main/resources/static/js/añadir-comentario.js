function comentar(){
	var autor=localStorage.getItem("usuario");
	var mail=document.getElementById("email").value;
	var cuerpo=document.getElementById("cuerpo").value;
	$.get("/almacenarComentario",{autor:autor,cuerpo:cuerpo,mail:mail},comentario,'json');	
}

function comentario(data,status){
	alert();
	if(!data){
		alert("ERROR");

	}else{
		alert("COMENTARIO PUBLICADO");
	}
}