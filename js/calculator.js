'use strict'
var text = document.getElementById("texts");
var out = [];
var opAr = [];
var firstNo = [];
var secondNo = [];
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
        firstNo.push(text);
        document.getElementById(`texts`).value = firstNo.join("");

    })
}

function updateOperationValue(operation){{

    document.getElementById(`${operation}`).addEventListener("click", () => {

        if( operation === "plus" || "minus" || "divide" || "multiply" ){
            valueV = operationss[operation];
            opAr.push(valueV);
            firstNo.push(valueV);
            document.getElementById("texts").value = firstNo.join("");
        }
        firstNo.pop();
        for(let i = 1; i < 10; i++){
            if(document.getElementById(`${i}`)){
               afterOperation(opAr.join(""), i)
            }
        }
    })
}}

function afterOperation(operation, number){
    document.getElementById(`${number}`).addEventListener("click", () => {
        secondNo.push(number);
        firstNo.pop();
        document.getElementById(`texts`).value = secondNo.join("");
    })
    document.getElementById("equal").addEventListener("click", () => {
        calculateValue(firstNo.join(""), secondNo.join(""),  operation);
    })
}

function calculateValue(numberOne, numberTwo, operation) {
    
    var result;
    if(operation === "+"){
        result = parseInt(numberOne) + parseInt(numberTwo);
        document.getElementById("texts").value = result;
    }
    else if(operation === "-" ){
        result = numberOne - numberTwo;
        document.getElementById("texts").value = result;

    }
    else if(operation === "*"){
        result = numberOne * numberTwo;
        document.getElementById("texts").value = result;

    }
    else if(operation === "/"){
        result = numberOne / numberTwo;
        document.getElementById("texts").value = result;

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

if(window.location.reload){
    document.getElementById("texts").value = 0;
}