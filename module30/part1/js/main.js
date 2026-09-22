//conditionals
//if edeh else +++ else if

var x = 1;

if(x>2){
    console.log("Vlera me X me e madhe se 2")
}else{
    console.log("Vlera me X me e vogel se 2")
}

var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');

button.onclick = function(){
    if(input.value > 10){
        text.innerHTML = "Input value is greater than 10";
    }else if(input.value < 10){
        text.innerHTML = "Input value is lower than 10";
    }else{
        text.innerHTML = "Input value is equal to 10";
    }
}