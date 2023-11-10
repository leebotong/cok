"use strict";
/* [SEPTEM] UI Dev Team :: 콕뱅크 퍼블리싱가이드용 js */
/* 개발서버에 업로드 하지 말고 퍼블사이트 서버에만 업로드하세요 */

$(function() {
	checkMobile();
	//PopCheck();

	if($('body').hasClass('iOS')==true){
		// iosZom();
	}

	$('.tyNum').each(function(){
		fn_change_hangul_money(this);
	})

	jsListMore();

	// 모든 팝업에 role 속성 부여
	// 모든 팝업에 aria-hidden 속성 부여
	const dialogSET = document.querySelectorAll('.popupWrap');
	dialogSET.forEach(function(index){
		index.setAttribute('role', 'dialog');
		index.setAttribute('aria-hidden', true);
	});

	$('#wrap').prepend('<div class="pub"></div>');
	darkMode();
	senior();
});

const $html = $('html');

// 팝업 오픈시 팝업별 고유 ID 적용
// 오픈 ID 설정, 오픈된 팝업 닫을때 복귀 포인트 설정
$(function popupOpenSet() {
	const popOpen = document.querySelectorAll('.popOpen');

	popOpen.forEach(function(index){
		index.addEventListener('click', function(){
			console.log("POPUP ===========================");
			if ( index.getAttribute('href') ) {
				console.log(this.nodeName);
				var getHREF   = this.getAttribute('href'); // 링크 취득
				var cleanData = getHREF.slice(19, -2);	   // ID값 취득
				console.log(`This Node & target ID = ${this.nodeName} / ${cleanData}`);
			} else {
				console.log(this.nodeName);
				var getClick  = this.getAttribute('onclick'); // 클릭 함수 취득
				var cleanData = getClick.slice(8, -1);	      // ID값 취득
				console.log(`This Node & target ID = ${this.nodeName} / ${cleanData}`);
			}
			this.setAttribute('id', cleanData + '-open');
		});
	});
})

// 닫기 버튼이 있을 경우
// 닫기 버튼에 팝업의 h2 값을 적용하여 텍스트 치환
$(function closeSET() {
	var popClose = document.querySelectorAll('.btnPopClose');
	popClose.forEach(function(index){
		const title = index.closest('.popupWrap').querySelector('h2');
		index.textContent = title.textContent + ' 팝업 닫기';
	});
})

// ------------------------------------
//	팝업(slide, center, full)
//	팝업의 고유 ID를 기준으로 title, close, data값을 생성 및 제어
// ------------------------------------
function popOpen(popupID) {
	const POPUP       = popupID; // 팝업 정보 취득
	const POPUP_ID    = POPUP.getAttribute('id');  // 팝업 ID 취득
	const POPUP_TITLE = POPUP.querySelector('h2'); // 팝업 TITLE 취득

	// console.log(POPUP);
	POPUP.style.display = 'block'; // 선택된 팝업 표시
	POPUP.setAttribute('aria-hidden', false); // 선택된 팝업 aria 속성 변경

	// 접근성 포커스 위치 설정
	POPUP_TITLE.focus();

	// 타이틀에 ID와 동일한 data 값 설정, ID-title 설정
	POPUP_TITLE.setAttribute('id', POPUP_ID + '-title');
	POPUP_TITLE.setAttribute('data-popup-focus', POPUP_ID);

	// 팝업 닫기 버튼에 data 값 설정
	if ( POPUP.querySelector('.btnPopClose') ) {
		POPUP.querySelector('.btnPopClose').setAttribute('data-popup-focus-close', POPUP_ID + '-close');
	} else if ( POPUP.querySelector('.closePop') ) {
		POPUP.querySelector('.closePop').setAttribute('data-popup-focus-close', POPUP_ID + '-close');
	}

	// 팝업내 포커스 이동
	focusMOVING(POPUP_ID);
	eventClear();

	// POPUP 타입 구분 실행
	if ( POPUP.classList.contains('slide') ) {
		// 슬라이드 팝업
		console.log('open slide');
		// AS-IS: 기존 슬라이드 팝업용 소스 사용
		var layerSelBox = POPUP.querySelectorAll('.layerSelectContInner');
		layerSelBox.forEach(function(index){
			console.log(index.offsetHeight);
			index.animate([
				{bottom: '-' + index.offsetHeight + 'px'},
				{bottom: 0 + 'px'}
			], 500);
		});

		// AS-IS: 포커스 이동
		// $('.layerSelectTitle > h2').focus();
	} else if ( POPUP.classList.contains('center') ) {
		// 중앙 팝업
		console.log('open center');
		POPUP.style.display = 'block';
		// $(this).closest('.popupWrap').show();
	} else {
		// 풀팝업
		console.log('open full');
		POPUP.style.display = 'block';
		// $(this).closest('.popupWrap').show();
	}

	// 팝업 오픈시 바닦페이지 속성제어
	$('#wrap').attr('aria-hidden', true).css('position', 'fixed');
}

