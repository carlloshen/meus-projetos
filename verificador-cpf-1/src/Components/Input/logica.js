function formataCpf(cpf) {
  let [numero, numeroCpf] = [cpf, []];
  let i = "";
  for (i in numero) {
    if (numero[i] != "." && numero[i] != "-" && numero[i] != ",") {
      numeroCpf.push(numero[i]);
    }
  }
  return primeiroDigito(numeroCpf);
}

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
    segundoDigito(numCpf);
  } else {
    alert("CPF inválido");
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
    alert("CPF é Válido");
  } else {
    alert("CPF invalido");
  }
};
export default formataCpf;
