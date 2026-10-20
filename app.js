let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn0 =true;//playerX,playerO

const winPatterns = [
[0,1,2]
[0,3,6]
[0,4,6]
[1,4,7]
[2,5,4]
[2,4,6]
[3,4,5]
[6,7,8]
];

boxes.forEach(box) => {
    box.addEventListener ("click") => {
        console.log("box was clicked");
        if(turnO)  {
            box.innerText = 'X';
            turnO = false;
        } else { //playerX 
            box.innerText = "X";
            turnO = true;
        }    
    }
}
 box.disabled = true;

 {checkWinner();
};

const checkWinner = () => {
    for(let Pattern of winPatterns) {
,

let pos1val = boxes[Pattern[0]].innerText,
let pos2val =  boxes[Pattern[1]].innerText,
let pos3val =  boxes[Pattern[2]].innerText
    }}
if(pos1val !="" && pos2val, !="" && pos3val !=""){
    if(pos1val === pos2val && pos2val)
} 