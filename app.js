let symbolVar = "X";
let winner = "";


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(document.getElementById(button.id).innerHTML === "X"){
            console.log("X is in there");
        } else if (document.getElementById(button.id).innerHTML === "O"){
            console.log("O is in there");
        } else {
            document.getElementById(button.id).innerHTML = symbolVar;
            symbol();
            winnerCalc();
            updateWinnerDisplay();
        }
      });
    });

//Changing the symbol between X and O
function symbol(){
    if(symbolVar === "X"){
        symbolVar = "O"
        return symbolVar;
    } else if(symbolVar === "O"){
        symbolVar = "X"
        return symbolVar;
    }
}

//Calculating the winner
function winnerCalc(){
    let winX = "X";
    let winO = "O";
    let one = document.getElementById("one").innerHTML;
    let two = document.getElementById("two").innerHTML;
    let three = document.getElementById("three").innerHTML;
    let four = document.getElementById("four").innerHTML;
    let five = document.getElementById("five").innerHTML;
    let six = document.getElementById("six").innerHTML;
    let seven = document.getElementById("seven").innerHTML;
    let eight = document.getElementById("eight").innerHTML;
    let nine = document.getElementById("nine").innerHTML;
    if (one === winX && two === winX && three === winX) {
        winner = "X";
    } else if (four === winX && five === winX && six === winX){
        winner = "X";
    } else if (seven === winX && eight === winX && nine === winX){
        winner = "X";
    } else if (three === winX && six === winX && nine === winX){
        winner = "X";
    } else if (one === winX && four === winX && seven === winX){
        winner = "X";
    } else if (one === winX && five === winX && nine === winX){
        winner = "X";
    } else if (three === winX && five === winX && seven === winX){
        winner = "X";
    } else if (two === winX && five === winX && eight === winX){
        winner = "X"
    } else if (one === winO && two === winO && three === winO) { 
        winner = "O";
    } else if (four === winO && five === winO && six === winO){
        winner = "O";
    } else if (seven === winO && eight === winO && nine === winO){
        winner = "O";
    } else if (three === winO && six === winO && nine === winO){
        winner = "O";
    } else if (one === winO && four === winO && seven === winO){
        winner = "O";
    } else if (one === winO && five === winO && nine === winO){
        winner = "O";
    } else if (three === winO && five === winO && seven === winO){
        winner = "O";
    } else if (two === winO && five === winO && eight === winO){
        winner = "O"
    }
    console.log("winner is " + winner);
    return winner;
}


//Displaying the winner under the display
function updateWinnerDisplay(){
    if (winner === "X" ) {
        document.getElementById("player-display").innerHTML = "Player X wins!"
    } else if (winner === "O") {
        document.getElementById("player-display").innerHTML = "Player O wins!"
    }
}


//reset game
let resetBtn = document.getElementById("reset-btn");
if(resetBtn.addEventListener){
resetBtn.addEventListener('click', function(){
    console.log("reset!");
    document.getElementById("one").innerHTML = "";
    document.getElementById("two").innerHTML = "";
    document.getElementById("three").innerHTML = "";
    document.getElementById("four").innerHTML = "";
    document.getElementById("five").innerHTML = "";
    document.getElementById("six").innerHTML = "";
    document.getElementById("seven").innerHTML = "";
    document.getElementById("eight").innerHTML = "";
    document.getElementById("nine").innerHTML = "";
    winner = "";
});
}