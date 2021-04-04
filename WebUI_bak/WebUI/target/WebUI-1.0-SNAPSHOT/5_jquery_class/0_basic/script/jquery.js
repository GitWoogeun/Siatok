
$(function(){
//	// 1)첫번째 요소를 찾기
//	$('li:first').css({'border':'2px solid green'});
	
	// 2) 짝수 요소 찾기
//	$('li:nth-child(even)').css({'background':'skyblue','color':'yellow'})
//	// 3) 네번째 요소 찾기
//	$('li:eq(4)').css({'background':'pink'})
//	// 4) 세번째 보다 작은 요소 찾기
//	$('li:lt(3)').css({'color':'red'})
//	// 5) 첫 번째를 제외한 요소 찾기
//	$('li:not(li:first)').css({'font-size':'30px'})
//	// 6) '튀김'을 포함한 요소찾기
//	$('li:contains("튀김")').css({'font-size':'20px'})
	
	//------------------------	------------------------
	//    어묵 아래 자식 요소를 제외한 요소
	//    마우스가 올라가면 bg 클래스 적용하고
	//	   마우스가 내려가면 bg 클래스 적용해지
	
	let li = $('li')
	li.hover(function(){
		if(!("li>ul>li" == li))
			$(this).addClass('bg')
	},function(){
		$(this).removeClass('bg')
	})
	
	// 각각의 그룹에서 첫번째 li 요소를 찾아 클래스를 적용
	//$('body>ul>li:nth-child(1)').addClass('border');
	$('body>ul').find('li:first').addClass('borderRed');
//	$('body>ul').filter('li:first').addClass('borderRed');
})
	