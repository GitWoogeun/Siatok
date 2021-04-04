//문서시작
$(function () {

  let tabmenu = $("#tabmenu"); //tabmenu의 전체 메뉴
  let tabbtns = $('#tabmenu>dt');  // 공지사항 , 질문과 답변 , 저자문의
  let panel = $('#tabmenu>dd>ul>li')  //tabmenu의 내용들

  //문제 1번 해결
  // 내가한 방법
  let today = new Date()
  $('#date_wrap').css({'fontSize': '23px'})
  $('#date_wrap').text(today.getFullYear() + "년" + (today.getMonth() + 1) + "월" + today.getDate()
      + "일")

  // 태영님 방법
  // $('.year').text(today.getFullYear())
  // $('.month').text(today.getMonth() + 1)
  // $('.date').text(today.getDate())

  //문제 2번

  //문제 3번
  tabbtns.click(function () {
    let currtabbtn = $(this);
  })

  //문제 4번
  $('#best_bg2').bxSlider({
    maxSlides: 4,
    slideMargin: 183.5,
    slideWidth: 100,
    auto: true,
    pause: 1000,
    moveSlides: 1
  });
})