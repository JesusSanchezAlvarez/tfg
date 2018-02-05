var urls=[];
$( document ).ready(function() {
var token = '2997738061.8bdf2da.9bbaf93dde1746dba995d0543f58aa38',
    num_photos = 15;
 
$.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
        console.log(data);
        var i = 1;
        for( x in data.data ){
            document.getElementById("ins-"+i).setAttribute("src",data.data[x].images.low_resolution.url);
            urls.push(data.data[x].link);
            i++;
           //$("#lista-instagram").append('<li class="portfolio-item"><img src="'+data.data[x].images.low_resolution.url+'"></li>');
        }
    },
    error: function(data){
        console.log("error relizando peticion a instagram");
    }
});
i=0;
});

function redireccionaInstagram(id){
    window.open(urls[id-1]);
}

