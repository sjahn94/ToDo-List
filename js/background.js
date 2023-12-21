const bgImg = document.querySelector(".background img");
const imgArr = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg"];

const random = Math.floor(Math.random() * imgArr.length);

bgImg.src = imgArr[random];
