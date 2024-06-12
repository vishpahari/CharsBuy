/*-------navigation menu javascript--------*/
$('#open-bar').click(function(){
      $('.hidden-nav').addClass("show")
});

$('#close-bar').click(function(){
  $('.hidden-nav').removeClass("show")
});

/*-------active btn javascript--------*/

$('.black-box ul li ').click(function(){

  $('..active-drop').each(function(){
      $(this).removeClass("active-drop-open")
  })
  $(this).addClass("active-drop-open")
});



