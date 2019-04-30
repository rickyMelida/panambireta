var siguiente = $("#btn-next");
var anterior = $("#btn-prev");

$("#slider").css("margin-left", "-" + 100 + "%");

/*Va a izquierda*/
anterior.click(function() {
	$("#slider").animate({marginLeft: "-" + 200 + "%"}, 700, function(){
		$("#slider .portada:first").insertAfter("#slider .portada:last");
		$("#slider").css("margin-left","-" + 100 + "%");
	});
});


var ancho_vent = window.innerWidth;
setInterval(function() {
	ancho_vent = window.innerWidth;
}, 500);


/*Va a derecha*/
siguiente.click(function() {
	$("#slider").animate({marginLeft: 0 + "%"}, 2000, function(){
		$("#slider .portada:last").insertBefore("#slider .portada:first");
		$("#slider").css("margin-left", "-" + 100 + "%");
	});
});

/*Pasa automatico a la derecha las imagenes
setInterval(function(){
	$("#slider").animate({marginLeft: 0 + "%"}, 700, function(){
		$("#slider .portada:last").insertBefore("#slider .portada:first");
		$("#slider").css("margin-left", "-" + 100 + "%");
	});
}, 4000);*/

/*Solamente se va a ejecutar con click cuando es tamaño movil y tablets*/
if(ancho_vent <= 1024) {
	$("#serv").click(function() {
		slider();
	});
	
}else {
	$("#serv").hover(function() {
		$("#serv ul").slideDown(500);
	}, function() {
		$("#serv ul").slideUp(500);
	});	
}





function slider() {
	$("#serv ul").slideToggle(700);
}

function radio() {
	window.open("http://listen.radionomy.com/panambireta", "Radio PanambiReta", "width=300, height=auto")
}