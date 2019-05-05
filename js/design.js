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

/*Va a derecha*/
siguiente.click(function() {
	$("#slider").animate({marginLeft: 0 + "%"}, 2000, function(){
		$("#slider .portada:last").insertBefore("#slider .portada:first");
		$("#slider").css("margin-left", "-" + 100 + "%");
	});
});



$(window).scroll(function() {
	var valor_scroll = $(window).scrollTop();
	console.log(valor_scroll);
});
/*Pasa automatico a la derecha las imagenes
setInterval(function(){
	$("#slider").animate({marginLeft: 0 + "%"}, 700, function(){
		$("#slider .portada:last").insertBefore("#slider .portada:first");
		$("#slider").css("margin-left", "-" + 100 + "%");
	});
}, 4000);*/


var ancho_vent = window.innerWidth;


/*Funcion que va testeando cada 500ms el ancho de la ventana*/
function estado_ancho() {	
	setInterval(function() {
		ancho_vent = window.innerWidth;
	}, 500);
}


/*Solamente se va a ejecutar con click cuando es tamaño movil y tablets*/
	if(ancho_vent >= 1024){
		$("#serv").hover(function() {
			slider();
		});
		estado_ancho();
	}else {
		$("#serv").click(function() {
			slider();
		});	
		estado_ancho();
	}

/*Funcion para desplegar el submenu*/
function slider() {
	$("#serv ul").slideToggle(700);
}

/*Funcion para abrir la vnetana de la radio*/
function radio() {
	window.open("http://listen.radionomy.com/panambireta", "Radio PanambiReta", "width=300, height=auto")
}