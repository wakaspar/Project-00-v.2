console.log('js, you cray');


$(document).ready(function(){
  // Grab current screen width
  var screenWidth = ($(window).width()-200);
  console.log('screenWidth '+screenWidth);
  // Initalize Player One's Car Object
  var pOne = {
    //top:  $('#pOne').animate().top,
    left: $('#pOne').animate().left,
    initalPos: $('#pOne').position().left,
    keyCode:  65
  }
  // Initalize Player Two's car
  var pTwo = {
    //top:  $('#pTwo').animate().top,
    left: $('#pTwo').animate().left,
    initalPos: $('#pTwo').position().left,
    keyCode:  76
  }
  // KeyDown To Move Functionality
  $(document).keydown(function(event){
    // Move Player One
    if(event.keyCode == pOne.keyCode){
      $("#pOne").animate({left : "+=65px"}, 400);
      console.log('p1 position: '+$('#pOne').position().left);
    }
    // Move Player Two
    if(event.keyCode == pTwo.keyCode){
      $("#pTwo").animate({left : "+=65px"}, 400);
      console.log('p2 position: '+$('#pTwo').position().left);
    }
    // Set Win Conditions
    if (($('#pOne').position().left >= screenWidth) &&
        ($('#pTwo').position().left >= screenWidth)){
          alert('it is a tie!');
          window.location.reload('true');
      } else if($('#pOne').position().left >= screenWidth){
        alert('player one wins!');
        window.location.reload('true');
      } else if ($('#pTwo').position().left >= screenWidth) {
      alert('player two wins!');
      window.location.reload('true');
    }
    // Start A New Game Function
    var startNewGame = function(){
      pOne.initalPos = 0;
      pTwo.initalPos = 0;
    }
  });
});
