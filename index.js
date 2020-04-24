var img1 = document.querySelector(".img1");
img1.setAttribute("src", "images/dice6.png");
var img2 = document.querySelector(".img2");
img2.setAttribute("src", "images/dice6.png");


var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var h1 = document.querySelector("h1");


// Switch for first dice
switch (randomNumber1) {
    case 1:
        img1.setAttribute("src", "images/dice1.png");
        break;
    case 2:
        img1.setAttribute("src", "images/dice2.png");
        break;
    case 3:
        img1.setAttribute("src", "images/dice3.png");
        break;
    case 4:
        img1.setAttribute("src", "images/dice4.png");
        break;
    case 5:
        img1.setAttribute("src", "images/dice5.png");
        break;
    case 6:
        img1.setAttribute("src", "images/dice6.png");
        break;

    default:
        img1.setAttribute("src", "images/dice6.png");
        break;

}

//Switch for second dice

switch (randomNumber2) {
    case 1:
        img2.setAttribute("src", "images/dice1.png");
        break;
    case 2:
        img2.setAttribute("src", "images/dice2.png");
        break;
    case 3:
        img2.setAttribute("src", "images/dice3.png");
        break;
    case 4:
        img2.setAttribute("src", "images/dice4.png");
        break;
    case 5:
        img2.setAttribute("src", "images/dice5.png");
        break;
    case 6:
        img2.setAttribute("src", "images/dice6.png");
        break;

    default:
        img2.setAttribute("src", "images/dice6.png");
        break;

}

if (randomNumber1 > randomNumber2) {
    h1.innerHTML = " <h1><i class='fas fa-pennant'></i> Player 1 Wins !</h1>";
} else if (randomNumber2 > randomNumber1) {
    h1.innerHTML = "<h1><i class='fas fa-pennant'></i> Player 2 Wins !</h1>";
} else {
    h1.innerHTML = "<h1><i class='fas fa-pennant'></i> Draw!</h1>";
}