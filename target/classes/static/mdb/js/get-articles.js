var ids=[];
$(document).ready(function(){
	   $.getJSON('https://salyygana.000webhostapp.com/blog/wp-json/wp/v2/posts/',incluirpost);
});			
function incluirpost(posts,status){
		var ids=[];
$(document).ready(function(){
	   $.getJSON('https://salyygana.000webhostapp.com/blog/wp-json/wp/v2/posts/',incluirpost);
});			
function incluirpost(posts,status){
			var art=document.createElement("article");
			art.setAttribute("class","col-md-4 isotopeItem print");
			art.setAttribute("id","articulo");

			var div=document.createElement("div");
			div.setAttribute("class","card m-5");

			var divImagen=document.createElement("div");
			divImagen.setAttribute("class","view overlay hm-white-slight");

			var imagen=document.createElement("img");
			imagen.setAttribute("class","img-fluid");
			//AQUI HACER FOR Y IR AÑADIENDO ID A CADA IMAGEN CON EL INDEX I
		    imagen.setAttribute("id","img");

		    
			 var diva=document.createElement("div");
			diva.setAttribute("class","mask");

			var h4=document.createElement("h4");
			h4.setAttribute("class","card-tittle");
			h4.setAttribute("id","h4");
			h4.innerHTML = posts[0].title.rendered;

			 var aButton=document.createElement("a");
			aButton.setAttribute("href","#");
			aButton.setAttribute("class","btn btn-primary");
			aButton.setAttribute("id","a");
			aButton.innerHTML = "Boton";

			var divContent=document.createElement("div");
			divContent.setAttribute("class","card-body");
			divContent.setAttribute("id","content");
			divContent.appendChild(h4);
			divContent.innerHTML=posts[0].excerpt.rendered;
			divContent.appendChild(aButton);


			

			art.appendChild(div);

			div.appendChild(divImagen);
			divImagen.appendChild(imagen);
			div.appendChild(divContent);
			a.appendChild(diva);
			divImagen.appendChild(a);

			document.getElementById("3").appendChild(art);



			ids.push(posts[0].featured_media);
			$.getJSON('https://salyygana.000webhostapp.com/blog/wp-json/wp/v2/media/',incluirfotos);


}

function incluirfotos(media,status){
		document.getElementById('img').src = media[0].media_details.sizes.medium.source_url;

}
}

function incluirfotos(media,status){
		document.getElementById('img').src = media[0].media_details.sizes.medium.source_url;

}