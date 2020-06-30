$(document).ready(function(){
		  $('.slider').slick({
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  slidesToShow: 1,
		  speed: 1000,
		  easing: 'linear',
		  autoplay: true,
		  autoplaySpeed: 2000,
		  pauseOnFocus: false,
		  pauseOnHover: false,
		  pauseOnDotsHover: false,
		  draggable: true,
		  swipe: true,
		  waitForAnimate: false,
		  fade: false
		  });
		});

$(".tab_item").not(":first").hide();
$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(document).ready(function(){
		  $('.cards').slick({
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  slidesToShow: 6,
		  speed: 1000,
		  easing: 'linear',
		  autoplay: false,
		  autoplaySpeed: 2000,
		  pauseOnFocus: false,
		  pauseOnHover: false,
		  pauseOnDotsHover: false,
		  draggable: true,
		  swipe: true,
		  waitForAnimate: false,
		  fade: false,
		  slidesToScroll: 6
		  });
		});

$(document).ready(function(){
		  $('.partners').slick({
		  arrows: false,
		  dots: true,
		  adaptiveHeight: true,
		  slidesToShow: 4,
		  speed: 1000,
		  easing: 'linear',
		  autoplay: false,
		  autoplaySpeed: 2000,
		  pauseOnFocus: false,
		  pauseOnHover: false,
		  pauseOnDotsHover: false,
		  draggable: true,
		  swipe: true,
		  waitForAnimate: false,
		  fade: false,
		  slidesToScroll: 4
		  });
		});