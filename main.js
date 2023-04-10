AOS.init();

$(function(){
    $('#fullpage').fullpage({
		//options here
		anchors:['section1', 'section2', 'section3' , 'section4'],
		autoScrolling:true,
		scrollHorizontally: true,
		navigation:true,
		navigationPosition:'right',
	});
})

// <---- 상단 메뉴 고정------->
var $header = $('header');
$(window).scroll(function(){
	if($(this).scrollTop() > 0 ){
		$header .addClass('sticky');
	}else{
		$header .removeClass('sticky');
	}
});

// <----------슬라이드------------>
// var swiper = new Swiper(".mySwiper", {
// 	pagination: {
// 	  el: ".swiper-pagination",
// 	  type: "progressbar",
// 	},
// 	navigation: {
// 	  nextEl: ".swiper-button-next",
// 	  prevEl: ".swiper-button-prev",
// 	},
//   });
