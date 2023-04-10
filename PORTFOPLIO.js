$(function(){
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});
})

// <---- 해더 메뉴 언더라인 ---->
let horizontalunderline = document .getElementById("horizontal_underline");
let horizontalmenus = document .querySelectorAll("nav a");

horizontalmenus.forEach(menu=>menu .addEventListener("click",(e)=>horizontalIndicator(e)))

function horizontalIndicator(e) {
    horizontalunderline.style.left = e .currentTarget .offsetLeft + "px";
    horizontalunderline.style.width = e .currentTarget .offsetWidth + "px";
    horizontalunderline.style.top = 
     e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}


// <------리뉴얼 파트 슬라이드 -------->
