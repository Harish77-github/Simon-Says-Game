let gameSeq = [];
let userSeq = [];
let btns = ["blue", "yellow", "plum", "aqua"];
let started = false;
let lvl = 0;
let h3 = document.querySelector("h3");
let body=document.querySelector("body");

document.addEventListener("keypress", function() {
    if (!started) {
        alert("Game is started!!");
        started = true;
        levelUp();
    }
});

function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 500);
}

function userFlashBtn(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 400);
}

function levelUp() {
    userSeq = [];
    lvl++;
    h3.innerText = `Level ${lvl}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(`Flashing button: ${randColor}`);
    flashBtn(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerText = `Game over! , your previous score was ${lvl}.`;
        h3.append(" press any key to start over again!");
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },200)
        reset();
    }
}
function btnPress() {
    let btn = this;
    userFlashBtn(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    lvl = 0;
    gameSeq = [];
    userSeq=[];
}
function displayScore(){

}
