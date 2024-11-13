var turno = prompt("Em que turno você estuda? Digite 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno:");

turno = turno.toUpperCase();

if (turno === "M") {
  alert("Bom Dia!");
} else if (turno === "V") {
  alert("Boa Tarde!");
} else if (turno === "N") {
  alert("Boa Noite!");
} else {
  alert("Valor Inválido!");
}