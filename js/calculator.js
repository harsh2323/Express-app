'use strict'
var one = document.getElementById("1");
var text = document.getElementById("texts");
var out = [];
var opAr = [];
var firstNo = [];
var secondNo = [];
var result;
var operations = ["plus", "minus", "divide", "multiply"];
var keyV;
var valueV;
var operationss = {
    "plus": "+",
    "minus": "-",
    "multiply": "*",
    "divide": "/"
};

function updateTextValue(number){
    document.getElementById(`${number}`).addEventListener("click", () => {
        text = number;
        out.push(text);
        document.getElementById(`texts`).value = out.join("");
    })
}

function updateOperationValue(operation){{

    document.getElementById(`${operation}`).addEventListener("click", () => {

        operations.forEach(() => {
            if( operation === "plus" || "minus" || "divide" || "multiply" ){
                valueV = operationss[operation];
                opAr.push(valueV);
                opAr.shift();
                console.log(opAr);
                console.log(valueV);
                document.getElementById("texts").value = valueV;
            }
        })
    })
}}

function calculateValue(numberOne, numberTwo, operation) {

    if(operation === document.getElementById("plus")){
        result = numberOne + numberTwo;
    }
    else if(operation === document.getElementById("minus")){
        result = numberOne - numberTwo;
    }
    else if(operation === document.getElementById("multiply")){
        result = numberOne * numberTwo;
    }
    else if(operation === document.getElementById("divide")){
        result = numberOne / numberTwo;
    }
}

function displayResult(result) {
    document.getElementById("texts").value = result;
}

for(let i = 1; i < 10; i++){
    if(document.getElementById(`${i}`)){
        updateTextValue(i);
    }
}

for(var e = 0; e < operations.length; e++){
    if(document.getElementById(`${operations[e]}`)){
        var newOp = operations[e];
        updateOperationValue(newOp);
    }
}
