/************jquery start*************/
$(document).ready(function(){
  /************tab active*************/
  $(".tab1 li").click(function(){
    var num = $(".tab1 li").index(this);
    
    $(".tab1 li").removeClass('active');
    $(this).addClass('active');

      
    
    
      if ( $('.brand_tab').hasClass('active') == true ) {
        $('.erseongcho_story').hide();
        $('.store').hide();
        $('.brand').show();
      }
      else if ( $('.ers_tab').hasClass('active') == true ) {
        $('.brand').hide();
        $('.store').hide();
        $('.erseongcho_story').show();
      } 
      else if ( $('.store_tab').hasClass('active') == true ) {
        $('.brand').hide();
        $('.erseongcho_story').hide();
        $('.store').show();
      } 
      else {
        $('.brand').show();
        $('.erseongcho_story').hide();
        $('.store').hide();
      }

    })
});