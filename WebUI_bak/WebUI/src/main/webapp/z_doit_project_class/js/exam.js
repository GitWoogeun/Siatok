//문서시작
$(function () {
  /*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
  //문제 1번 해결
  // 내가한 방법
  let today = new Date()
  $('#date_wrap').css({'fontSize': '23px'})
  $('#date_wrap').text(today.getFullYear()+"년"+(today.getMonth()+1)
      +"월"+today.getDate()+"일")

  // 태영이형 방법
  // $('.year').text(today.getFullYear())
  // $('.month').text(today.getMonth() + 1)
  // $('.date').text(today.getDate())

  /*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
  //문제 2번 해결
  let keyword = $('#keyword')
  //focus() = input태그창을 클릭해서 focusing이 되었을때 발생하는 메소드
  keyword.focus(function(){
    //keyword의 css의 백그라운드 : 무
    keyword.css({"background":"none"});
  })
  //blur() = input태그창에서 벗어나 focusing이 취소 되었을때 발생하는 메소드
  keyword.blur(function(){
    //keyword의 css의 백그라운드:이미지사용
    //background-repeat로 배경 이미지의 반복 여부와 반복 방향
    //-no-repeat = 반복하지 않습니다.
    //이미지의 경로를 정확히 짚어줘야 이미지가 출력이된다.
    keyword.css({"background":"url(images/sch_guide.gif)no-repeat"});
  })

  /*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
  //문제 3번
  //현재 활성화되어 있는 탭 지정 - 현재 : 공지사항
  let curr_tab = $('#tabmenu>.tab_btn1>a>img');


  //탭 메뉴 내 이미지 클릭시 (더보기 제외)
  $("#tabmenu dt img").click(function (){
    //현재 속성을 찾아서 이름을 바꾸어주는 작업
    //현재 탭 비활성화 이미지

    curr_tab.attr('src',curr_tab.attr('src').replace('over','out'));
    //새로운 탭 활성화 이미지
    $(this).attr('src',$(this).attr('src').replace('out','over'));

    //현재 탭
    curr_tab = $(this);

    //패널 부분
    //전체 숨김
    $('#tabmenu dd').hide();
    //이미지 누른거를 보이게 하기
    $(this).parent().parent().next().show();
  });


  /*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
  //문제 4번문제 해결
  //만들다보니 아래 변수 선언이 되어있지 않으면 bxSlider가 작동하지 않습니다..
  let tabbtns = $('#tabmenu>dt');
  $('#best_bg2').bxSlider({
    maxSlides: 4,
    slideMargin: 183.5,
    slideWidth: 100,
    auto: true,
    pause: 1000,
    moveSlides: 1
  });

  /*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
  //문제 5번 (완벽하지 않음)
  //다른방식으로 만들어봤는데 제대로 구현이 안됩니다...
  let loginbtn = $(".login_wrap");
  let login_f = $("#login_f");
  let login_close_btn = $(".login_close_btn");

  loginbtn.click(function() {
    //숨겨진 이미지를 css 위치를 변경해서 원래자리로 찾아가지고옴
    login_f.css({"top":"30px","z-index":"15","padding":"40px 0 0 30px"});

    /*아래 조건으로 로그인이미지를 눌렀을때 로그인창을 보여주고 닫아주고 하고 싶었는데 작동되지않습니다.
      조건을 주어서 if(login_f.css({"display","none"}){
                    //login_f.css({"display":"block"});
          //위 코드로 다시 보여주고 싶었는데 작동이 되지않음...
    }*/
  })

  login_close_btn.click(function(){
    //display none으로 가리긴 했으나 , 종료된게 아니라서 로그인창을 다시 눌러도 보이지 않는것 같음
    login_f.css("display","none");
  })

  /*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
  //문제 6번 해결
  let total_menu = $("#total_menu");
  let total_btn = $("#total_btn");
  let total_close = $("#total_close");

  //total_btn(이미지)를 클릭했을때 발생하는 이벤트
  total_btn.click(function(){
    //total_menu의 css를 show()보여주기
    total_menu.css("background","url(images/total_bg.gif)").show();
  })

  total_close.click(function(){
    //total_menu css를 hide() 가려주기
    total_menu.css("background","url(image/total_bg.gif)").hide();
  })
})