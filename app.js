let symbolVar = "";


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
        }
      });
    });


function symbol(){
    if(symbolVar === ""){
        symbolVar = "X";
        return symbolVar;
    } else if(symbolVar === "X"){
        symbolVar = "O"
        return symbolVar;
    } else if(symbolVar === "O"){
        symbolVar = "X"
        return symbolVar;
    }
}

