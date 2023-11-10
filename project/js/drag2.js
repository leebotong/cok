$(function () {
	dragEvent();
});

function dragEvent(){
	var $dim   = $('.dim');
	var startY = ''; // 터치 시작 지점
	var moveY  = ''; // 터치 이동 지점
	var endY   = ''; // 터치 이동 끝 지점

	const $dragCont  = $('.dragPop');											// 바텀시트 콘텐츠 창
	const $dragArea  = $('.dragPop .popHeader');					// 드래그 영역 지정

	$('.dragPop').css('display', 'block');
	$('.dragPop .popClose').attr('aria-hidden', 'true');
	$('.dragPop .popLayout').css({'height': '63px'});  // 드래그 팝업 초기 높이값
	
	$dragArea.on('touchstart',function(e){
		startY = e.originalEvent.changedTouches[0].clientY;
		// console.log('startY:' + startY);
	});
	
	$dragArea.on('touchmove',function(e){
		moveY = e.originalEvent.changedTouches[0].clientY;
		// console.log('moveY:' + moveY);
		$('.dragPop').removeClass('clickCheck');
	});
	
	$dragArea.on('touchend',function(e){
		endY = e.originalEvent.changedTouches[0].clientY;
		const $boxheight = $('.dragPop .popLayout').height(); // 팝업 높이 지정(데이터가 있을 경우)
		const $contentH  = $('.popInner').height();
		console.log('dd: ' + $contentH);
		$('.dragPop').css('height',$contentH);

		if ( startY - endY > 50 ){
			// 시작 지점과 종료 지점의 차이가 50 이상일때 창 확대
			$('.dragPop').css({'z-index':'1001'});
			$('.dragPop .popCont, .dragPop .popBtnWrap').css('display', 'block');
			$('.dragPop .popCont, .dragPop .popBtnWrap').attr('aria-hidden', false);
			$('.dragPop .popLayout').css('height','');
			$dim.show().css('z-index', 1000);
		} else if ( startY - endY < 50 ) {
			
			// 창 축소시 사이즈
			$('.dragPop').css({'z-index':''});
			$('.dragPop .popLayout').css({'bottom': '', 'height': ''});
			$('.dragPop .popCont, .dragPop .popBtnWrap').css('display', 'none');
			$('.dragPop .popCont, .dragPop .popBtnWrap').attr('aria-hidden', true);
			$('.dragPop .popLayout').css('height','');
			$dim.fadeOut().css({'z-index': 1000});
		}
	});

	// 접근성 대응: 드래그 영역 열기
	$('.dragPop .dragLine').click(function(){
		$('.dragPop').addClass('clickCheck');
		$('.dragPop').css({'z-index':'1001'});
		$('.dragPop .popLayout').css({'height': ''});
		$('.clickCheck .popCont, .clickCheck .popBtnWrap').css({'height':'', 'display':'block'});
		$('.clickCheck .popCont, .clickCheck .popBtnWrap').attr('aria-hidden', false);
		$('.dragPop .popClose').attr('aria-hidden', false);
		$dim.show().css('z-index', 1000);
	});
	
	// 접근성 대응: 드래그 영역 닫기
	$('.dragPop .popClose').click(function(){
		$dragCont.css('height','63px');
		$('.dragPop').removeClass('clickCheck');
		$('.dragPop').css({'display':'block','z-index':''});
		$('.dragPop .popClose').attr('aria-hidden', true);
		$('.dragPop .popCont, .dragPop .popBtnWrap').css('display', 'none');
		$('.dragPop .popCont, .dragPop .popBtnWrap').attr('aria-hidden', true);
		$dim.fadeOut().css('z-index', 1000);
		$('.dragLine').focus();
	});
}