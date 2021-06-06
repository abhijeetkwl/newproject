const BODY = document.querySelector("body");

var randomWidth = () => {
  let x = 0;
  if (detectMob()) {
    //    x = getRndInteger(65,85);
    document.querySelector(".container-box").style.width = "80%";
    document.querySelector(".container-box").setAttribute("data-value",  " "); 
      document.querySelector(".btn-stop").style.opacity = "0";
    clearInterval(interval);
  } else {
    x = getRndInteger(30, 70); 
    document.querySelector(".container-box").style.width = x + "%";
    document.querySelector(".container-box").setAttribute("data-value", x+ "%"); 

  }
};

var getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

randomWidth();

var interval = setInterval(() => {
  randomWidth();
}, 2000);

let stopbtn = document.querySelector(".btn-stop");

stopbtn.addEventListener("mouseover", function () {
  this.style.left = getRndInteger(-10, 99) + "%";
  this.style.top = getRndInteger(-10, 99) + "%";
  BODY.style.background = getRandomColor();
  this.innerHTML = "Stop it :)";
  this.style.bottom = "auto"; 
});

stopbtn.addEventListener("click", function () {
  clearInterval(interval);
  BODY.style.background = "white"; 
  this.style.opacity = "0";
});

function detectMob() {
  return window.innerWidth <= 1000 && window.innerHeight <= 1000;
}

function getRandomColor() {
  var str = Math.random().toString(16) + Math.random(0).toString(),
  sg = str.replace(/0./g,'white').match(/.{1,6}/g),
  col = parseInt(sg[0], 16) ^ 
        parseInt(sg[1], 16) ^ 
        parseInt(sg[2], 16)
        parseInt(sg[3], 16) ^ 
        parseInt(sg[4], 16);
  return '#' + ("999999" + col.toString(16)).slice(-6);
}

document.querySelector("#date_").innerHTML =(new Date()).getFullYear();
// document.querySelector(".footer").style.marginTop = (window.innerHeight/2) - 250 +"px";
// console.log(window.innerHeight)