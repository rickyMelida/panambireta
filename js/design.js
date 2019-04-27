var siguiente = $("#btn-next");
var anterior = $("#btn-prev");

$("#slider").css("margin-left", "-" + 100 + "%");

anterior.click(function() {
	$("#c-slider").animate({marginLeft: "-" + 100 + "%"}, 700, function(){
		$("#slider .portada:last").insertAfer("#slider .portada:first");
		$("#slider").css("margin-left", "-" + 100 + "%");
	});
});


function radio() {
	window.open("http://listen.radionomy.com/panambireta", "Radio PanambiReta", "width=300, height=auto")
}