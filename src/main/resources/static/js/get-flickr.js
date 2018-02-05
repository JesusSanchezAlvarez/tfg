$( document ).ready(function(){
	var api_key="a7e9a22831e9d7595f0a58ad00f1dd1e";
	var user_id="145319222@N06";
	var set_id ="72157692689517805"
	var secret="1b53917773dfe1db";
$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=' 
	 + api_key + '&user_id=' +user_id + 
	'&format=json&nojsoncallback=1',
	mostrar_fotos
	)
	
	function mostrar_fotos(info){
		var i=0;
		for (i=0;i<10;i++) {
		  var item = info.photos.photo[i];
		  var url = 'https://farm'+item.farm+".staticflickr.com/"+item.server
			          +'/'+item.id+'_'+item.secret+'_n.jpg';
		  console.debug(url);
		  var urlH='https://farm'+item.farm+".staticflickr.com/"+item.server
			          +'/'+item.id+'_'+item.secret+'_h.jpg';
		  localStorage.setItem("urlH"+i,urlH);
		  console.debug(urlH);
		  var val = item.id;
		  var claseBotonInfo = 'btn btn-block btn-info';
		  var redireccion = 'popupOpciones.html';
		  var funcionPopupOpciones = 'javascript:abrir('+ redireccion +')';
		  //$("#img-f-"+i).append($("<img>").attr("src",url));
		  document.getElementById("img-f-"+i).setAttribute("src",url);
		  
          //urls.push(urlH);

    	}
	}
	
}
)
/**
$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=' 
	 + api_key + '&photoset_id='+ set_id+'&user_id=' +user_id + 
	'&format=json&nojsoncallback=1',
	mostrar_ofertas
	)
	
	function mostrar_ofertas(info){
		var i=0;
		for (i=0;i<10;i++) {
		  var item = info.photoset.photo[i];
		  var url = 'https://farm'+item.farm+".staticflickr.com/"+item.server
			          +'/'+item.id+'_'+item.secret+'_n.jpg';
		  console.debug(url);
		  var urlH='https://farm'+item.farm+".staticflickr.com/"+item.server
			          +'/'+item.id+'_'+item.secret+'_h.jpg';
		  localStorage.setItem("urlH"+i,urlH);
		  console.debug(urlH);
		  var val = item.id;
		  var claseBotonInfo = 'btn btn-block btn-info';
		  var redireccion = 'popupOpciones.html';
		  var funcionPopupOpciones = 'javascript:abrir('+ redireccion +')';
		  //$("#img-f-"+i).append($("<img>").attr("src",url));
		  document.getElementById("img-of-"+i).setAttribute("src",url);
		  
          //urls.push(urlH);

    	}
	}
	
}
)
/**/
function verGrande(i){
		window.open(localStorage.getItem("urlH"+i));
	}			