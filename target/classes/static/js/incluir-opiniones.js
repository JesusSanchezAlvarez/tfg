$(document).ready(function(){
	   $.getJSON('/getOpiniones',incluiropiniones); 
	   function incluiropiniones(ops,status){
			for(var i = 0; i<ops.length;i++){
				var j=i+1;
				document.getElementById("op"+j).innerHTML=ops[i].cuerpo; 
				document.getElementById("autor"+j).innerHTML=ops[i].autor.nombreUsuario; 
			}	
		}   
});	
