 var rellax = new Rellax('.rellax');


 jQuery(function($){
   $(".phone").mask("+7(999) 999-99-99");
});


 wow =  new WOW({
	mobile: false
});

wow.init();


$(document).ready(function(){
	$('.header-btn').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.popup-order_phone').fadeIn();	
	});

	$('.btn-order_vrbox, .button-order').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.popup-order_vrbox').fadeIn();	
	});

	$('.about-vrbox-button').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.popup-order').fadeIn();	
	});

	$('.play_video-vrbox').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.video').fadeIn();	
	});


	$('.cross').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.popup').fadeOut();
	});

	$('.ask').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.popup-answer').fadeIn();
	});


	$('.apps-descriptions').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows:true,
		responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
		      }
		    },
		    {
		      breakpoint: 575,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
		      }
		    }
		]
	});
	$('.feedback-slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		rows: 2,
		arrows:true,
		responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        rows: 1,
		        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        rows: 1,
		        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
		      }
		    },
		    {
		      breakpoint: 575,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        rows: 1,
		        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
		      }
		    }
		]
	});
});