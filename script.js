let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGame= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;
const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBtns =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner) =>{
 msg.innerText=`winner is ${winner}`;
 msgContainer.classList.remove("hide");
 disableBtns();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1v = boxes[pattern[0]].innerText;
        let pos2v = boxes[pattern[1]].innerText;
        let pos3v = boxes[pattern[2]].innerText;

        if(pos1v!="" && pos2v!="" && pos3v!=""){
            if(pos1v === pos2v && pos2v === pos3v){
                console.log("winner");
                showWinner(pos1v);
            }
        }

    }
};
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);





