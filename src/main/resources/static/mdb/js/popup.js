// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function myFunctionExperiencias(id) {
	 $( "#popup" ).empty();
	 $( "#popup" ).append( "<h2>Descripcion de la ficha:</h2>" );
	switch(id) {
	    case '1':
	        $( "#popup" ).append( "<p>imagen 1</p>" );
	        break;
	    case '2':
	        $( "#popup" ).append( "<p>imagen 2</p>" );
	        break;
	    case '3':
	        $( "#popup" ).append( "<p>imagen 3</p>" );
	        break;
	    default:
	        
	} 
	$( "#myModal" ).fadeIn( "slow", function() {
  
  	});
    modal.style.display = "block";
}

function myFunctionFiesta(id,url) {
	 $( "#popup" ).empty();
	switch(id) {
	    case '1':
	        $( "#popup" ).append( '<div id="divSala" class="col-md-7"><h2>Teatro Kapital</h2><p class="text-justify"><br>En plena Calle Atocha, encontramos Teatro Kapital, una de las salas mas reconocidas a nivel europeo. En los alrededores de la conocída sala, se encuentran el Museo Reina Sofia, el Museo del Prado, Museo Thyssen y Jardín Botánico de Madrid.La sala tiene una capacidad para más de 3000 personas, distribuida en 7 plantas independientes. Teatro Kapital, ha distribuido sus salas con diferentes ambientes, con salas de Reggaeton, Karaoke, R&B, Chill out con sofás, casi todas ellas con cristaleras y miradores a la “Main Room” donde podrás escuchar la mejor música House. Por no hablar de su magnifica terraza en la última planta de la discoteca.Disfrutarás de un ambiente agradable y activo. Con público internacional cada noche.En la sala principal podrás disfrutar de los mejores Dj’s nacionales e internacionales como Les Castizos, Dj Nano o su Dj residente Carlos Ardiya.Vive una experiencia especial con su mágnifica iluminación y puesta en escena con un Show inigualable en Madrid, con azafatas, Gogo’s, Megatron y más de 100 trabajadores que harán de tu noche, una noche única.Apúntate en lista y enseña tu código en la puerta para obtener el mejor precio posible y baila en Teatro Kapital al menos una vez en la vida.</p></div>' );
		    $( "#popup" ).append( '<div id="div-up" class="col-md-offset-8 col-md-3"> <img img-thumbnail" src="'+url+'" height="300" width="300"/></div>' );
		    $( "#popup" ).append( '<div id="div-up" class="col-md-offset-8 col-md-3"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.9582360418294!2d-3.69535248460429!3d40.409775979365904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4226289c1e15e1%3A0x40509107ee318e74!2sKapital!5e0!3m2!1ses!2ses!4v1509990814755" width="300" height="250" frameborder="50" style="border:0" allowfullscreen></iframe></div>' );
	  		$( "#popup" ).append( '<div id="div-up" class="col-md-offset-8 col-md-3"><iframe width="350" height="200" src="https://www.youtube.com/embed/B4C2CJLE-04" frameborder="0" allowfullscreen></iframe></div>' );
	        
	        $( "#popup" ).append( '<div id="divSala" class="col-md-7"><h2>Teatro Kapital</h2><p class="text-justify"><br>En plena Calle Atocha, encontramos Teatro Kapital, una de las salas mas reconocidas a nivel europeo. En los alrededores de la conocída sala, se encuentran el Museo Reina Sofia, el Museo del Prado, Museo Thyssen y Jardín Botánico de Madrid.La sala tiene una capacidad para más de 3000 personas, distribuida en 7 plantas independientes. Teatro Kapital, ha distribuido sus salas con diferentes ambientes, con salas de Reggaeton, Karaoke, R&B, Chill out con sofás, casi todas ellas con cristaleras y miradores a la “Main Room” donde podrás escuchar la mejor música House. Por no hablar de su magnifica terraza en la última planta de la discoteca.Disfrutarás de un ambiente agradable y activo. Con público internacional cada noche.En la sala principal podrás disfrutar de los mejores Dj’s nacionales e internacionales como Les Castizos, Dj Nano o su Dj residente Carlos Ardiya.Vive una experiencia especial con su mágnifica iluminación y puesta en escena con un Show inigualable en Madrid, con azafatas, Gogo’s, Megatron y más de 100 trabajadores que harán de tu noche, una noche única.Apúntate en lista y enseña tu código en la puerta para obtener el mejor precio posible y baila en Teatro Kapital al menos una vez en la vida.</p><div id="infoM"></div></div>' );
		    $( "#infoM" ).append( '<div id="div-sm" class="col-md "><img img-thumbnail" src="'+url+'" height="200" width="150"/></div>' );
		    $( "#infoM" ).append( '<div id="div-sm" class="col-md "><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.9582360418294!2d-3.69535248460429!3d40.409775979365904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4226289c1e15e1%3A0x40509107ee318e74!2sKapital!5e0!3m2!1ses!2ses!4v1509990814755" width="200" height="150" frameborder="50" style="border:0" allowfullscreen></iframe></div>' );
	  		$( "#infoM" ).append( '<div id="div-sm" class="col-md "><iframe width="200" height="150" src="https://www.youtube.com/embed/B4C2CJLE-04" frameborder="0" allowfullscreen></iframe></div>' );
	        

	        break;

	    case '2':
	        $( "#popup" ).append( "<p>sala 2</p>" );
	        $( "#popup" ).append( '<img src="'+url+'" height="100" width="100"/>' );

	        break;
	    case '3':
	        $( "#popup" ).append( "<p>sala 3</p>" );
	        $( "#popup" ).append( '<img src="'+url+'" height="100" width="100"/>' );
	        break;
	    default:
	        
	} 
	$( "#myModal" ).fadeIn( "slow", function() {
  
  	});
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}