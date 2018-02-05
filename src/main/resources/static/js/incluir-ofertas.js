$(document).ready(function(){
	   $.getJSON('/getOfertas',incluirofertas); 
	   function incluirofertas(ofs,status){
			for(var i = 0; i<ofs.length;i++){
				document.getElementById("img-of-"+i).setAttribute("src","./ofertas/"+ofs[i].urlImagen); 
				document.getElementById("href-of-"+i).setAttribute("href","./ofertas/"+ofs[i].urlImagen); 
			}	
		}   
});	
