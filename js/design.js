var siguiente = $("#btn-next");
var anterior = $("#btn-prev");

$("#slider").css("margin-left", "-" + 100 + "%");
//$("#slider .portada:last").insertBefore("#slider .portada:first");


anterior.click(function() {
	$("#slider").animate({marginLeft: "-" + 200 + "%"}, 700, function(){
		$("#slider .portada:first").insertAfter("#slider .portada:last");
		$("#slider").css("margin-left","-" + 100 + "%");
	});
});

siguiente.click(function() {
	$("#slider").animate({marginLeft: 0 + "%"}, 700, function(){
		$("#slider .portada:last").insertBefore("#slider .portada:first");
		$("#slider").css("margin-left", "-" + 100 + "%");
	});
});


function radio() {
	window.open("http://listen.radionomy.com/panambireta", "Radio PanambiReta", "width=300, height=auto")
}