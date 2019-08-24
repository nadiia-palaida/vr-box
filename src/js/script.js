 var rellax = new Rellax('.rellax');


 jQuery(function($){
   $(".phone").mask("+7(999) 999-99-99");
});


 wow =  new WOW({
	mobile: false
});

wow.init();

$(function() {
    $('.lazy').Lazy();
});


$(document).ready(function(){
	$('.header-btn').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').addClass('hide');
		$('.popup-order_phone')
			.css('display', 'flex')
			.hide()
			.fadeIn();	
	});

	$('.btn-order_vrbox, .button-order').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').addClass('hide');
		$('.popup-order_vrbox')
			.css('display', 'flex')
			.hide()
			.fadeIn();		
	});

	$('.about-vrbox-button').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').addClass('hide');
		$('.popup-order')
			.css('display', 'flex')
			.hide()
			.fadeIn();	
	});

	$('.play_video-vrbox').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').addClass('hide');
		$('.video.popup').fadeIn();	

	});

	$('.video_vrbox iframe').click(function (event) {
 		 event.stopPropagation();
	});

	$('.video').click(function(event) {
		$('.popup').fadeOut();
		$('html, body').removeClass('hide');
	});


	$('.cross, .popup').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('.popup').fadeOut();
		$('html, body').removeClass('hide');
	});

	$('.ask').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').addClass('hide');
		$('.popup-answer')
			.css('display', 'flex')
			.hide()
			.fadeIn();	
	});

	$('.form').click(function (event) {
 		 event.stopPropagation();
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

var widthDoc = document.documentElement.clientWidth;
var imgChange = document.querySelector('.main-img-right');
console.log(widthDoc);

 if (widthDoc < 992 && widthDoc > 575) {
 		imgChange.setAttribute('src', 'img/main/photo3-md.png');
 	} 
 	else if (widthDoc < 575) {
 		imgChange.setAttribute('src', 'img/main/photo3-xs.png');
 	} ;