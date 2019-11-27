console.log("here");
var imgs = $("img");
var msg = "Hover over an image below.";
var image = $("#image");

imgs.each(function(){
	imgs.mouseover(function(){
		image.css("backgroundImage", 'url(' +this.src+')');
		image.html(this.alt);
	})

	imgs.mouseout(function(){
		image.css("backgroundImage", 'url()');
		image.html(msg);
	})

	imgs.focus(function(){
		image.css("backgroundImage", 'url(' +this.src+')');
		image.html(this.alt);
	})

	imgs.blur(function(){
		image.css("backgroundImage", 'url()');
		image.html(msg);
	})
})
