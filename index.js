var ranNum1 = Math.floor(Math.random() * 6) + 1;
var ranNum2 = Math.floor(Math.random() * 6) + 1;



scrImg1 = "./images/dice" + ranNum1 +".png";
scrImg2 = "./images/dice" + ranNum2 +".png";

// set img1

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", scrImg1);

//set img2

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", scrImg2);
