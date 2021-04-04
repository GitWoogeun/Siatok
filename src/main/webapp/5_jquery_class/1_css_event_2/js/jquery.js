/**
 * 
 */

$(function(){
	let img = $('a.rollover > img');
	
	//hover: 첫번째 function(마우스가 들어갔을때)
	//hover: 두번째 function(마우스가 나갔을때)
	img.hover(function(){     
		let src = $(this).attr('src').replace('_off','_on');
		$(this).attr('src', src);
		$(this).css({'border':'3px solid red'})
	},function(){	
		let src = $(this).attr('src').replace('_on','_off');
		$(this).attr('src',src)
		$(this).css({'border':'none'})
	})
})