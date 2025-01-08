// Button Clicked
var numberOfDrums = document.querySelectorAll(".drum").length;
console.log(numberOfDrums);

for (var i=0; i<numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Key Pressed

addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    var audioSoundFile = "";
    switch(key){
        case 'w': 
            audioSoundFile = "./sounds/crash.mp3";
            break;
        case 'a':
            audioSoundFile = "./sounds/kick-bass.mp3";
            break;
        case 's':
            audioSoundFile = "./sounds/snare.mp3";
            break;
        case 'd': 
            audioSoundFile = "./sounds/tom-1.mp3";
            break;
        case 'j':
            audioSoundFile = "./sounds/tom-2.mp3";
            break;
        case 'k':
            audioSoundFile = "./sounds/tom-3.mp3";
            break;
        case 'l':
            audioSoundFile = "./sounds/tom-4.mp3";
            break;
        default:
            console.log("Not a valid key");
            break;
    }
    var audio = new Audio(audioSoundFile);
    audio.play();
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}