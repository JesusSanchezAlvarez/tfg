
var indicesFoto=[];
var posts;
var categorias=[];
var index=0;
var indexc=0;
var idsc=[];
var ids=[];
var medias=[];
$(document).ready(function(){
	   posts=[];
	   localStorage.setItem("blog","true");
	   $.getJSON('https://salyygana.000webhostapp.com/blog/wp-json/wp/v2/posts?per_page=100',incluirpost);
	   $.getJSON('https://salyygana.000webhostapp.com/blog/wp-json/wp/v2/categories/',incluircategorias);
	  
});	
function incluirpost(posts,status){
	$('#div3').empty();
	alert(posts.length);
	for(var i = 0; i<posts.length;i++){
			ids.push(posts[i].featured_media);
			var art=document.createElement("article");
			art.setAttribute("class","col-md-6 isotopeItem print");
			art.setAttribute("id","articulo");

			var div=document.createElement("div");
			div.setAttribute("class","card m-5");

			var divImagen=document.createElement("div");
			divImagen.setAttribute("class","view overlay hm-white-slight z-depth-2 clase-div-imagen");

			var imagen=document.createElement("img");
			imagen.setAttribute("class","img-fluid z-depth-2 img");
			//AQUI HACER FOR Y IR AÑADIENDO ID A CADA IMAGEN CON EL INDEX I
		    imagen.setAttribute("id","img"+i);

			 var diva=document.createElement("div");
			diva.setAttribute("class","mask");

			var h4=document.createElement("h4");
			h4.setAttribute("class","card-tittle");
			h4.setAttribute("id","h4");
			titulo = posts[i].title.rendered;


			var aButton=document.createElement("a");
			aButton.setAttribute("class","btn btn-primary boton");
			aButton.setAttribute("id","save");
			aButton.innerHTML = "Mas info";

			var divContent=document.createElement("div");
			divContent.setAttribute("class","card-body");
			divContent.setAttribute("id","content");
			divContent.innerHTML='<h4>'+titulo+ '</h4>'+posts[i].excerpt.rendered;			
			art.appendChild(div);

			div.appendChild(divImagen);
			divImagen.appendChild(imagen);
			div.appendChild(divContent);
			
			divContent.appendChild(aButton);

			document.getElementById("div3").appendChild(art);	  
			incluirFoto(posts[i].featured_media,i);
		}	
		
}

function incluirFoto(id,i){
		 $.getJSON('https://salyygana.000webhostapp.com/blog/wp-json/wp/v2/media/'+id,function(info){
			 document.getElementById('img'+i).src = info.media_details.sizes.medium.source_url;
		 });
}
//function incluirfotos(media,status){
	//var i=0;
	//for(index in ids){
	//	for(index2 in media){
		//	if(ids[index]==media[index2].id){
		//		alert(media[index2].media_details.sizes.medium.source_url);
		//			document.getElementById('img'+i).src = media[index2].media_details.sizes.medium.source_url;
		//			i++;			
		//	}
		//}
	//}

//}

function incluircategorias(categorias,status){
	for(var i = 0; i<categorias.length;i++){
			var idCategoria = categorias[i].id;

			var li=document.createElement("li");
			li.setAttribute("id",idCategoria);
			li.setAttribute("class","cat");

			var a=document.createElement("a");
			a.setAttribute("class","btn-theme btn-small");
			a.innerHTML=categorias[i].name;


			li.appendChild(a);


			document.getElementById("listaCategorias").appendChild(li);

		}
}



$("#listaCategorias").on("click", ".cat", function(){
	var id=$(this).attr("id");
	idsc=[];
	indicesFoto=[];
	$('#div3').empty();
	$.getJSON('https://salyygana.000webhostapp.com/blog/wp-json/wp/v2/posts/',function(data) {
			//incluir post con essa categoria
		

		for(var i =0;i<data.length;i++){
			var idsCategorias = [];
			idsCategorias=data[i].categories;
			for(var j = 0;j<idsCategorias.length;j++){
				if(idsCategorias[j] == id){
					alert();
					var art=document.createElement("article");
					art.setAttribute("class","col-md-6 isotopeItem print");
					art.setAttribute("id","articulo");

					var div=document.createElement("div");
					div.setAttribute("class","card m-5");

					var divImagen=document.createElement("div");
					divImagen.setAttribute("class","view overlay hm-white-slight z-depth-2 clase-div-imagen");

					var imagen=document.createElement("img");
					imagen.setAttribute("class","img-fluid img z-depth-2");
					//AQUI HACER FOR Y IR AÑADIENDO ID A CADA IMAGEN CON EL INDEX I
				    imagen.setAttribute("id","img"+i);
				    
					 var diva=document.createElement("div");
					diva.setAttribute("class","mask");

					var h4=document.createElement("h4");
					h4.setAttribute("class","card-tittle");
					h4.setAttribute("id","h4");
					titulo = data[i].title.rendered;


					 var aButton=document.createElement("a");
					
					aButton.setAttribute("class","btn btn-primary boton");
					aButton.setAttribute("id","save");
					aButton.innerHTML = "Mas info";

					var divContent=document.createElement("div");
					divContent.setAttribute("class","card-body");
					divContent.setAttribute("id","content");
					divContent.innerHTML='<h4>'+titulo+ '</h4>'+data[i].excerpt.rendered;			

					art.appendChild(div);

					div.appendChild(divImagen);
					divImagen.appendChild(imagen);
					div.appendChild(divContent);
					
					divContent.appendChild(aButton);

					document.getElementById("div3").appendChild(art);


					idsc.push(data[i].featured_media);
					indicesFoto.push(i);
					incluirFoto(data[i].featured_media,i);
				}
			}
		}

	});
});



