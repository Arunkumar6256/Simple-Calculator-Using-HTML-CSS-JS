let display=document.getElementById('display');
function num(number){
    display.value+=number;
}
function op(operator){
    display.value+=operator;
}
function clearDisplay(){
    display.value=" ";
}
function res(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
