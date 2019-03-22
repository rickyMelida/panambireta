var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

siguiente.click(function() {
	$("section#uno").removeClass('portada_vista');
	$(".portada_1").addClass('portada_vista');
	$("section#uno").addClass('portada_1');
	$("section#dos").removeClass("portada_1");

	

});

anterior.click(function() {	
	$('.portada_vista').fadeIn(1000, function() {
		$("section#dos").removeClass('portada_vista');
		$(".portada_1").addClass('portada_vista');
		$("section#dos").addClass('portada_1');
		$("section#uno").removeClass("portada_1");
	});
});