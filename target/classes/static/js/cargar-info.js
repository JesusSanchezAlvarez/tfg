$(document).on("click", ".boton", function(){
    var elemento = $(this).parent().parent();
    var img = $(elemento).find("img")[0];
    var h4 = $(elemento).find("h4");
    localStorage.setItem("imagen",img.getAttribute("src"));
    localStorage.setItem("titulo",h4.html());
    //BUSCAMOS EL PARRAFO ENTERO.
    $.getJSON('https://salyygana.000webhostapp.com/blog/wp-json/wp/v2/posts/',function(data) {
        for(var i =0;i<data.length;i++){
           if(data[i].title.rendered == h4.html()){
                var p = data[i].content.rendered;
                localStorage.setItem("parrafo",p);
           } 
        }
         window.location.href = 'pagina-blog.html';
    });
   
});