console.log('js, you cray');


$(document).ready(function(){
  // Grab current screen width
  var screenWidth = 1000 //$(window).width();
  console.log('screenWidth '+screenWidth);
  // Initalize Player One's Car Object
  var pOne = {
    top:  $('#pOne').animate().top,
    left: $('#pOne').animate().left,
    position: $('#pOne').position().left,
    keyCode:  65
  }
  // Initalize Player Two's car
  var pTwo = {
    top:  $('#pTwo').animate().top,
    left: $('#pTwo').animate().left,
    position: $('#pTwo').position().left,
    keyCode:  76
  }

  // KeyDown To Move Functionality
  $(document).keydown(function(event){

    // Set Win Conditions


    // Move Player One
    if(event.keyCode == pOne.keyCode){
      console.log('p1 pressed '+pOne.keyCode);
      $("#pOne").animate({left : "+=65px"}, 400);
    }
    // Move Player Two
    if(event.keyCode == pTwo.keyCode){
      console.log('p2 pressed '+pTwo.keyCode);
      $("#pTwo").animate({left : "+=65px"}, 400);
    }

  });
});
