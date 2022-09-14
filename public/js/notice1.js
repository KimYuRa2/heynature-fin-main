/* 이중탭 */
$(".tab1 li").click(function(){
    var num = $(".tab1 li").index(this); //첫번째 탭 중 클릭한 li의 index(0-3)번호를 num에 저장
    $(".tabContent").removeClass("pro_active");//tabContent에 있던 pro_active클래스를 일단 모두 지움
    //eq() : 선택한 요소의 인덱스 번호에 해당하는 요소를 찾습니다.
    //클래스명이 tabContent인 모든 요소들 중 num(클릭한 tab1 li의 index값)번째 요소만 반환
    $(".tabContent").eq(num).addClass('pro_active'); //num번째 tabContent요소에만 pro_active를 줘서 나타나게 함 
    
    /* tab1 설정 */
    $(".tab1 li").removeClass('pro_active');//첫번째 탭의 li에 있던 pro_active클래스를 지워서 
    $(this).addClass('pro_active'); // 첫번째 탭 중 클릭한 li 에게만 active클래스를 줌
   
    /* tab2 설정 */
    $(".tab2 li").removeClass('pro_active'); //두번째 탭의 li에 있던 pro_active클래스를 지움
    //pro_active된 tabContent의 / 후손인 tab2의 첫번째 li(유형별>all탭)에 pro_active 클래스를 추가함
    $(".tabContent").has(".pro_active").find(".tab2 li:first").addClass("pro_active");
   
    /* tabContent2(유형별 탭 밑에 나타날 컨텐트들) 설정 */
    $(".tabContent2").removeClass("pro_active");
    $(".tabContent").has(".pro_active").find(".tabContent2:first").addClass("pro_active");
})  

$(".tab2 li").click(function(){
    var num = $(".tab2 li").index(this);//첫번째 탭 중 클릭한 li의 index(0-9)번호를 num에 저장

    /* tabContent2(유형별 탭 밑에 나타날 컨텐트들) 설정 */
    $(".tabContent2").removeClass("pro_active");
    $(".tabContent2").eq(num).addClass('pro_active');//eq() : 선택한 요소의 인덱스 번호에 해당하는 요소를 찾습니다.
    
    /* tab2 설정 */
    $(".tab2 li").removeClass('pro_active'); //두번째탭의 li 중 기존에 pro_active되어있던 li의 pro_active클래스를 지움
    $(this).addClass('pro_active');//두번째 탭 중 내가 지금 클릭한 li에 pro_active클래스를 주어 
})


/* 유형별 탭 더보기 버튼 */
$(".more").click(function(){ //더보기버튼 클릭
    var test = 12;
    figCount++;//더보기 클릭 수 count + 1
    figNum2 = test*figCount; // 12 * ( 더보기클릭수+1(현재페이지) )
    countPage++; // 현재 페이지
    //alert(countPage+"번째 페이지로 갑니다");
    
    var cl_name=$(".tabContent2.pro_active"); //클릭으로 pro_active가 추가된 li의 컨텐츠에 해당하는 tabContent를 cl_name에 저장
    var fig = cl_name.find("figure"); //cl_name 안의 figure들을 모두 찾아서 fig에 넣어줌
    var btnOn = $(".more_btn");
    figNum2=figNum2+12; //페이지에 보일 전체 상품 수
       
    $(".currentPage").text(countPage); // 현재페이지 숫자로 text 변경
           
    if(fig.length <= figNum2){
        //alert("figNum-12부터 나머지만 보여주고 버튼 숨겨: "+ (figNum2-12)+fig.length);
        fig.slice(figNum2-12,figNum2).show();
        btnOn.hide();
        figCount = 0;            
    }else{
        //alert("figNum-12,figNum 까지만 보여줘: "+ (figNum2-12)+figNum2);
        //alert("figNum : "+figNum2);
        //alert("fig.length : " + fig.length);
        $(".currentPage").text(countPage); // 현재페이지 숫자로 text 변경
        fig.slice(figNum2-12,figNum2).show();
        btnOn.show();              
    }
});