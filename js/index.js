import {numbers, operations, display} from './querySelector.js';

let operation = null;

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if(display.textContent === "0"){
      display.textContent = "";
    }
    display.textContent += number.textContent;
  })
})

operations.forEach( (op) => {
  op.addEventListener("click", () => {
    if(operation === null){
      display.textContent += op.textContent;
      if(operation !== "="){
        operation = op.textContent;
      }
    }
  }) 
})

document.getElementById("equalsBtn").addEventListener("click", () => {
    if(operation !== null){
      let operationIndice = display.textContent.indexOf(operation);
      let firstNumber = display.textContent.substring(0, operationIndice);
      let lastNumber = display.textContent.substring(operationIndice + 1);
      let resultado = 0;

      switch (operation){
        case '+':
          console.log("Somou");
          resultado = parseFloat(firstNumber) + parseFloat(lastNumber);
          break;

        case '-':
          resultado = parseFloat(firstNumber) - parseFloat(lastNumber);
          break;

        case '*':
          resultado = parseFloat(firstNumber) * parseFloat(lastNumber);
          break;

        case '/':
          resultado = parseFloat(firstNumber) / parseFloat(lastNumber);
          break;
      }

      display.textContent = resultado;
      operation = null;
      
    }  
})

document.getElementById("clear")
    .addEventListener('click', () => {
  display.textContent = "0";
  operation = null;
})