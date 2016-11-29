 //declares initial variables
 var counter = 0;
  var wins = 0;
  var losses = 0;

  //shows initial score (0) for counter, wins, and losses
  $("#scoreCount").text("New Score: " + counter);
  $("#winsCount").text("Wins: " + wins);
  $("#lossCount").text("Losses: " + losses);


var game = function(){
//ensures that the target number is between 20-120 and is a random number
var targetNumber = Math.floor((Math.random()*100)+20);

  $("#randomNumber").text("Random Number: " + targetNumber);

   // sets crystal values to four random numbers between 1 and 12.
  var w = Math.floor((Math.random()*11)+1);
  var x = Math.floor((Math.random()*11)+1);
  var y = Math.floor((Math.random()*11)+1);
  var z = Math.floor((Math.random()*11)+1);

  var numberOptions = [w, x, y, z];

  //creates multiple crystal images
  var crystal1 = $("<img>").addClass("crystalImage").attr("src", "assets/images/crystal1.jpg")
  var crystal2 = $("<img>").addClass("crystalImage").attr("src", "assets/images/crystal2.jpg")
  var crystal3 = $("<img>").addClass("crystalImage").attr("src", "assets/images/crystal3.jpg")
  var crystal4 = $("<img>").addClass("crystalImage").attr("src", "assets/images/crystal4.jpg")
  
  var crystalArray = [crystal1, crystal2, crystal3, crystal4];

  // for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, will create an imageCrystal
    var imageCrystal = $(crystalArray[i]).attr("data-crystalvalue", numberOptions[i]);
    
    //each crystal image will get added to the page.
    $("#crystals").append(imageCrystal);
  };

  //click event for eachcrystal on the page
  $(".crystalImage").on("click", function() {


    // Sets crystalValue to the data value for each crystal
   var crystalValue = ($(this).data("crystalvalue"));

    // increases counter value by each cryatal value when crystal is clicked
    counter = counter + crystalValue;

    //increases counter on the page to include the crystal value
   $("#scoreCount").text("New Score: " + counter);

    //logs wins or losses depending on if user wins or loses the game
    if (counter === targetNumber) {
      wins++
      $("#winsCount").text("Wins: " + wins);
      $("#scoreCount").text("You Win!");
    } else if (counter > targetNumber) {
      losses++
      $("#lossCount").text("Losses: " + losses);
      $("#scoreCount").text("You Lose!");
    };

    //reset button resets game
  $("#reset").on("click", function() {
    counter = 0;
      $("#scoreCount").text("New Score: " + counter);
      $("#crystals").empty();
      game();
    });

  });
};

game();
