import { useState } from "react";
import React from "react";
import logica from "./logica";

import "./style.css";
const AreaCPF = () => {
  const [numeroCPF, setNumeroCpf] = useState();
  const coletaDado = (evento) => {
    evento.preventDefault();
    let numero = Array.from(String(numeroCPF).split(""));

    let numeroLenght = 0;

    for (let i = 0; i < numero.length; i++) {
      numeroLenght += 1;
    }
    if (numeroLenght < 11 || numeroLenght > 11) {
      console.log("Digite os 11 digitos do CPF");
    } else {
      return logica(numero);
    }
  };

  return (
    <>
      <form className="formulario">
        <input
          type="number"
          className="cpf"
          placeholder="Digite aqui"
          onBlur={(e) => setNumeroCpf(e.target.value)}
        />
        <button type="button" className="botao" onClick={coletaDado}>
          VERIFICAR
        </button>
      </form>
    </>
  );
};

export default AreaCPF;
