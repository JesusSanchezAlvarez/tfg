/**
 * 
 */
function verTrailer(){
	alert();
$("#iframe").attr({
		src:localStorage.getItem("url")
	});
	window.open("paginaTrailer.html");
}