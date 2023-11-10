$(document).ready(function(){
	var scrollGap = 250;
	// 주머니(money)정기적금
	if($('.marketingArea').hasClass('pocketAniWrap')){
		$(window).scroll(function() {
			if ($(this).scrollTop() >= Math.ceil($('.aniSec01').offset().top - scrollGap)) {
				setTimeout(function(){
					$(".pocketAniBox.size01").addClass("ani");
				},000);
				setTimeout(function(){
					$(".pocketAniBox.size01").addClass("ani1");
				},800);
				setTimeout(function(){
					$(".pocketAniBox.size01").addClass("ani2");
				},1000);
				setTimeout(function(){
					$(".pocketAniBox.size01").addClass("ani3");
				},1200);
				setTimeout(function(){
					$(".pocketAniBox.size01").addClass("ani4");
				},1800);
			} 

			if ($(this).scrollTop() >= Math.ceil($('.aniSec02').offset().top - scrollGap)) {
				setTimeout(function(){
					$(".pocketAniBox.size02").addClass("ani");
				},000);
				setTimeout(function(){
					$(".pocketAniBox.size02").addClass("ani1");
				},500);
				setTimeout(function(){
					$(".pocketAniBox.size02").addClass("ani2");
				},600);
				setTimeout(function(){
					$(".pocketAniBox.ani1 .txtBox").addClass("op");
					$(".pocketAniBox.size02").addClass("ani3");
				},800);
				setTimeout(function(){
					$(".pocketAniBox.size02").addClass("ani4");
				},1500);
				setTimeout(function(){
					$(".pocketAniBox.size02").addClass("ani5");
				},1800);
			} 

			if ($(this).scrollTop() >= Math.ceil($('.aniSec03').offset().top - scrollGap)) {
				setTimeout(function(){
					$(".pocketAniBox.size03").addClass("ani");
				},000);
				setTimeout(function(){
					$(".pocketAniBox.size03").addClass("ani1");
				},500);
				setTimeout(function(){
					$(".pocketAniBox.size03").addClass("ani2");
				},800);
				setTimeout(function(){
					$(".pocketAniBox.size03").addClass("ani3");
				},1500);
				setTimeout(function(){
					$(".pocketAniBox.size03").addClass("ani4");
				},1800);
			} 
		});
	}

	//주머니통장 모션
	if($('.marketingArea').hasClass('myPocketAniWrap')){
		$(window).scroll(function() {
			if ($(this).scrollTop() >= Math.ceil($('.aniSec01').offset().top - scrollGap)) {
				setTimeout(function(){
					$(".myPocketAniBox.ani01").addClass("ani");
				},000);
				setTimeout(function(){
					$(".myPocketAniBox.ani01").addClass("ani2");
				},1200);
				setTimeout(function(){
					$(".myPocketAniBox.ani01").addClass("ani3");
				},1800);
			} 

			if ($(this).scrollTop() >= Math.ceil($('.aniSec02').offset().top - scrollGap)) {
				setTimeout(function(){
					$(".myPocketAniBox.ani02").addClass("ani");
				},000);
				setTimeout(function(){
					$(".myPocketAniBox.ani02").addClass("ani2");
				},600);
				setTimeout(function(){
					$(".myPocketAniBox.ani02").addClass("ani3");
				},1000);
				setTimeout(function(){
					$(".myPocketAniBox.ani02").addClass("ani4");
				},1800);
			} 

			if ($(this).scrollTop() >= Math.ceil($('.aniSec03').offset().top - scrollGap)) {
				textAnimate();
				setTimeout(function(){
					$(".myPocketAniBox.ani03").addClass("ani");
				},000);
				setTimeout(function(){
					$(".myPocketAniBox.ani03").addClass("ani1");
				},500);
				setTimeout(function(){
					$(".myPocketAniBox.ani03").addClass("ani2");
				},1000);
				setTimeout(function(){
					$(".myPocketAniBox.ani03").addClass("ani3");
				},1500);
				setTimeout(function(){
					$(".myPocketAniBox.ani03").addClass("ani4");
				},1800);
				setTimeout(function(){
					$(".myPocketAniBox.ani03").addClass("ani5");
				},2000);
				setTimeout(function(){
					$(".myPocketAniBox.ani03").addClass("ani6");
				},2400);
				setTimeout(function(){
					$(".myPocketAniBox.ani03 .over2").css('display','none');
					$(".myPocketAniBox.ani03 .over6").css('display','none');
					$(".myPocketAniBox.ani03 .over7").css('display','block');
					$(".myPocketAniBox.ani03 .over4").addClass('top');
				},1500);
			} 

			if ($(this).scrollTop() >= Math.ceil($('.aniSec04').offset().top - scrollGap)) {
				setTimeout(function(){
					$(".scrollBanner02").addClass("animate");
				},500);
				setTimeout(function(){
					$(".scrollBanner02").addClass("ani1");
				},600);
				setTimeout(function(){
					$(".scrollBanner02").addClass("ani2");
				},1000);
			} 
		});
	}

	// NH 정기적금 모션
	if($('.marketingArea').hasClass('everydayAniWrap')){
		$(window).scroll(function() {
			if ($(this).scrollTop() >= Math.ceil($('.aniSec01').offset().top - scrollGap)) {
				setTimeout(function(){
					$(".everydayAniBox.size01").addClass("ani");
				},000);
				setTimeout(function(){
					$(".everydayAniBox.size01").addClass("ani1");
				},300);
				setTimeout(function(){
					$(".everydayAniBox.size01").addClass("ani2");
				},1200);
			} 

			if ($(this).scrollTop() >= Math.ceil($('.aniSec02').offset().top - scrollGap)) {
				setTimeout(function(){
					$(".scrollBanner02").addClass("animate");
				},000);
			} 

			if ($(this).scrollTop() >= Math.ceil($('.aniSec03').offset().top - scrollGap)) {
				setTimeout(function(){
					$(".everydayAniBox.size02").addClass("ani");
				},000);
				setTimeout(function(){
					$(".everydayAniBox.size02").addClass("ani1");
				},500);
				setTimeout(function(){
					$(".everydayAniBox.size02").addClass("ani2");
				},1000);
				setTimeout(function(){
					$(".everydayAniBox.size02").addClass("ani3");
				},1500);
				setTimeout(function(){
					$(".everydayAniBox.size02").addClass("ani4");
				},2000);
			} 
		});
	}

	// NH콕마이카신용대출 모션
	if($('.marketingArea').hasClass('myCarLoanAniWrap')){
		$(window).scroll(function() {
			if ($(this).scrollTop() >= Math.ceil($('.aniSec01').offset().top - scrollGap)) {
				setTimeout(function(){
					$(".scrollBanner02").addClass("animate");
				},000);
			} 

			if ($(this).scrollTop() >= Math.ceil($('.aniSec02').offset().top - scrollGap)) {
				setTimeout(function(){
					$(".scrollBanner01").addClass("animate");
				},000);
				setTimeout(function(){
					$(".scrollBanner01").addClass("animate2");
				},800);
				setTimeout(function(){
					$(".scrollBanner01").addClass("animate3");
				},1600);
			} 

			if ($(this).scrollTop() >= Math.ceil($('.aniSec03').offset().top - scrollGap)) {
				setTimeout(function(){
					$(".scrollBanner03").addClass("animate");
				},000);
				setTimeout(function(){
					$(".scrollBanner03").addClass("animate2");
				},400);
				setTimeout(function(){
					$(".scrollBanner03").addClass("animate3");
				},800);
				setTimeout(function(){
					$(".scrollBanner03").addClass("animate4");
				},1200);
				setTimeout(function(){
					$(".scrollBanner03").addClass("animate5");
				},1600);
				setTimeout(function(){
					$(".scrollBanner03").addClass("animate6");
				},2000);
			} 
		});
	}
});

//금액 animate효과
function textAnimate(){
	var comma_separator_number_step = jQuery.animateNumber.numberStepFactories.separator(',');
	jQuery('.myPocketAniBox.ani03 .over5 .pay i').animateNumber(
	{
		number:5000000,
		numberStep:comma_separator_number_step
	}
	,2000);
};

