var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var player1Dice = "./images/dice"+randomNumber1+".png";
var player2Dice = "./images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",player1Dice);
document.querySelector(".img2").setAttribute("src",player2Dice); 

var res = "";

if(randomNumber1 > randomNumber2){
    res = "🚩Player 1 wins!";
} else if (randomNumber1 < randomNumber2){
    res = "Player 2 wins!🚩";
}else{
    res = "Draw!";
}

document.querySelector("h1").innerHTML = res;