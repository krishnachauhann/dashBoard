

$(document).ready(function(){

  $('.list-group-items').click(function(){ 
    $('.list-group-items').removeClass('active');
    $(this).addClass('active');
    })

  //   $('a.toggler').click(function(){
  //     $(this).toggleClass('off');
  // });
})



$('.switch input:checkbox').change(function(){
  if($(this).is(":checked")) {
      $('.dashboard').addClass("lightMode");
  } else {
      $('.dashboard').removeClass("lightMode");
  }
});
