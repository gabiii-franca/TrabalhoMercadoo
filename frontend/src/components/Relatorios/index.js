import React from "react";
export default function Relatorios(props) {
  return (
    <tr>
      <td>{props.nome}</td>
      <td>{props.cpf}</td>
      <td>{props.telefone}</td>
      <td>{props.tamanho} Metros</td>
      <td>{props.tipodeservico}</td>
      <td>{props.dia}</td>
      <td>{props.valor} Reais</td>
    </tr>
  );
}
