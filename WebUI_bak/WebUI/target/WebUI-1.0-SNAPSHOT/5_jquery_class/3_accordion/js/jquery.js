/**
 * 
 */

$(function(){
	$('.accordion').each(function(){
		let allDt = $(this).find('dt')
		let allDd = $(this).find('dd')
		
		//allDd를 안보이게 하기
		allDd.hide();
		
		allDt.css('cursor','pointer')
		
		//allDt를 눌렀을때 발생하는 이벤트
		allDt.click(function(){
			//allDd를 가리기
			allDd.hide();
			//$(this)자기 자신의 다음 Dd를 보이기 / 감추기 
			$(this).next().show();
			//마우스 cursor를 기본으로 다시 되돌리기
			$(this).css('cursor','default');
		})
	})
})