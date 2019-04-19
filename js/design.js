window.onload = function() {
	var valor_top = 100;
	for (var i = 1; i < 4; i++) {
		$("#texto_"+i).css('top', valor_top + 'vh');
		valor_top = valor_top + 120;	
	}


}

/*Cuando alcanza los valores relativos de las variables 
estas van a desaparecer de la pantalla*/
var sale_banner = 50;
var sale_mision = 550;
var sale_vision = 1200;
var sale_valores = 1700;


var banner = "#texto_0";
var mision = "#texto_1";
var vision = "#texto_2";
var valores = "#texto_3";
var conocer = "#conocer";

$(window).scroll(function(){
	var valor_scroll = $(window).scrollTop();
	console.log("el scroll vale " + valor_scroll);

	//Si el valor del scroll es menor al valor donde tiene que desaparecer el banner
	//Se mostrará el banner
	if(valor_scroll < sale_banner) {
		$(banner).fadeIn(1000, "linear");
		$(conocer).fadeIn(1000, "linear");
	}else {
		$(banner).fadeOut(1000, "linear");
		$(conocer).fadeOut(1000, "linear");
	}

	if(valor_scroll < sale_mision) {
		$(mision).fadeIn(1000, "linear");

	}else {
		$(mision).fadeOut(1000, "linear");

	}

	if(valor_scroll < sale_vision) {
		$(vision).fadeIn(1000, "linear");

	}else {
		$(vision).fadeOut(1000, "linear");
		
	}

	if(valor_scroll < sale_valores) {
		$(valores).fadeIn(1000, "linear");

	}else {
		$(valores).fadeOut(1000, "linear");
	}
});

function radio() {
	window.open("http://listen.radionomy.com/panambireta", "Radio PanambiReta", "width=300, height=auto")
}