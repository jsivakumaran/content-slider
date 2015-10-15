$(document).ready(function(){
  //Set Variables
  var speed = 500; //fade speed
  var autoswitch = true; //auto slider options
  var autoswitch_speed = 4000 //Auto slider speed

  //Add initial active class
  $('.slide').first().addClass('active');

  //Hide All Slides
  $('.slide').hide();

  //Show first Slide
  $('.active').show();

  //Next Button
  $('#next').on('click', nextSlide);

  //Previous Button
  $('#prev').on('click', prevSlide);

  if(autoswitch == true){
    setInterval(nextSlide, autoswitch_speed);
  }

  function nextSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':last-child')){
      $('.slide').first().addClass('active');
    }else {
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed)
  }

  function prevSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':first-child')){
      $('.slide').last().addClass('active');
    }else {
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed)
  }
});
