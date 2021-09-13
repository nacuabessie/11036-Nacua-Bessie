let answer;

let operator = parseInt(prompt("Please Enter a number between 1-4 to perform Operation\n1-Addition\n2-Subtraction\n3-Multiplication\n4-Division"));


if (operator == '1') { 
    let n1 = parseFloat(prompt ('Enter the first number: '));  
    let n2 = parseFloat(prompt ('Enter the second number: '));  
    answer = n1 + n2;  
}  
else if (operator == '2') { 
    let n1 = parseFloat(prompt ('Enter the first number: '));  
    let n2 = parseFloat(prompt ('Enter the second number: ')); 
    answer = n1 - n2;  
}  
else if (operator == '3') {
    let n1 = parseFloat(prompt ('Enter the first number: '));  
    let n2 = parseFloat(prompt ('Enter the second number: '));   
    answer = n1 * n2;  
}  
else if (operator == '4'){ 
    let n1 = parseFloat(prompt ('Enter the first number: '));  
    let n2 = parseFloat(prompt ('Enter the second number: '));  
    answer = n1 / n2;  
} 
else{
    alert("The number you have enter to perform Operation is Invalid");
}

window.alert(" The Answer is " + answer);  