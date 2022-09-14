var $menuEle = $('.cs_tab1>li'); // 탭메뉴를 변수에 지정
$menuEle.click(function() { // 탭메뉴 클릭 이벤트
    $('.notice_contents').addClass('hidden');
    $(this).next().removeClass('hidden');
})

///////////////////////////////////////////////////////// 자주묻는 질문 Q&A END


///////// cs center 컨텐츠 내용 보이기

jQuery(document).ready(function(){
    console.log('test')
    $('.notice_Slide1').click(function(){
        $('.notice_contents_detail').slideToggle(700);
    })

    $('.notice_Slide2').click(function(){
        $('.qna_contents_detail').slideToggle(500);
    })

    $('.notice_Slide3').click(function(){
        $('.qna_contents_detail2').slideToggle(500);
    })

    $('.notice_Slide4').click(function(){
        $('.qna_contents_detail3').slideToggle(500);
    })

    $('.notice_Slide5').click(function(){
        $('.qna_contents_detail4').slideToggle(500);
    })

    $('.notice_Slide6').click(function(){
        $('.qna_contents_detail5').slideToggle(500);
    })

    $('.notice_Slide7').click(function(){
        $('.qna_contents_detail6').slideToggle(500);
    })
})

////공지사항 클릭 시 하나씩만 보이기(jquery)

$('.accordion').click(function(e){
    e.preventDefault();
    $(this).next(".notice_panel").css('display', 'block');
    $('.accordion').not($(this)).next(".notice_panel").css('display', 'none');
})

/////////////////////// contents 버튼 작동시 bold 추가

    $('.notice_Slide2').focus(function(){
        $('.qna_txt_right>.notice_Slide2').css('font-weight', 'bold')
    })

    $('.notice_Slide3').focus(function(){
        $('.qna_txt_right>.notice_Slide3').css('font-weight', 'bold')
    })

    $('.notice_Slide4').focus(function(){
        $('.qna_txt_right>.notice_Slide4').css('font-weight', 'bold')
    })

    $('.notice_Slide5').focus(function(){
        $('.qna_txt_right>.notice_Slide5').css('font-weight', 'bold')
    })

    $('.notice_Slide6').focus(function(){
        $('.qna_txt_right>.notice_Slide6').css('font-weight', 'bold')
    })

    $('.notice_Slide7').focus(function(){
        $('.qna_txt_right>.notice_Slide7').css('font-weight', 'bold')
    })
   
    $('.ask_name>input').focusin(function(){
        $('.ask_name>span').css({    
            fontSize : '0.8em',
            height : '25px',
            lineHeight : '25px',
            top : '10px',
            transition : 'all 0.4s'
        })
    })

    $('.ask_name>input').focusout(function(){
        $('.ask_name>span').css({
            /* 수정 */    
            fontSize : '0.7em',
            height : '40px',
            lineHeight : '10px',
            top : '20px',
        })
    })

    $('.ask_phone>input').focusout(function(){
        $('.ask_phone>span').css({
            /* 수정 */    
            fontSize : '0.7em',
            height : '40px',
            lineHeight : '10px',
            top : '20px',
        })
    })

    $('.ask_email>input').focusout(function(){
        $('.ask_email>span').css({
            /* 수정 */    
            fontSize : '0.7em',
            height : '40px',
            lineHeight : '10px',
            top : '20px',
        })
    })

    $('.ask_title>input').focusout(function(){
        $('.ask_title>span').css({
            /* 수정 */    
            fontSize : '0.7em',
            height : '40px',
            lineHeight : '10px',
            top : '20px',
        })
    })

    $('.ask_content>textarea').focusout(function(){
        $('.ask_content>span').css({
            /* 수정 */    
            fontSize : '0.7em',
            height : '40px',
            lineHeight : '10px',
            top : '20px',
        })
    })

    $('.ask_select>select').focus(function(){
        $('.notice_txt_wrap').css('border-bottom','1px solid #222')
    })

    $('.ask_select>select').focusout(function(){
        $('.notice_txt_wrap').css('border-bottom','1px solid #aaa')
    })

    $('.ask_name>input').focus(function(){
        $('.ask_name_wrap').css(
            'border-bottom','1px solid #222'
        )
    })

    $('.ask_name>input').focusout(function(){
        $('.ask_name_wrap').css(
            'border-bottom','1px solid #aaa'
        )
    })

    $('.ask_phone>input').focus(function(){
        $('.ask_phone_wrap').css(
            'border-bottom','1px solid #222'
        )
    })

    $('.ask_phone>input').focusout(function(){
        $('.ask_phone_wrap').css(
            'border-bottom','1px solid #aaa'
        )
    })

    $('.ask_email>input').focus(function(){
        $('.ask_email_wrap').css(
            'border-bottom','1px solid #222'
        )
    })

    $('.ask_email>input').focusout(function(){
        $('.ask_email_wrap').css(
            'border-bottom','1px solid #aaa'
        )
    })

    $('.ask_title>input').focus(function(){
        $('.ask_title_wrap').css(
            'border-bottom','1px solid #222'
        )
    })

    $('.ask_title>input').focusout(function(){
        $('.ask_title_wrap').css(
            'border-bottom','1px solid #aaa'
        )
    })

    $('.ask_content>textarea').focus(function(){
        $('.ask_content_wrap').css(
            'border-bottom','1px solid #222'
        )
    })

    $('.ask_content>textarea').focusout(function(){
        $('.ask_content_wrap').css(
            'border-bottom','1px solid #aaa'
        )
    })



