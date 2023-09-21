let inputBox = document.getElementById("result");

function Clear(){
    inputBox.value = "";
}
function del(){
    inputBox.value = inputBox.value.slice(0,-1);
}
function display(value){
    inputBox.value = inputBox.value + value;
}
function Calculate(){
    inputBox.value = eval(inputBox.value);
}