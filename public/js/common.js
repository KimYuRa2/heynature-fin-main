/* header - searchbar(0615수정) */

function bannerX(){
    document.getElementById("banner").style.display = "none" ;
}
function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
  document.getElementById("main").style.marginRight = "320px";
  document.getElementById("mySidedark").style.display = "block";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
  document.getElementById("mySidedark").style.display = "none";
  document.body.style.backgroundColor = "white";
}




$(".top").click(
  function(){
  $('body,html').animate({scrollTop:0},400); // 숫자는 움직이는 시간 클릭한 곳에서 Top 까지의 이동시간이라 보면 되겠다.
  return false;
});
 $(".top").click(
  function(){
    $(".pagination .mactive").removeClass("mactive"); 
});
$(".top").click(
  function(){
    $(".pagination").find(".m_top").addClass("mactive");
});

/*
    header - searchbar(0615)
    돋보기 클릭 시 - 돋보기 사라짐 + 검색창 보이기
    X 클릭 시 - 돋보기 보이기 + 검색창 사라짐
*/
function getShowSearchbar(){
  // input박스 보이기
  document.getElementById("input").style.display = "block" ;
  // 돋보기아이콘 없애고 -> x 아이콘 생기게
  document.getElementById("search_icon").style.display = "none";
  document.getElementById("X_icon").style.display = "block";
}

function getHideSearchbar(){
  // input박스 없애기
  document.getElementById("input").style.display = "none" ;
  // X아이콘 없애고 -> 돋보기아이콘 생기게
  document.getElementById("X_icon").style.display = "none";
  document.getElementById("search_icon").style.display = "block";
}


function getShowCT(){
  /* 채널톡 열기 */
  document.getElementById("ch").style.display = "block";
  document.getElementById("ka").style.display = "none";
  document.getElementById("top").style.display = "none";
}
function getHideCT(){
  /* 채널톡 닫기 */
  document.getElementById("ch").style.display = "none";
  document.getElementById("ka").style.display = "block";
  document.getElementById("top").style.display = "block";
}



//footer에서 katop 위치, opacity변경
$(window).scroll(function(){
  var scrT = $(window).scrollTop();
  var kaTop = document.querySelector("#kaTop");
  console.log(scrT); //스크롤 값 확인용
  if(scrT == $(document).height() - $(window).height()){
    $(kaTop).removeClass('ka_top1')
    $(kaTop).addClass('ka_top2')
  } else {
    document.getElementById("kaTop").style.display = "block";
    $(kaTop).removeClass('ka_top2')
    $(kaTop).addClass('ka_top1')
  }
});