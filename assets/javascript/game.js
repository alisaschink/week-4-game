//ensures that the target number is between 20-120 and is a random number
var targetNumber = Math.floor((Math.random()*100)+20);

  $("#numberToGuess").text(targetNumber);

  var counter = 0;
  var wins = 0;
  var losses = 0;

  //shows initial score (0) for counter, wins, and losses
  $("#score").text(counter);
  $("#wins").text(wins);
  $("#losses").text(losses);


   // sets crystal values to four random numbers.
  var w = Math.floor((Math.random()*20)+1);
  var x = Math.floor((Math.random()*20)+1);
  var y = Math.floor((Math.random()*20)+1);
  var z = Math.floor((Math.random()*20)+1);

  var numberOptions = [w, x, y, z];
  // for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>").addClass("crystalImage").attr("src", "assets/images/crystal1.jpg").attr("data-crystalvalue", numberOptions[i]);

    // each crystal image will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  //click event for eachcrystal on the page
  $(".crystalImage").on("click", function() {


    // Sets crystalValue to the data value for each crystal
   var crystalValue = ($(this).data("crystalvalue"));

    // increases counter value by each cryatal value when crystal is clicked
    counter = counter + crystalValue;

    //increases counter on the page to include the crystal value
   $("#score").text(counter);

    //logs wins or losses depending on if user wins or loses the game
    if (counter === targetNumber) {
      console.log("You win!");
      wins++
      $("#wins").text(wins);
      //reset game 

    }

    else if (counter > targetNumber) {
      console.log("You lose!!");
      losses++
      $("#losses").text(losses);
      //reset game
    }

  });
