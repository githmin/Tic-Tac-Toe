let symbolVar = "";

document.getElementById("grid").onclick = function () {
    symbol();
}


function symbol(){
    console.log("hi");
    if(symbolVar === ""){
        symbolVar = "X";
        console.log(symbolVar);
    } else if(symbolVar === "X"){
        symbolVar = "O"
        console.log(symbolVar);
    } else if(symbolVar === "O"){
        symbolVar = "X"
        console.log(symbolVar);
    }
}

