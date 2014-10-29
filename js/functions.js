(function($){
	"use strict";
	$(function(){

		/**
		 * Validación de emails
		 */
		window.validateEmail = function (email) {
			var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regExp.test(email);
		};


		/**
		 * Regresa todos los valores de un formulario como un associative array
		 */
		window.getFormData = function (selector) {
			var result = [],
				data   = $(selector).serializeArray();
			$.map(data, function (attr) {
				result[attr.name] = attr.value;
			});
			return result;
		}

		/**
		* Fondos para cada sección
		**/
		$('.intro').backstretch('images/bg-textura.jpg');
		$('.que-es-hedbanger').backstretch('images/bg-interior.jpg');
		$('.barba-barra').backstretch('images/bg-barbero-1.jpg');
		$('.redes-sociales').backstretch('images/bg-barra.jpg');
		$('.contacto').backstretch('images/bg-jack.jpg');



		/**
		* Navegación
		**/
		var contentSections = $('section'),
		navigationItems = $('#cd-vertical-nav a');

		updateNavigation();
		$(window).on('scroll', function(){
			updateNavigation();
		});

		//smooth scroll to the section
		navigationItems.on('click', function(event){
	        event.preventDefault();
	        smoothScroll($(this.hash));
	    });
	    //smooth scroll to second section
	    $('.scroll-down').on('click', function(event){
	        event.preventDefault();
	        smoothScroll($(this.hash));
	    });

	    //open-close navigation on touch devices
	    $('.touch .cd-nav-trigger').on('click', function(){
	    	$('.touch #cd-vertical-nav').toggleClass('open');

	    });
	    //close navigation on touch devices when selectin an elemnt from the list
	    $('.touch #cd-vertical-nav a').on('click', function(){
	    	$('.touch #cd-vertical-nav').removeClass('open');
	    });

		function updateNavigation() {
			contentSections.each(function(){
				var activeSection = $('#cd-vertical-nav a[href="#'+$(this).attr('id')+'"]').data('number') - 1;
				if ( ( $(this).offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop() ) ) {
					if ( activeSection == 0 ){
						$('h1').css('top', '50%');
						$('#cd-vertical-nav').css('right', '-400px');
					} else {
						$('h1').css('top', '20%');
						$('#cd-vertical-nav').css('right', '40px');
					}
					if ( activeSection == 5 ){
						$('h1').css('top', '-20%');
					}
					navigationItems.eq(activeSection).addClass('is-selected');
				}else {
					navigationItems.eq(activeSection).removeClass('is-selected');
				}
			});
		}

		function smoothScroll(target) {
	        $('body,html').animate(
	        	{'scrollTop':target.offset().top},
	        	600
	        );
		}
	});
})(jQuery);