const botao = document.querySelector("#botao");

botao.addEventListener("click", (e) => {
  e.preventDefault();
  const cpf = document.querySelector(".cpf").value;
  let [numero, numeroCpf] = [cpf.split(""), []];

  for (i in numero) {
    if (numero[i] != "." && numero[i] != "-" && numero[i] != ",") {
      numeroCpf.push(numero[i]);
    }
  }

  primeiroDigito(numeroCpf);
});

const primeiroDigito = (cpf) => {
  const numCpf = cpf.join("");
  let [firtsDigit, auxiliar] = [0, 0];

  for (let i = 10; i >= 2; i--) {
    firtsDigit = firtsDigit + parseInt(numCpf[auxiliar]) * i;
    auxiliar++;
  }

  let firtsVerificator = (firtsDigit * 10) % 11;

  if (firtsVerificator >= 10) {
    firtsVerificator = 0;
  }

  if (parseInt(cpf[9]) === firtsVerificator) {
    console.log(firtsVerificator);
    segundoDigito(numCpf);
  } else {
    const incorreto = document.querySelector("#spam");
    document.querySelector(".cpf").value = "";
    incorreto.setAttribute("style", "display: block");
  }
};

const segundoDigito = (cpf) => {
  const numCpf = cpf;
  let [secondDigit, auxiliar] = [0, 0];

  for (let i = 11; i >= 2; i--) {
    secondDigit = secondDigit + parseInt(numCpf[auxiliar]) * i;
    auxiliar++;
  }

  let secondVerificator = (secondDigit * 10) % 11;
  if (secondVerificator >= 10) {
    secondVerificator = 0;
  }

  if (parseInt(numCpf[10]) === secondVerificator) {
    alert("CPF Válido");
    const incorreto = document.querySelector("#spam");
    incorreto.setAttribute("style", "display: none");
  } else {
    const incorreto = document.querySelector("#spam");
    document.querySelector(".cpf").value = "";
    incorreto.setAttribute("style", "display: block");
  }
};
