/*
0615- HEYNATURE common.js로 옮김
    돋보기 클릭 시 - 돋보기 사라짐 + 검색창 보이기
    X 클릭 시 - 돋보기 보이기 + 검색창 사라짐
*/


/* 이중탭 */
$(".pro_tab1 li").click(function(){
    var num = $(".pro_tab1 li").index(this);//첫번째 탭 중 클릭한 li의 index(0-3)번호를 num에 저장
    $(".tabContent").removeClass("pro_active");//tabContent에 있던 pro_active클래스를 일단 모두 지움
    //eq() : 선택한 요소의 인덱스 번호에 해당하는 요소를 찾습니다.
    //클래스명이 tabContent인 모든 요소들 중 num(클릭한 pro_tab1 li의 index값)번째 요소만 반환
    $(".tabContent").eq(num).addClass('pro_active');//num번째 tabContent요소에만 pro_active를 줘서 나타나게 함 
    
    /* 첫번째 탭 설정 */
    $(".pro_tab1 li").removeClass('pro_active');//첫번째 탭의 li에 있던 pro_active클래스를 지워서 
    $(this).addClass('pro_active'); // 첫번째 탭 중 클릭한 pro_tab1 li 에게 pro_active클래스를 줌
   
    /* pro_tab1에서 클릭한 li가 유형별 탭일 경우를 위해 pro_tab2 설정 */
    $(".pro_tab2 li").removeClass('pro_active');//두번째 탭의 li에 있던 pro_active클래스를 지움
    //pro_active된 tabContent의 / 후손인 pro_tab2의 첫번째 li(유형별>all탭)에 pro_active 클래스를 추가함
    $(".tabContent").has(".pro_active").find(".pro_tab2 li:first").addClass("pro_active");
   
    /* tabContent2(유형별 탭 밑에 나타날 컨텐트들) 설정 */
    $(".tabContent2").removeClass("pro_active");
    $(".tabContent").has(".pro_active").find(".tabContent2:first").addClass("pro_active");
})  

$(".pro_tab2 li").click(function(){
    var num = $(".pro_tab2 li").index(this);//첫번째 탭 중 클릭한 li의 index(0-9)번호를 num에 저장

    /* tabContent2(유형별 탭 밑에 나타날 컨텐트들) 설정 */
    $(".tabContent2").removeClass("pro_active");
    $(".tabContent2").eq(num).addClass('pro_active');//eq() : 선택한 요소의 인덱스 번호에 해당하는 요소를 찾습니다.
    
    /* pro_tab2 설정 */
    $(".pro_tab2 li").removeClass('pro_active'); //두번째탭의 li 중 기존에 pro_active되어있던 li의 pro_active클래스를 지움
    $(this).addClass('pro_active');//두번째 탭 중 내가 지금 클릭한 li에 pro_active클래스를 주어
})

/**************************************************************** */
var figCount = 0;//더보기 클릭 수 count
var countPage=1;

/* new/best (탭 하나 - 더보기버튼 X) + 어성초 페이지(탭 하나 - 더보기버튼 O) : 첫 페이지 세팅  */
$(".pro_tab1 li").click(function(){ //pro_tab1 li (new/best탭) 클릭하면(클릭한 li에 pro_active 클래스 추가됨)
    var cl_name=$(".tabContent.pro_active"); //클릭으로 pro_active가 추가된 li의 컨텐츠에 해당하는 tabContent를 cl_name에 저장
    var fig = cl_name.find("figure"); //cl_name 안의 figure들을 모두 찾아서 fig에 넣어줌
    //alert("총 상품 갯수 : "+fig.length);

    var figNum2 = 12; //한 페이지 당 보일 상품의 수
    var btnOn = $(".more_btn"); //더보기 버튼
    //alert("pro_tab2 li 클릭 / 총 상품갯수 : "+fig.length);

    /* 전체 페이지 계산 */
    var totalNum = Math.ceil(fig.length/figNum2); //전체페이지(totalNum) 계산
    $(".totalPage").text(totalNum); //이 탭의 전체 페이지  
    //alert("전체 페이지(totalNum) : "+totalNum);

    /* 상품 보이기 */
    fig.hide(); //일단 전체상품 숨김
    fig.slice(0, figNum2).show(); //fig[0]-fig[12](fig[12]미포함) 첫 페이지에 보이게하기
    $(".currentPage").text("1");

    if(fig.length <= figNum2){
        btnOn.hide();
    }
    else{
        btnOn.show();
    }

    figCount = 0;//탭 클릭으로 페이지 이동 시 figCount(더보기 클릭수) 초기화
    countPage = 1; //현재페이지 카운트 초기화
});

/*************************************** */

//var figNum2 = 12;

