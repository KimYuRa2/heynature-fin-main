
/************jquery start*************/
$(document).ready(function(){

  /************tab active*************/
    $(".find_tab a").click(function(){
      
      $(".find_tab a").removeClass('active');
      $(this).addClass('active');
    
  
      if ( $('.find_tab li:first-child a').hasClass('active') == true ) {
        $('#pw_find_wrap').hide();
        $('#id_find_wrap').show();

      }
      else if ( $('.find_tab li:nth-child(2) a').hasClass('active') == true ) {
        $('#id_find_wrap').hide();
        $('#pw_find_wrap').show();
      }

    });
  });