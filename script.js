const box = document.querySelectorAll(".wrapper>div");
const h1 = document.querySelector("h1");

const boxArray = Array.from(box);

//Winning logic in Tic Tac Toe
//[123, 456, 789, 147, 258, 369, 159, 357]

let count = 0;
boxArray.forEach((eachBoxArray) => {
  eachBoxArray.addEventListener("click", () => {
    count++;

    if (count <= 9) {
      if (count % 2 == 0) {
        eachBoxArray.innerHTML = 0;
      } else {
        eachBoxArray.innerHTML = "X";
      }
      if (checkWin()) {
        h1.innerText = "Winner";
        reset();
      }
    } else {
      h1.innerText = "DRAW";
      reset();
    }
  });
});

const reset = () => {
  for (let i = 0; i < boxArray.length; i++) {
    boxArray[i].innerHTML = "";
    count = 0;
  }
};

const getData = (div) => {
  return document.querySelector(div).innerText;
};

const checkWin = () => {
  if (
    checkCondition(".one", ".two", ".three") ||
    checkCondition(".four", ".five", ".six") ||
    checkCondition(".seven", ".eight", ".nine") ||
    checkCondition(".one", ".four", ".seven") ||
    checkCondition(".two", ".five", ".eight") ||
    checkCondition(".three", ".six", ".nine") ||
    checkCondition(".one", ".five", ".nine") ||
    checkCondition(".three", ".five", ".seven")
  ) {
    return true;
  }
};

const checkCondition = (div1, div2, div3) => {
  if (
    getData(div1) != "" &&
    getData(div2) != "" &&
    getData(div3) != "" &&
    getData(div1) == getData(div2) &&
    getData(div2) == getData(div3)
  ) {
    return true;
  }
};
