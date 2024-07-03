let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
      if (started == false) {
            console.log("Game started");
            started = true;

            levelUp();
      }
})

function btnFlash(btn) {
      btn.classList.add("flash");
      setTimeout(function () {
            btn.classList.remove("flash");
      }, 500);
}


function levelUp() {
      userSeq = [];
      level++;
      h2.innerText = `Level ${level}`;

      let randInx = Math.floor(Math.random() * 3);
      let randColor = btns[randInx];
      let randBtn = document.querySelector(`.${randColor}`);

      gameSeq.push(randColor);
      console.log(gameSeq);
      btnFlash(randBtn);
}
function checkAns(idx) {
      //console.log("current leve : ", level);
      //let idx = level - 1;

      if (userSeq[idx] === gameSeq[idx]) {
            if (userSeq.length == gameSeq.length) {
                  setTimeout(levelUp, 1000);
            }


      } else {
            h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start.`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function () {
                  document.querySelector("body").style.backgroundColor = "white";

            }, 150);
            resetTo();
      }
}
function btnPress() {
      console.log(this);
      let button = this;
      btnFlash(button);

      userColor = button.getAttribute("id");
      userSeq.push(userColor);


      checkAns(userSeq.length - 1);
}


let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
      btn.addEventListener("click", btnPress);
};

function resetTo() {
      started = false;
      gameSeq = [];
      userSeq = [];
      level = 0;
}