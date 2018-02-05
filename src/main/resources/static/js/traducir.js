$(document).ready(function(){
	
	$("#espan").on("click", function(event){
		localStorage.setItem("idioma","es");
		 (function(){
	    		$("[data-translate]").jqTranslate('json/index',{defaultLang:'es',forceLang:"es",asyncLangLoad: false});
	    })();
		 var elemento = document.getElementById("espan");
			elemento.style.display = 'none';
			var elemento2 = document.getElementById("ingles");
			elemento2.style.display = 'none';
	});
	
	$("#ingles").on("click", function(event){
		localStorage.setItem("idioma","en");
		 (function(){
	    		$("[data-translate]").jqTranslate('json/index',{defaultLang:'es',forceLang:"en",asyncLangLoad: false});
	    })();
		var elemento = document.getElementById("espan");
		elemento.style.display = 'none';
		var elemento2 = document.getElementById("ingles");
		elemento2.style.display = 'none';
	});
	  
});	