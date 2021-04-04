//문서가 준비 되었을때
$(function(){
	let topDiv = $('.tabSet');
	let anchors = topDiv.find('ul.tabs>li>a');
	let panelDivs = topDiv.find('div.panel');
	
	anchors.show();
	panelDivs.hide();
	
	
	//속성을 찾을때는 filter를 사용 (속성 = class 등등)
	//lastAnchor = 마지막에 열려있는 변수 선언
	//filter(속성찾기)가 클래스 on을 찾는다.
	//사용자 입장에서 클릭을 한다는 의미는 .on을 이동하는것
	let lastAnchor = anchors.filter('.on');
	//filter에서 찾은 lastAnchor에 있는 attr(속성'href')
	let lastPanel = $(lastAnchor.attr('href')); // '#panel1-1'
	lastPanel.show();
	
	anchors.click(function(){
		//현재 클릭한 Anchor
		let currAnchor = $(this);
		//현재 클릭한 Anchor의  'href'를 currPanel로 저장
		let currPanel = $(currAnchor.attr('href'));
		
		//현재의 Anchor에 on클래스를 추가
		currAnchor.addClass('on');
		
		//이전에 선택된 Anchor는 on클래스를 제거
		lastAnchor.removeClass('on');
		
		//이전 Panel을 감쳐주고
		lastPanel.hide();
		//현재 Panel을 보여준다.
		currPanel.show();
		
		//현재 currAnchor 를 lastAnchor로 바꿈
		lastAnchor = currAnchor;
		//현재 currPanel을 lastPanel로 바꿈
		lastPanel = currPanel;
	})
})