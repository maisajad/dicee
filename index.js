var randomNumber1=Math.floor((Math.random()*6)+1);
var randomeDiceImg="images/dice"+randomNumber1+".png";
var leftImg=document.querySelectorAll("img")[0];
leftImg.setAttribute("src",randomeDiceImg);
var randomNumber2=Math.floor((Math.random()*6+1));
var randomeDiceImg2="images/dice"+randomNumber2+".png";
var rightImg=document.querySelectorAll("img")[1];
rightImg.setAttribute("src",randomeDiceImg2);
if(randomNumber1>randomNumber2)
document.getElementById("txt").innerHTML="🚩Player 1 wins!";
else if(randomNumber1<randomNumber2)
document.getElementById("txt").innerHTML="Player 2 wins!🚩";
else
document.getElementById("txt").innerHTML="Draw!";
