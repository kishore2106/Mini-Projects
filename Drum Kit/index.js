var numberOfDrums = document.querySelectorAll(".drum").length;
console.log(numberOfDrums);

for (var i=0; i<numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
    });
}



