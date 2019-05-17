var siguiente = $("#btn-next");
var anterior = $("#btn-prev");

$("#slider").css("margin-left", "-" + 100 + "%");

/*Va a izquierda*/
function izquierda() {
	$("#slider").animate({marginLeft: "-" + 200 + "%"}, 2000, function(){
		$("#slider .portada:first").insertAfter("#slider .portada:last");
		$("#slider").css("margin-left","-" + 100 + "%");
	});
}

function derecha() {
	$("#slider").animate({marginLeft: 0 + "%"}, 2000, function(){
		$("#slider .portada:last").insertBefore("#slider .portada:first");
		$("#slider").css("margin-left", "-" + 100 + "%");
	});
}

anterior.click(function() {
	izquierda();
});

/*Va a derecha*/
siguiente.click(function() {
	derecha();
});


/*Con efecto zona_touch
var zona_touch = document.getElementById("slider");
var tactil = new Hammer(zona_touch);

var cont_derecha, cont_izquierda = 0;
tactil.on("panleft", function() {
	cont_izquierda = 1 + cont_izquierda;
	if (cont_izquierda >= 5) {
		izquierda();
	}
	
});

tactil.on("panright", function() {
	cont_derecha = 1 + cont_derecha;

	if(cont_derecha >= 5) {
		derecha();	
	} 
	
});
*/



$(window).scroll(function() {
	var valor_scroll = $(window).scrollTop();
	console.log(valor_scroll);

	if(valor_scroll >= 400) {
		
	}
});
/*/Pasa automatico a la derecha las imagenes
setInterval(function(){ derecha();}, 4000);*/


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


/*redireccionamos a la editorial*/
$("#pagina_edit").click(function() {
	window.open("blog.html", '_blank');
});


/*Redireccionamos al blog en el articulo selecionado*/
$("#pagina_info").click(function() {
	window.open('http://google.com', '_blank');
});

/*Funcion para abrir la vnetana de la radio*/
function radio() {
	window.open("http://listen.radionomy.com/panambireta", "Radio PanambiReta", "width=300, height=auto")
}