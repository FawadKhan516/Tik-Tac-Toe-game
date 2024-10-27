let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset-btn");
let winMsg = document.querySelector(".msg");
let msgP = document.querySelector(".msg_p");

let turnO = true; //playerX , playerO

const WinPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("Box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;

        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;  
        
        checkWinner();
    })
})


const  checkWinner = ()=>{
    for(let pattern of WinPattern){

        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                console.log("Congratas you are winner");

                // Optionally, highlight the winning pattern
                boxes[pattern[0]].style.backgroundColor = "green";
                boxes[pattern[1]].style.backgroundColor = "green";
                boxes[pattern[2]].style.backgroundColor = "green";

                document.querySelector(".msg_p").innerHTML = `Congrates Your are winner ${val1}`;
                disBtn();

            }
        }
    }
    
    // Check if all boxes are filled but no winner (Draw condition)
    let isDraw = true;
    boxes.forEach(box => {
        if (box.innerText === '') {
            isDraw = false; // If any box is empty, it's not a draw
        }
    });

    // If no winner and all boxes are filled, it's a draw
    if (isDraw) {
        gameOver = true;
        document.querySelector(".msg_p").innerHTML = `Game Over! It's a draw.`;
        disBtn(); // Disable clicks after game over
    }
}



// disabled btn after winning point;
const disBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

// reset btn logic;

reset.addEventListener("click", ()=>{
    for(let box of boxes){
        box.innerText = ""; 
        box.disabled = false;
        box.style.backgroundColor = "";
        msgP.innerHTML = "";
    }
})

