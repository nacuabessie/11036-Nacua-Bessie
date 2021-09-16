
let e= document.getElementById("Cal");
e.style.backgroundColor ='#000814';
e.style.fontSize="40px";
e.style.color='#f5cac3';
e.style.textAlign="center";

let b= document.getElementById("background");
b.style.backgroundColor ="lightblue";
b.style.fontSize="23px";
b.style.color='#b5838d';
b.style.textAlign="center";

let o= document.getElementById("oper");
o.style.fontSize="20px";
o.style.color='#b5838d';
o.style.textAlign="center";

let a= document.getElementById("result");
a.style.fontSize="25px";
a.style.color='#f48c06';


function funcAdd(){
    var num1=parseInt(document.getElementById('number1').value);
    var num2=parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML=num1+num2; 
    
}
function funcMinus(){
    var num1=parseInt(document.getElementById('number1').value);
    var num2=parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML=num1-num2;
}

function funcMultiply(){
    var num1=parseInt(document.getElementById('number1').value);
    var num2=parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML=num1*num2;
}

function funcDivide(){
    var num1=parseInt(document.getElementById('number1').value);
    var num2=parseInt(document.getElementById('number2').value);
    document.getElementById('result').innerHTML=num1/num2;
}

function funcBttn() {
    document.getElementById("background").style.backgroundColor = "#1e6091";
  }