/////////////////////////////////////////////////////////////문의하기 END

/*
0615- HEYNATURE common.js로 옮김
    돋보기 클릭 시 - 돋보기 사라짐 + 검색창 보이기
    X 클릭 시 - 돋보기 보이기 + 검색창 사라짐
*/


/* 이중탭 */
$(".cs_tab1 li").click(function(){
    var num = $(".cs_tab1 li").index(this);//첫번째 탭 중 클릭한 li의 index(0-3)번호를 num에 저장
    $(".cs_tabContent").removeClass("cs_active");//cs_tabContent에 있던 cs_active클래스를 일단 모두 지움
    //eq() : 선택한 요소의 인덱스 번호에 해당하는 요소를 찾습니다.
    //클래스명이 cs_tabContent인 모든 요소들 중 num(클릭한 tab1 li의 index값)번째 요소만 반환
    $(".cs_tabContent").eq(num).addClass('cs_active');//num번째 cs_tabContent요소에만 cs_active를 줘서 나타나게 함 
    
    /* 첫번째 탭 설정 */
    $(".cs_tab1 li").removeClass('cs_active');//첫번째 탭의 li에 있던 cs_active클래스를 지워서 
    $(this).addClass('cs_active'); // 첫번째 탭 중 클릭한 tab1 li 에게 cs_active클래스를 줌
   
    /* tab1에서 클릭한 li가 유형별 탭일 경우를 위해 cs_tab2 설정 */
    $(".cs_tab2 li").removeClass('cs_active');//두번째 탭의 li에 있던 cs_active클래스를 지움
    //cs_active된 cs_tabContent의 / 후손인 cs_tab2의 첫번째 li(유형별>all탭)에 cs_active 클래스를 추가함
    $(".cs_tabContent").has(".cs_active").find(".cs_tab2 li:first").addClass("cs_active");
   
    /* cs_tabContent2(유형별 탭 밑에 나타날 컨텐트들) 설정 */
    $(".cs_tabContent2").removeClass("cs_active");
    $(".cs_tabContent").has(".cs_active").find(".cs_tabContent2:first").addClass("cs_active");
})  

// 탭 버튼 클릭 시 이벤트 초기화
$(".cs_tab1 li").change(function(){
    $('.notice_contents_detail').hide
    $('.qna_contents_detail').hide

})