// ************************************
// POPUP CLOSE
// ************************************
// 팝업 닫기, 각 팝업용 이벤트
function popClose(e) {
	var POPUP = $(e).parents('.popupWrap');
	var $closeID = POPUP.attr('id');

	$('#' + POPUP.attr('id')).attr('aria-hidden', true); // 선택된 팝업 aria 속성 변경

	POPUP.hide();
	$('#' + $closeID + '-open').focus();
	console.log('close popup');

	// 팝업 오픈시 바닦페이지 속성제어
	$('#wrap').attr('aria-hidden', false).css('position', 'relative');
}

// ************************************
// 팝업내 포커스 이동
// 정방향: title -> page -> close -> title
// 역방향: title -> close -> title -> close
// ************************************
function focusMOVING(r) {
	$('[data-popup-focus-close="' + r + '-close"]').keydown(function(e) {
		var keyCode = e.keyCode || e.which;
		if (keyCode == 9) {
			e.preventDefault();
			var nextSelect = $('[data-popup-focus="'+ r + '"]');
			console.log(nextSelect.attr('id'));
			$(nextSelect).focus();
		}
	});

	$('[data-popup-focus="'+ r + '"]').keydown(function(e) {
		var keyCode = e.keyCode || e.which;
		if (keyCode == 9) {
			if (e.shiftKey) {
				e.preventDefault();
				var prevSelect = $('[data-popup-focus-close="' + r + '-close"]');
				console.log(prevSelect.attr('data-popup-focus-close'));
				$(prevSelect).focus();
			}
		}
	});
}

// slidePop 팝업 오픈시 바닦 영역 스크롤 방지
function eventClear() {
	// 팝업 오픈시 바닦 영역 스크롤 방지: 화면 전체를 사용하는 경우
	$('.fullPopupDim, .slidePopupDim, .layerPopupDim').bind('scroll touchmove', function(e){
		e.preventDefault();
		// console.log('popwrap 스크롤 방지');
	});

	$('.popContBox, .layerSelectContent, .Layer_Con').on('touchmove', function(e){
		e.stopPropagation();
		// console.log('content 스크롤 방지 해지');
	});
}

// ------------------------------------
//	iOS 확대막기
// ------------------------------------
function iosZom(){
	if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
		window.document.addEventListener('touchmove', e => {
			if(e.scale !== 1) {
			e.preventDefault();
			}
		}, {passive: false});
	}
}

function checkMobile(){
	var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
	if ( varUA.indexOf('android') > -1) {
		$('html').addClass('android');
		return "android";
	} else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
		$('html').addClass('iOS');
		return "ios";
	} else {
		$('html').addClass('otherOS');
		return "other";
	}
}

var arrNumberWord = new Array("","일","이","삼","사","오","육","칠","팔","구");// 1 ~ 9 한글 표시
var arrDigitWord  = new  Array("","십","백","천");// 10, 100, 100 자리수 한글 표시
var arrManWord    = new  Array("","만 ","억 ", "조 ");// 만단위 한글 표시

function fn_change_hangul_money(txt_id){
	var num_value  = txt_id.value;
	var num_length = num_value.length;

	if(isNaN(num_value) == true){
	return;
	}
	var han_value = "";
	var man_count = 0;// 만단위 0이 아닌 금액 카운트.

	for(var i=0; i < num_value.length; i++){
	// 1단위의 문자로 표시.. (0은 제외)
	var strTextWord = arrNumberWord[num_value.charAt(i)];

	// 0이 아닌경우만, 십/백/천 표시
	if(strTextWord != ""){
		man_count++;
		strTextWord += arrDigitWord[(num_length - (i+1)) % 4];
	}

	// 만단위마다 표시 (0인경우에도 만단위는 표시한다)
	if(man_count != 0 && (num_length - (i+1)) % 4 == 0){
		man_count = 0;
		strTextWord = strTextWord + arrManWord[(num_length - (i+1)) / 4];
	}
	han_value += strTextWord;
	}
	// if(num_value != 0){
	// 	han_value = han_value;
	// }
	// document.all.han_money.innerText = han_value;
	$(txt_id).parents('.formItem').find('.numVal').find('.data').text(han_value);
	console.log(han_value);
}

