$(function(){
	$('a:eq(0)').prettyPopin({
		width:550,
		callback, 
		callback:function(){     
			alert('팝업이 닫힙니다.');
		}
	});
})