$(".cs_tab2 li").click(function(){
    var num = $(".cs_tab2 li").index(this);//첫번째 탭 중 클릭한 li의 index(0-9)번호를 num에 저장

    /* cs_tabContent2(유형별 탭 밑에 나타날 컨텐트들) 설정 */
    $(".cs_tabContent2").removeClass("cs_active");
    $(".cs_tabContent2").eq(num).addClass('cs_active');//eq() : 선택한 요소의 인덱스 번호에 해당하는 요소를 찾습니다.
    
    /* cs_tab2 설정 */
    $(".cs_tab2 li").removeClass('cs_active'); //두번째탭의 li 중 기존에 cs_active되어있던 li의 cs_active클래스를 지움
    $(this).addClass('cs_active');//두번째 탭 중 내가 지금 클릭한 li에 cs_active클래스를 주어
})




/**************************************************************** */
var figCount = 0;//더보기 클릭 수 count
var countPage=1;

/* notice(탭 하나 - 더보기버튼 O) : 첫 페이지 세팅  */
$(".cs_tab1 li").click(function(){ //tab1 li (new/best탭) 클릭하면(클릭한 li에 cs_active 클래스 추가됨)
    var cl_name=$(".cs_tabContent.cs_active"); //클릭으로 cs_active가 추가된 li의 컨텐츠에 해당하는 cs_tabContent를 cl_name에 저장
    var fig = cl_name.find("div .notice_txt_wrap"); //cl_name 안의 figure들을 모두 찾아서 fig에 넣어줌
    //alert("총 상품 갯수 : "+fig.length);

    var figNum2 = 7; //한 페이지 당 보일 상품의 수
    var btnOn = $(".cs_more_btn"); //더보기 버튼
    //alert("cs_tab2 li 클릭 / 총 상품갯수 : "+fig.length);

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



/* notice 탭 더보기버튼 */
$(".cs_more_tab1").click(function(){ //더보기버튼 클릭//오류!!!!!3페이지 이상일 때 더보기버튼누르면 나머지 상품이 다 나와버리는 오류 수정해야함
    //alert("moretab1");
    var test = 7;
    figCount++;
    figNum2 = test*figCount;
    countPage++;
    //alert(countPage+"번째 페이지로 갑니다");

    var cl_name=$(".cs_tabContent.cs_active"); //클릭으로 cs_active가 추가된 li의 컨텐츠에 해당하는 cs_tabContent를 cl_name에 저장
    var fig = cl_name.find("div.notice_txt_wrap"); //cl_name 안의 figure들을 모두 찾아서 fig에 넣어줌
    var btnOn = $(".cs_more_btn");
    figNum2=figNum2+7;
    $(".currentPage").text("1"); // 현재페이지 숫자로 text 변경
                   
    if(fig.length <= figNum2){
        //alert("figNum-12부터 나머지만 보여주고 버튼 숨겨: "+ (figNum2-12)+fig.length);
        fig.slice(figNum2-7,figNum2).show();
        btnOn.hide();
        //figCount = 0;          
    }else{
        //alert("figNum-12,figNum 까지만 보여줘: "+ (figNum2-12)+figNum2);
        $(".currentPage").text(countPage); // 현재페이지 숫자로 text 변경
        fig.slice(figNum2-7,figNum2).show();
        btnOn.show();              
    }
});
       


/*************************************** */

/* FAQ - 탭 클릭 후 처음 뜨는 페이지 세팅 */
$(".cs_tab1 li").click(function(){
    var num = $(".cs_tab1 li").index(this);
    //alert("페이지 index:"+num);

    /*tab1:유형별(탭 두개인 페이지)이고, $(".cs_tab2 li").hasClass("cs_active")일 때 실행할것.*/
    if( (num==2) && $(".cs_tabContent").eq(num).hasClass("cs_active")){
        var figNum = 7;
        var cl_name=$(".cs_tabContent2.cs_active"); //클릭으로 cs_active가 추가된 li의 컨텐츠에 해당하는 cs_tabContent2를 cl_name에 저장
        var fig = cl_name.find("div.qna_txt_wrap"); //cl_name 안의 figure들을 모두 찾아서 fig에 넣어줌
        //alert("qna수 : "+fig.length);
        var btnOn = $(".cs_more_btn");
        

        /* 전체 페이지 */
        var totalNum = Math.ceil(fig.length/figNum);
        $(".totalPage").text(totalNum);
        //alert("전체 페이지 : "+ totalNum);

        /* 상품 보이기 */
        fig.hide();
        fig.slice(0, figNum).show(); //fig[0]-fig[12](fig[12]미포함) 첫 페이지에 보이게하기
   
        if(fig.length <= 7){
            //alert("상품갯수7개이하");
            btnOn.hide();
        }else{
            //alert("상품갯수7개초과");
            btnOn.show();
        }
    };
});


/* FAQ 페이지( 탭 두개 - 더보기버튼 o ) 첫페이지 설정 */
$(".cs_tab2 li").click(function(){ //cs_tab2 li 클릭하면(클릭한 li에 cs_active 클래스 추가됨)
    var figNum2 = 7;
    var cl_name=$(".cs_tabContent2.cs_active"); //클릭으로 cs_active가 추가된 li의 컨텐츠에 해당하는 cs_tabContent2를 cl_name에 저장
    var fig = cl_name.find("div.qna_txt_wrap"); //cl_name 안의 figure들을 모두 찾아서 fig에 넣어줌
    var btnOn = $(".cs_more_btn"); //더보기 버튼
    //alert("cs_tab2 li 클릭 / 총 상품갯수 : "+fig.length);

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
$(".cs_more").click(function(){ //더보기버튼 클릭
    var test = 7;
    figCount++;//더보기 클릭 수 count + 1
    figNum2 = test*figCount; // 12 * ( 더보기클릭수+1(현재페이지) )
    countPage++; // 현재 페이지
    //alert(countPage+"번째 페이지로 갑니다");
    
    var cl_name=$(".cs_tabContent2.cs_active"); //클릭으로 cs_active가 추가된 li의 컨텐츠에 해당하는 tabContent를 cl_name에 저장
    var fig = cl_name.find("div.qna_txt_wrap"); //cl_name 안의 figure들을 모두 찾아서 fig에 넣어줌
    var btnOn = $(".cs_more_btn");
    figNum2=figNum2+7; //페이지에 보일 전체 상품 수
       
    $(".currentPage").text(countPage); // 현재페이지 숫자로 text 변경
           
    if(fig.length <= figNum2){
        //alert("figNum-7부터 나머지만 보여주고 버튼 숨겨: "+ (figNum2-12)+fig.length);
        fig.slice(figNum2-7,figNum2).show();
        btnOn.hide();
        figCount = 0;            
    }else{
        //alert("figNum-12,figNum 까지만 보여줘: "+ (figNum2-12)+figNum2);
        //alert("figNum : "+figNum2);
        //alert("fig.length : " + fig.length);
        $(".currentPage").text(countPage); // 현재페이지 숫자로 text 변경
        fig.slice(figNum2-7,figNum2).show();
        btnOn.show();              
    }
});



/*********** insert file ************* */
window.onload = function(){
    target = document.getElementById('myFile');
    target.addEventListener('change', function(){
        fileList = "";
        for(i = 0; i < target.files.length; i++){
            fileList += target.files[i].name + '<br>';
        }
        target2 = document.getElementById('cs_showFiles');
        target2.innerHTML = fileList;
    });
}

function checkPw(){
    var pw = document.getElementById('pw').value;
   if(pw !== "123456"){
       alert('관리자가 아닙니다')
       return false
   } else{
       return true
   }}
