var ids=[];
$(document).ready(function(){
	   $.getJSON('https://salyygana.000webhostapp.com/blog/wp-json/wp/v2/posts/',incluirpost);
});			
function incluirpost(posts,status){
			$("#post-9").append('<h4 class="card-title">'+posts[0].title.rendered+'</h4>');
			$("#post-9").append(posts[0].excerpt.rendered).attr("class","card-text");
			$("#post-9").append('<a href="#" class="btn btn-primary">Button</a>');
			ids.push(posts[0].featured_media);
			$.getJSON('https://salyygana.000webhostapp.com/blog/wp-json/wp/v2/media/',incluirfotos);
}

function incluirfotos(media,status){
		document.getElementById('img9').src = media[0].media_details.sizes.medium.source_url;

}
