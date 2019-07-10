var one = document.getElementById("1");
var text = document.getElementById("texts");
var out = [];

function updateTextValue(number){
    document.getElementById(`${number}`).addEventListener("click", () => {
        text = number;
        out.push(text);
        out.push(number) = text
    })
}

for(let i = 1; i < 10; i++){
    if(document.getElementById(`${i}`)){
        updateTextValue(i);
    }
}