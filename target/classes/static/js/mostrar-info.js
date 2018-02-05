$(document).ready(function(){
    var img =  localStorage.getItem("imagen");
    var h4 =   localStorage.getItem("titulo");
    var p =   localStorage.getItem("parrafo");
   document.getElementById("imagen-post").setAttribute("src",img);
   document.getElementById("titulo").innerHTML=h4;
   //HACER PETICION PARA CONSEGUIR PARRAFO COMPLETO.
   document.getElementById("div-parrafo").innerHTML=p;
   
   
});