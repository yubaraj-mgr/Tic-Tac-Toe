const box = document.querySelectorAll(".wrapper>div");
const h1 = document.querySelector("h1");

const boxArray = Array.from(box);
let count = 0;
let winner = "";
let xCount = 0;
let oCount = 0;
let draw = 0;

boxArray.map((eachBox) => {
  eachBox.addEventListener("click", () => {
    count++;
    if (count <= 9) {
      if (count % 2 == 0) {
        eachBox.innerHTML = "0";
        // randomDiv();
      } else {
        eachBox.innerHTML = "X";
      }
    }
    winner += eachBox.innerHTML;

    if (count == 9) {
      draw += 1;
      document.getElementById("d").innerText = draw;
      reset();
      count = 0;
    }

    if (checkWin()) {
      const winCount = winner.length;
      if (winner.charAt(winCount - 1) == "X") {
        xCount += 1;
        document.getElementById("x").innerText = xCount;
      } else if (winner.charAt(winCount - 1) == "0") {
        oCount += 1;
        document.getElementById("o").innerText = oCount;
      }
      reset();
      count = 0;
    }
  });
});

const reset = () => {
  for (let i = 0; i < boxArray.length; i++) {
    boxArray[i].innerHTML = "";
  }
};

const getData = (num) => {
  return boxArray[num].innerHTML;
};

const checkCondition = (num0, num1, num2) => {
  return (
    getData(num0) != "" &&
    getData(num1) != "" &&
    getData(num2) != "" &&
    getData(num0) == getData(num1) &&
    getData(num1) == getData(num2)
  );
};

const checkWin = () => {
  if (
    checkCondition(0, 1, 2) ||
    checkCondition(3, 4, 5) ||
    checkCondition(6, 7, 8) ||
    checkCondition(0, 3, 6) ||
    checkCondition(1, 4, 7) ||
    checkCondition(2, 5, 8) ||
    checkCondition(0, 4, 8) ||
    checkCondition(2, 4, 6)
  ) {
    return true;
  }
};

// const randomDiv = (value) => {
//   return (boxArray[Math.floor(Math.random() * (9 - 0) + 0)].innerHTML = "O");
// };
