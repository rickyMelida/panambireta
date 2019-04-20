window.onload = function() {
	var valor_top = 100;
	for (var i = 1; i < 4; i++) {
		$("#texto_"+i).css('top', valor_top + 'vh');
		valor_top = valor_top + 120;	
	}
}

var indiceSlider = 1;
mostrarSlider(indiceSlider);

function sumarSlider(n) {
	//Ahora sldieIndex vale el valor de n
	mostrarSlider(indiceSlider += n);
}

function currentSlide(n) {
	showSlides(indiceSlider = n);
}

function mostrarSlider(n) {
	var slider = document.getElementsByClassName("portada");

	//alert("aca entra y slider vale " + slider.length);
	//si n vale mas de la cantidad de elementos que tienen la clase myslides
	if (n > slider.length) {
		indiceSlider = 1;
	} 

	if (n < 1) {
		indiceSlider = slider.length;
	}

	for (var i = 0; i < slider.length; i++) {
		slider[i].style.display = "none"; 
		slider[i].style.transition = "all 0.5s";
	}

	slider[indiceSlider-1].style.display = "block"; 
  
}


/*Cuando alcanza los valores relativos de las variables 
estas van a desaparecer de la pantalla*/
var sale_banner = 50;
var sale_mision = 700;
var sale_vision = 1650;
var sale_valores = 2200;


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


	if(valor_scroll < sale_mision ) {
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

	
		//alert("aca entro");
		if(sale_mision > valor_scroll) {
			$("#presentacion").css("background", "#DC143C");	
		}else{
			if (sale_vision > valor_scroll) {
				$("#presentacion").css("background", "#228b22");
				$("#presentacion").css("transition", "all 1s");	
			}else {
				if(sale_valores > valor_scroll) {
					$("#presentacion").css("background", "#4169E1");
					$("#presentacion").css("transition", "all 1s");
				}else {
					if(valor_scroll > sale_valores) {
						$("#presentacion").css("background", "#000");
						$("#presentacion").css("transition", "all 1s");
					}
				}
			}
		}
		

});



function radio() {
	window.open("http://listen.radionomy.com/panambireta", "Radio PanambiReta", "width=300, height=auto")
}