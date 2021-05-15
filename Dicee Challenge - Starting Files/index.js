var p1 = Math.ceil(Math.random()*6);
var p2 = Math.ceil(Math.random()*6);

function diceImg(p, img) {
    document.querySelector(img).setAttribute("src", "images/dice" + p + ".png");
}
diceImg(p1, ".img1");
diceImg(p2, ".img2");

if(p1>p2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins"
}
else if(p1===p2){
    document.querySelector("h1").innerHTML ="🚩Draw!🚩"
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins🚩"
}

