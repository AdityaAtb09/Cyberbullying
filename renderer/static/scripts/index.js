let progressBar1 = document.querySelector(".circular-progress-1");
let valueContainer1 = document.querySelector(".value-container-1");

let progressValue1 = 0;
let progressEndValue1 = 32;
let speed1 = 50;

let progress = setInterval(() => {
  progressValue1++;
  valueContainer1.textContent = `${progressValue1}%`;
  progressBar1.style.background = `conic-gradient(
      #2B7A78 ${progressValue1 * 3.6}deg,
      #DEF2F1 ${progressValue1 * 3.6}deg
  )`;
  if (progressValue1 == progressEndValue1) {
    clearInterval(progress);
  }
}, speed1);


let progressBar2 = document.querySelector(".circular-progress-2");
let valueContainer2 = document.querySelector(".value-container-2");

let progressValue2 = 0;
let progressEndValue2 = 37;
let speed2 = 50;

let progress2= setInterval(() => {
  progressValue2++;
  valueContainer2.textContent = `${progressValue2}%`;
  progressBar2.style.background = `conic-gradient(
      #2B7A78 ${progressValue2 * 3.6}deg,
      #DEF2F1 ${progressValue2 * 3.6}deg
  )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);

// let progressBar3 = document.querySelector(".circular-progress-3");
// let valueContainer3 = document.querySelector(".value-container-3");

// let progressValue3 = 0;
// let progressEndValue3 = 32;
// let speed3 = 50;

// let progress3= setInterval(() => {
//   progressValue3++;
//   valueContainer3.textContent = `${progressValue3}%`;
//   progressBar3.style.background = `conic-gradient(
//       #4d5bf9 ${progressValue3* 3.6}deg,
//       #cadcff ${progressValue3* 3.6}deg
//   )`;
//   if (progressValue3 == progressEndValue3) {
//     clearInterval(progress3);
//   }
// }, speed3);

function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("myBtn6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}