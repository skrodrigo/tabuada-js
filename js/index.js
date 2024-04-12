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

operations.forEach((op) => {
  op.addEventListener("click", () => {
    let tabuada = ""; // Variável para armazenar todos os cálculos
    for (let i = 1; i < 11; i++) {
      var calc = display.textContent + " " + op.textContent + " " + i + 
      " = " + eval(i + op.textContent + display.textContent);
      tabuada += calc + "<br>"; // Adiciona cada cálculo à variável com quebra de linha em HTML
    }
    display.innerHTML = tabuada; // Atualiza o display com todos os cálculos
  });
});

document.getElementById("clear")
    .addEventListener('click', () => {
  display.textContent = "0";
  operation = null;
})