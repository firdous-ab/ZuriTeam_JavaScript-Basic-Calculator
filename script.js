var num1 = window.prompt("Enter a number");
var num2 = window.prompt("Enter another number");
var operator = window.prompt("Enter Operator");


num1 = parseFloat(num1);
num2 = parseFloat(num2);


if(num1 === NaN || num2 === NaN){
  console.log('Invalid input')
} 
else{

if(operator === '+'){
document.write(num1 + num2);
}

else if(operator === '-'){
    document.write(num1 - num2);
}

else if(operator === '/'){
    document.write(num1 / num2);
}

else if(operator === '*'){
    document.write(num1 * num2);
}

else{
  document.write('Invalid operator');
}
}