/* 유형별 - 탭 클릭 후 처음 뜨는 페이지 세팅 */
$(".pro_tab1 li").click(function(){
    var num = $(".pro_tab1 li").index(this);
    //alert("페이지 index:"+num);

    /*pro_tab1:유형별(탭 두개인 페이지)이고, $(".pro_tab2 li").hasClass("pro_active")일 때 실행할것.*/
    if( (num==2) && $(".tabContent").eq(num).hasClass("pro_active")){
        var figNum = 12;
        var cl_name=$(".tabContent2.pro_active"); //클릭으로 pro_active가 추가된 li의 컨텐츠에 해당하는 tabContent2를 cl_name에 저장
        var fig = cl_name.find("figure"); //cl_name 안의 figure들을 모두 찾아서 fig에 넣어줌
        var btnOn = $(".more_btn");

        /* 전체 페이지 */
        var totalNum = Math.ceil(fig.length/figNum);
        $(".totalPage").text(totalNum);
        //alert("전체 페이지 : "+ totalNum);

        /* 상품 보이기 */
        fig.hide();
        fig.slice(0, figNum).show(); //fig[0]-fig[12](fig[12]미포함) 첫 페이지에 보이게하기
   
        if(fig.length <= 12){
            //alert("상품갯수12개이하");
            btnOn.hide();
        }else{
            btnOn.show();
        }
    };
});


/* 유형별 페이지( 탭 두개 - 더보기버튼 o ) 첫 페이지 세팅  */
$(".pro_tab2 li").click(function(){ //pro_tab2 li 클릭하면(클릭한 li에 pro_active 클래스 추가됨)
    var figNum2 = 12;
    var cl_name=$(".tabContent2.pro_active"); //클릭으로 pro_active가 추가된 li의 컨텐츠에 해당하는 tabContent2를 cl_name에 저장
    var fig = cl_name.find("figure"); //cl_name 안의 figure들을 모두 찾아서 fig에 넣어줌
    var btnOn = $(".more_btn"); //더보기 버튼
    //alert("pro_tab2 li 클릭 / 총 상품갯수 : "+fig.length);

    /* 전체 페이지 계산 */
    var totalNum = Math.ceil(fig.length/figNum2); //전체페이지 계산
    $(".totalPage").text(totalNum);
    //alert("전체 페이지 : "+totalNum);

    /* 상품 보이기 */
    fig.hide();
    fig.slice(0, figNum2).show(); //fig[0]-fig[12](fig[12]미포함) 첫 페이지에 보이게하기
    $(".currentPage").text("1"); //현재 페이지 1로 세팅

    if(fig.length <= figNum2){
        btnOn.hide();
    }
    else{
        btnOn.show();
    }

    figCount = 0;//탭 클릭으로 페이지 이동 시 figCount(더보기 클릭수) 초기화
    countPage = 1; //현재페이지 카운트 초기화
});

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

/* 어성초 탭 더보기버튼 */
$(".more_tab1").click(function(){ //더보기버튼 클릭//오류!!!!!3페이지 이상일 때 더보기버튼누르면 나머지 상품이 다 나와버리는 오류 수정해야함
    var test = 12;
    figCount++;
    figNum2 = test*figCount;
    countPage++;
    //alert(countPage+"번째 페이지로 갑니다");

    var cl_name=$(".tabContent.pro_active"); //클릭으로 pro_active가 추가된 li의 컨텐츠에 해당하는 tabContent를 cl_name에 저장
    var fig = cl_name.find("figure"); //cl_name 안의 figure들을 모두 찾아서 fig에 넣어줌
    var btnOn = $(".more_btn");
    figNum2=figNum2+12;
    $(".currentPage").text("1"); // 현재페이지 숫자로 text 변경
                   
    if(fig.length <= figNum2){
        //alert("figNum-12부터 나머지만 보여주고 버튼 숨겨: "+ (figNum2-12)+fig.length);
        fig.slice(figNum2-12,figNum2).show();
        btnOn.hide();
        //figCount = 0;          
    }else{
        //alert("figNum-12,figNum 까지만 보여줘: "+ (figNum2-12)+figNum2);
        $(".currentPage").text(countPage); // 현재페이지 숫자로 text 변경
        fig.slice(figNum2-12,figNum2).show();
        btnOn.show();              
    }
});
       
/* .overlay : nav버튼 클릭 시 이미지 어둡게. */
// $(function(){
//     $("#nav_menu").click(function(){
//         $(".overlay").show();
//         $("#main").css('opacity','0.2');
//         //$("#main").css('background-color', ''); //background color 속성 삭제 안됨 ㅠ
//     });
// });
// $(function(){
//     $(".closebtn").click(function(){
//         $(".overlay").hide();
//         $("#main").css('opacity','1');
//         //$("#main").css('backgroundColor','#FFFEFC');
//     });
// });


