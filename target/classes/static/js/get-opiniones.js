
var indicesFoto=[];

$(document).ready(function(){
	  $.getJSON('/getOpiniones',incluiropiniones);
	   $.getJSON('/getUsuariosLista',incluirusuarios);
	   $.getJSON('/getOpinionesTemporal',incluiropinionestemp);
	   
	  
});	
function incluiropiniones(ops,status){
	$('#div-opiniones').empty();
	if(ops.length==0){
		var h4=document.createElement("h4");
		h4.innerHTML = "NO HAY COMENTARIOS A DAR DE BAJA";
		document.getElementById("div-opiniones").appendChild(h4);
	}
	for(var i = 0; i<ops.length;i++){
		var div=document.createElement("div");
		div.setAttribute("class","row");
		
		var h4=document.createElement("h4");
		var j=i+1;
		h4.innerHTML = "NUMERO COMENTARIO: "+ j;
		
		var block=document.createElement("blockquote");
		block.innerHTML = separar(ops[i].cuerpo);
		
		var ih=document.createElement("i");
		ih.setAttribute("class","fa fa-minus-circle fa-2x icono-borrar-opinion pinchar");
		ih.setAttribute("id",ops[i].id);
		
		block.appendChild(ih);
		div.appendChild(h4);
		div.appendChild(block);
		
		document.getElementById("div-opiniones").appendChild(div);	 
	}	
		
}
function incluiropinionestemp(ops,status){
	$('#div-opiniones-alta').empty();
	if(ops.length==0){
		var h4=document.createElement("h4");
		h4.innerHTML = "NO HAY COMENTARIOS A DAR DE ALTA";
	}
	for(var i = 0; i<ops.length;i++){
		var div=document.createElement("div");
		div.setAttribute("class","row");
		
		var h4=document.createElement("h4");
		var j=i+1;
		h4.innerHTML = "NUMERO COMENTARIO: "+ j;
		
		var block=document.createElement("blockquote");
		block.innerHTML = separar(ops[i].cuerpo);
		
		var ih=document.createElement("i");
		ih.setAttribute("class","fa fa-plus fa-2x icono-borrar-opinion pinchar");
		ih.setAttribute("id",ops[i].id);
		
		block.appendChild(ih);
		div.appendChild(h4);
		div.appendChild(block);
		
		document.getElementById("div-opiniones-alta").appendChild(div);	 
	}	
		
}

function incluirusuarios(us,status){
	$('#div-usuarios').empty();
	if(us.length==0){
		var h4=document.createElement("h4");
		h4.innerHTML = "NO HAY USUARIOS";
	}
	for(var i = 0; i<us.length;i++){
		var div=document.createElement("div");
		div.setAttribute("class","row");
		
		var block=document.createElement("blockquote");
		
		var h4=document.createElement("h2");
		var j=i+1;
		h4.innerHTML = us[i].nombreUsuario;;
		
		var h21=document.createElement("h4");
		h21.innerHTML = us[i].nombre+" "+us.apellidos+" ";
		
		var h22=document.createElement("h4");
		h22.innerHTML = us[i].pais+" "+us.ciudad+" ";
		
		var ih=document.createElement("i");
		ih.setAttribute("class","fa fa-minus-circle fa-2x icono-borrar-opinion pinchar");
		ih.setAttribute("id",us[i].nombreUsuario);
		
		
		div.appendChild(h4);
		block.appendChild(h21);
		block.appendChild(h22);
		block.appendChild(ih);
		div.appendChild(block);
		
		
		document.getElementById("div-usuarios").appendChild(div);	 
	}	
		
}
function separar(linea){
	var mensaje="";
	for(var i=1;i<linea.length;i++){
		if(i % 100 == 0){
			mensaje+="<br>"
		}else{
			mensaje+=linea[i];
		}
	}
	mensaje=linea[0]+mensaje;
	return mensaje;
}

$("#div-opiniones").on("click", ".pinchar", function(){
	var id=$(this).attr("id");

	$.ajax({
		type: "DELETE",
		url: "/eliminarComentario",
		data: JSON.stringify({		
			id:id
		}),
		contentType:"application/json",
		dataType:"text",
	}).done(function(data){
		alert("COMENTARIO ELIMINADO");
		location.reload();
	});
});

$("#div-usuarios").on("click", ".pinchar", function(){
	var nombreUsuario=$(this).attr("id");
	  $.ajax({
			type: "DELETE",
			url: "/eliminarUsuario",
			data: JSON.stringify({		
				nombreUsuario:nombreUsuario
			}),
			contentType:"application/json",
			dataType:"text",
		}).done(function(data){
			alert("USUARIO ELIMINADO");
			location.reload();
		});
});


$("#div-opiniones-alta").on("click", ".pinchar", function(){
	var id=$(this).attr("id");
	$.get("/almacenarComentarioAlta",{id:id},eliminadoComentario,'json');
});