// 툴팁확인용
function toolTip(e){
	var current = e;
	var $tooltipCont = e.closest(".tooltipWrap").find(".tooltipCont");
	$(".tooltipCont").hide();
	$tooltipCont.show();
	e.closest('.tooltipWrap').find('.close').on('click', function () {
		$tooltipCont.hide();
		setTimeout(function () {
			e.focus();
		}, 100);
	})
}

function jsListMore() {
	var scrollState = true;
	var idx = 10;
	$(window).scroll(function () {
		// console.log('docuH :' + $(document).height());
		// console.log('scrollTop :' + $(window).scrollTop());
		// console.log('windowH :' + $(window).height());
		var contHeight = $(document).height();
		var currentScroll = $(window).scrollTop() + $(window).height();
		if (contHeight <= currentScroll + 1) {
			$(".jsListMore .listItem").slice(idx, idx + 5).slideDown(500);
			if (scrollState) {
				scrollState = false;
			}
			idx += 5;
			// console.log(idx);
		}
		if ($(".jsListMore .listItem:hidden").length < 1) {
			$('.more').hide();
		}
	})
}

// ------------------------------------
// 팝업 종류에 따라 대표 클래스 지정
// ------------------------------------
// function PopCheck() {
// 	$('.popWrap').each(function(e){
// 		if ( $(this).hasClass('dragPop') ) {
// 			$('.popWrap').attr('aria-hidden', true);
// 			//$(this).addClass('center');
// 		} else {
// 			$('.dragPop').attr('aria-hidden', false);
// 			//$(this).addClass('slide');
// 		}
// 	});
// }

// 팝업 초기 접근성 접근 차단

// ------------------------------------
//	다크 모드
// ------------------------------------
// 다크모드 버튼 생성
function darkMode(){
	$('.pub').append('<div class="colorModeSel">'+'<input type="checkbox" id="colorMode"><label for="colorMode"><span class="blind">다크모드</span></label>');
	colorAddClassinit();
	$('.colorModeSel input[type="checkbox"]').change(function(){
		colorAddClass();
	});
}

// 다크모드 판단
function colorAddClassinit(){
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		$('.colorModeSel input[type="checkbox"]').prop("checked", true);
	}
	colorAddClass();
}

// 다크,라이트모드 전환
function colorAddClass(){
	var colorModeV = $('.colorModeSel input[type="checkbox"]').prop("checked");
	if( colorModeV == false ){
		$html.removeClass('dark');
		$html.addClass('light');
		console.log('cok_pub2.js : colorMode : 밝은모드');
	} else {
		$html.removeClass('light');
		$html.addClass('dark');
		console.log('cok_pub2.js : colorMode : 어두운모드');
	}
}

// ------------------------------------
//	시니어 모드
// ------------------------------------
// 시니어 버튼 생성
function senior(){
	$('.pub').append('<div class="seniorModeSel">'+'<input type="checkbox" id="seniorMode"><label for="seniorMode"><span class="blind">시니어모드</span></label>');
	typeAddClassinit();
	$('.seniorModeSel input[type="checkbox"]').change(function(){
		typeAddClass();
	});

	// console.log($('.popLayout').height());
}

// 시니어 판단
function typeAddClassinit(){
	if (window.matchMedia("(prefers-color-scheme: senior)").matches) {
		$('.seniorModeSel input[type="checkbox"]').prop("checked", true);
	}
	typeAddClass();
}

// 다크,라이트모드 전환
function typeAddClass(){
	var seniorModeV = $('.seniorModeSel input[type="checkbox"]').prop("checked");
	// var seniorpopLayoutHeight = $('.senior .popLayout').height();

	// console.log('senior:' + seniorpopLayoutHeight);

	if( seniorModeV == false ){
		$html.removeClass('senior');
		$html.addClass('normal');
		console.log('cok_pub2.js : seniorMode : 노말모드');
		// dragEvent();
	} else {
		$html.removeClass('normal');
		$html.addClass('senior');
		console.log('cok_pub2.js : seniorMode : 시니어모드');
		// $('.senior .popWrap').css('height', seniorpopLayoutHeight + 'px');
		// seniorDragEvent();
	}
}
