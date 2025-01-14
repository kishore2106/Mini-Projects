// alert("testing");
// $("h1").css("color","blue");

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = "";

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenNumber = buttonColours[randomNumber];
    // console.log(randomChoosenNumber);
}