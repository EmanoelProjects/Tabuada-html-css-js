//Componentes
const multiplicationForm = document.querySelector("#multiplication-form");
const numberImput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);
const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);
//Funções
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = "";

  for (i = 1; i < multiplicatorNumber; i++) {
    const result = number * i;

    const template = `<div class="row">
    <div class="operation">${number} x ${i} = </div>
    <div class="result">${result}</div>
</div> `;

    const parse = new DOMParser();
    const htmlTemplate = parse.parseFromString(template, "text/html");

    const row = htmlTemplate.querySelector(".row");

    multiplicationTable.appendChild(row);
  }
  multiplicationTitle.innerText = number;
};

//Eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberImput.value;
  const multiplicatorNumber = +multiplicatorInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) return;

  createTable(multiplicationNumber, multiplicatorNumber);
});
