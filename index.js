const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refBtnStart = document.querySelector('[data-action="start"]');
const refBtnStop = document.querySelector('[data-action="stop"]');
const refBody = document.querySelector("body");

refBtnStart.addEventListener("click", startChangeColor);
refBtnStop.addEventListener("click", stopChangeColor);

let idInterval = null;

function startChangeColor() {
  idInterval = setInterval(() => {
    refBody.style.backgroundColor = randomColor();
    // refBody.style.backgroundColor = `${
    //   colors[randomIntegerFromInterval(0, colors.length - 1)]
    refBody.style.backgroundColor = `${
      colors[randomIntegerFromInterval(0, colors.length - 1)]
    }`;
    refBtnStart.disabled = true;
  }, 1000);
}

function stopChangeColor() {
  clearInterval(idInterval);
  refBtnStart.disabled = false;
}

function randomColor() {
  return `rgb(${randomIntegerFromInterval(0, 255)}, 
              ${randomIntegerFromInterval(0, 255)},
              ${randomIntegerFromInterval(0, 255)})`;
}
