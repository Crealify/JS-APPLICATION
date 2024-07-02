let randomNumberOne = 1 + Math.floor(Math.random() * 6);
let randomDiceImageOne = "dice" + randomNumberOne + ".png";
let randomImageSourceOne = "images/" + randomDiceImageOne;
let imageOne = document.querySelectorAll("img")[0];
imageOne.setAttribute("src", randomImageSourceOne);

let randomNumberTwo = 1 + Math.floor(Math.random() * 6);
let randomDiceImageTwo = "dice" + randomNumberTwo + ".png";
let randomImageSourceTwo = "images/" + randomDiceImageTwo;
let imageTwo = document.querySelectorAll("img")[1];
imageTwo.setAttribute("src", randomImageSourceTwo);

if (randomNumberOne > randomNumberTwo) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumberTwo > randomNumberOne) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
