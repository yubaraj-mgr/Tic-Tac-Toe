const box = document.querySelectorAll(".wrapper>div");
const h1 = document.querySelector("h1");

const boxArray = Array.from(box);
let count = 0;
let winner = "";

boxArray.map((eachBox) => {
  eachBox.addEventListener("click", () => {
    count++;
    if (count <= 9) {
      if (count % 2 == 0) {
        eachBox.innerHTML = "0";
      } else {
        eachBox.innerHTML = "X";
      }
    }
    winner += eachBox.innerHTML;
    if (winner.length == 9) {
      h1.innerText = "DRAW";
      reset();
      count = 0;
    }

    if (checkWin()) {
      h1.innerText = `${winner.slice(winner.length - 1)} WINS`;
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
