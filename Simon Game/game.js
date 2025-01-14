// alert("testing");
// $("h1").css("color","blue");

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

$(".btn").on("click", function (){
    var userChoosenColour = $(this).attr("id");
    $("#"+userChoosenColour).fadeOut(100).fadeIn(100);
    // makeSound(userChoosenColour);
    userClickedPattern.push(userChoosenColour);
    
    console.log(userClickedPattern);

    
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColour = buttonColours[randomNumber];
    // console.log(randomChoosenColour);
    $("#"+randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // makeSound(randomChoosenColour);
}


// function makeSound(colourClicked){
//     switch(colourClicked){
//         case "red":
//             var audio = new Audio("./sounds/red.mp3");
//             audio.play();
//             break;
//         case "blue":
//             var audio = new Audio("./sounds/blue.mp3");
//             audio.play();
//             break;
//         case "green":
//             var audio = new Audio("./sounds/green.mp3");
//             audio.play();
//             break;
//         case "yellow":
//             var audio = new Audio("./sounds/yellow.mp3");
//             audio.play();
//             break;
//         default :
//             var audio = new Audio("./sounds/wrong.mp3");
//             audio.play();
//             break;
//     }
// }