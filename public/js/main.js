var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});


var vid = document.getElementById("video");
vid.playbackRate = 0.5;
var vid2 = document.getElementById("video2");
vid2.playbackRate = 0.5;
  
$(function() {
  $.scrollify({
      section:".panel",
      scrollbars:false,
      before:function(i,panels) {
          var ref = panels[i].attr("data-section-name");
          $(".pagination .mactive").removeClass("mactive");
          $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("mactive");
      },
      afterRender:function() {
          var pagination = "<ul class=\"pagination\">";
          var activeClass = "";
          $(".panel").each(function(i) {
              activeClass = "";
              if ( i === 0 ) {
                  activeClass = "mactive";
              }
              pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
          });

          pagination += "</ul>";

          $(".home").append(pagination);

          $(".pagination a").on("click", $.scrollify.move);
      }
  });
});

//  $(".top").click(function(){
//    $('body,html').animate({scrollTop:0},400); 
//    return false;
   
//   })


$(window).scroll(function(){
  var scrT = $(window).scrollTop();
  var kaTop = document.querySelector("#chTop");
  console.log(scrT); //스크롤 값 확인용
  if(scrT == $(document).height() - $(window).height()){
    $(kaTop).removeClass('chTop1')
    $(kaTop).addClass('chTop2')
  } else {

    $(kaTop).removeClass('chTop2')
    $(kaTop).addClass('chTop1')
  }
});

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