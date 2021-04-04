/**
 * 
 */
//$(function(){
//	// (1) '감추기' 버튼을 클릭하면 위 그림을 감추기(사라지게)
//	// (2) '보이기' 버튼을 다시 클릭하면 위 그림을 보이기(나타나게)
//	// (3) '선택' (hint:toggle)
//	// 한번 클릭하면 감추기 다시 클릭하면 보이게
//})

$(function(){
//	$("#hideButton").click(function(){
//		$("#img").fadeOut(2000)
//	})
//	$("#showButton").click(function(){
//		$("img").fadeIn(2000)
//	})
//	$("#toggleButton").click(function(){
//		//$("img").fadeOut(2000)
//		//$("img").fadeIn(2000)
//		//$("img").toggle();   //toggle = 있을때 누르면 없어지는거고 없을때 누르면 있게해준다.
//		//$("img").fadeToggle(2000);
//		$("img").slideToggle();
//	})
	
	
	//테이블의 제목 을 배경색과 폰트색 지정
//	$('#celebs > heading > .data:first >').css({'background':'cyan','color':'white'})
//	
//	//테이블의 홀수행의 배경색 지정 css({})배열형식
//	$('tr:odd').css({'background':'#AA34CC','color':'pink'})  //:odd= 홀수인 애들만 적용
//	
//	//테이블 내용중에서 짝수행의 배경색과 글자색을 지정
//	$('tr:nth-child(even)').css({'background':'skyblue','color':'yellow'})
	
	//테이블 내용중에서 짝수행의 배경색과 글자색을 지정
//	$('tbody tr:odd').addClass('table_striping');
	
	//테이블 마우스 오르고 내리면 색상이 변하게
//	let celebs = $('#celebs td')
//	celebs.mouseenter(function(){
//		$(this).css({'background':'red'})  //$(this) = 마우스 포인트가 지정한 태그
//	}).mouseleave(function(){
//		$(this).css({'background':'white'})
//	})
	
	$('#toggleButton').click(function(){
		let img = $('p#intro > img')  //p태그중에서 id가 intro인것들
		if(img.is(':visible')){  //is() = 현재 상태를 알려주는 함수
			img.fadeOut(1500);
		}else{
			img.fadeIn(1500);
		}
	})
})
//ctrl + F5 = 서버에 수정된값을 다시 가지고 올수있게 해준다. 브라우저에서 ctrol + F5눌러야한다.