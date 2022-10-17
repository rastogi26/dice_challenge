var images= ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png" ];


var randNumber1 = Math.floor(Math.random()*images.length);
document.querySelector(".img1").setAttribute("src",images[randNumber1]);

var randNumber2 = Math.floor(Math.random()*images.length);
document.querySelector(".img2").setAttribute("src",images[randNumber2]);


if (randNumber1>randNumber2) {
           document.querySelector(".container h1").innerHTML="Player1 Wins!  🚩"
}
else if (randNumber1<randNumber2) {
    document.querySelector(".container h1").innerHTML=" 🚩 Player2 Wins!"
}
else{
    document.querySelector(".container h1").innerHTML="Draw"
}

