/**
 * 
 */
$(function(){
	//1개이상이면 제이슨 ({객체})
	$('#signup>form').validate({
		rules: {
			name:{ required:true},			   //이름이 존재 하냐 안하냐
			email:{ required:true,email:true}, //정확한 이메일 형식에 맞아야지만 보내기 가능
			website:{ required:true,url:true}, //http:// url형식에 맞으면 보내기 가능
			password:{ required:true,		   //비밀번호가 최소길이가 6자리 이상
					  minlength:6
					  },
			passconf:{equalTo:'#password'}     //비밀번호가 같은것인지 확인
		},
		success:function(label){
			label.addClass('valid');
			label.text('ok') //출력은 안되지만 없으면 화면에 안뜸
		}
	});
	
	//check-all박스를 클릭했을때 전체 선택 , 취소하면 전체 취소
	// 클릭시
    // 체크가 안되어 있다면 체크하고 나머지 박스 전부 체크
    // 체크가 되어 있다면 해당 체크 해제하고 위의 나머지 박스 전부 해제
    $(".check-all").click(function(){
        //$(".check-all").is(":checked") ? $(".agree").prop("checked", true) : $(".agree").prop("checked", false);
        $(".agree").prop('checked', $(this).prop('checked'));
    })

    // 클릭시
    // 각 조항 체크 길이를 확인해서 체크 수가 전체보다 크면 마지막 조항 체크, 아니면 해제
    $(".agree").click(function(){
        ($(".agree:checked").length >= $(".agree").length) ? $(".check-all").click() : $(".check-all").prop("checked", false);
    })
})