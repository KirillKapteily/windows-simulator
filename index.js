let startBtn = document.querySelector(".startBtn");
let startBody = document.querySelector(".startBody");
let startClose = document.querySelector(".startClose");
let aboutBtn = document.querySelector(".aboutBtn");
let aboutBody = document.querySelector(".aboutBody");
let aboutClose = document.querySelector(".aboutClose");
let windowTitle = document.querySelector(".windowTitle");
let programmBtn = document.querySelector(".programmBtn");
let errorBody = document.querySelector(".errorBody");
let errorClose = document.querySelector(".errorClose");
let errorSound = new Audio('sounds/error.wav')

let startOpened = () => {
    startBody.style.display = "block";
};

let startClosed = () => {
    startBody.style.display = "none";
};

let aboutOpened = () => {
    aboutBody.style.display = "block";
};

let aboutClosed = () => {
    aboutBody.style.display = "none";
};

let errorOpened = () => {
    errorBody.style.display = "block";
errorSound.play();
};

let errorClosed = () => {
    errorBody.style.display = "none";
};

startBtn.addEventListener("click", startOpened);
startClose.addEventListener("click", startClosed);
aboutBtn.addEventListener("click", aboutOpened);
aboutClose.addEventListener("click", aboutClosed);
programmBtn.addEventListener("click", errorOpened);
errorClose.addEventListener("click", errorClosed);