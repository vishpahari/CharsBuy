/*-------navigation menu javascript--------*/
$('#open-bar').click(function(){
      $('.hidden-nav').addClass("show")
});

$('#close-bar').click(function(){
  $('.hidden-nav').removeClass("show")
});

/*-------active btn javascript--------*/


/*
$('.Heathergems').click(function(){

  $('.Heathergems .active-drop').each(function(){
      $(this).addClass("active-drop-open")
  })
  $(this).removeClass("active-drop-open")
});

$('.SGIAN').click(function(){

  $('.SGIAN .active-drop').each(function(){
      $(this).addClass("active-drop-open")
  })
  $(this).removeClass("active-drop-open")
});

$('.Hip').click(function(){

  $('.Hip .active-drop').each(function(){
      $(this).addClass("active-drop-open")
  })
  $(this).removeClass("active-drop-open")
});

$('.Walking').click(function(){

  $('.Walking .active-drop').each(function(){
      $(this).addClass("active-drop-open")
  })
  $(this).removeClass("active-drop-open")
});

*/

$('.black-box ul li ').click(function(){

  $('..active-drop').each(function(){
      $(this).removeClass("active-drop-open")
  })
  $(this).addClass("active-drop-open")
});



