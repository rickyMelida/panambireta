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


//Pasa automatico a la derecha las imagenes
//setInterval(function(){ derecha();}, 4000);


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
	window.open("blog.html",'_self');
	
});


$("#cont_info").click(function() {
	window.open("blog.html", '_self');

});

$("#cont_evan").click(function() {
	window.open("blog.html", '_self');
});

$("#cont_vida").click(function() {
	window.open("blog.html", '_self');
});


$("#cont_hormigas").click(function() {
	window.open("blog.html", '_self');
});

$("#cont_alma").click(function() {
	window.open("blog.html", '_self');
});


window.addEventListener("load", function() {
	if(document.title == "Blog" && $(window).width() >= 1024){
		$("#pie").css("marginTop", "0");
	}
		
});



/*Funcion para abrir la vnetana de la radio*/
function radio() {
	window.open("http://radioibpr.herokuapp.com", "Radio PanambiReta", "width=300, height=auto");
}

$("#actividades").click(function () {
	if(document.title == "IBPR") {
		window.open("src/actividades.html", '_self');
	}else {
		window.open("actividades.html", '_self');
	}
	
});

$("#consejeria").click(function () {

	if(document.title == "IBPR") {
		window.open("src/consejeria.html", '_self');
	}else {
		window.open("consejeria.html", '_self');
	}
	
});

$("#m_oracion").click(function () {
	if(document.title == "IBPR") {
		window.open("src/intersecion.html", '_self');
	}else {
		window.open("intersecion.html", '_self');
	}
	
});

$(window).scroll(function() {
	var valor_scroll = $(window).scrollTop();
	console.log(valor_scroll);

	if(valor_scroll >= 400) {
		
	}
});

