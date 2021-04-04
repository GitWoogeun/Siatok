/**
 *  자바스크립트에서
 *     ex) document.getElementById()
 *     
 *     //페이지 바꿀때
 *     window.href.location
 */

$(document).ready(function(){
	
	$('p#intro').animate({
		'padding':'20px',
		'fontSize':'30px'
		},2000);
	
	$('#navigation li').hover(function(){
		$(this).animate({'padding-left':'+=15px'},500)
	},function(){
		$(this).animate({'padding-left':'0px'},500)
	});
	
	
	// 퀵메뉴
	$(window).scroll(function(){
		$('#navigation').css('top', $(document).scrollTop())
	})
})