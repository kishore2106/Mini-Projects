// alert("testing");
// $("h1").css("color","blue");

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = "";
var soundColour = "";
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColour = buttonColours[randomNumber];
    // console.log(randomChoosenColour);
    $("#"+randomChoosenColour).fadeOut(100).fadeIn(100);

    switch(randomChoosenColour){
        case "red":
            var audio = new Audio("./sounds/red.mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio("./sounds/blue.mp3");
            audio.play();
            break;
        case "green":
            var audio = new Audio("./sounds/green.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("./sounds/yellow.mp3");
            audio.play();
            break;
        default :
            var audio = new Audio("./sounds/wrong.mp3");
            audio.play();
            break;
    }
}

$(".btn").on("click", function (event){
    var colourClicked = $(this).attr("id");
    $("#"+colourClicked).fadeOut(100).fadeIn(100);

    switch(colourClicked){
        case "red":
            var audio = new Audio("./sounds/red.mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio("./sounds/blue.mp3");
            audio.play();
            break;
        case "green":
            var audio = new Audio("./sounds/green.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("./sounds/yellow.mp3");
            audio.play();
            break;
        default :
            var audio = new Audio("./sounds/wrong.mp3");
            audio.play();
            break;
    }
});