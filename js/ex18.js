let data = prompt("Digite uma data no formato dd/mm/aaaa:");

function isDataValida(data) {
  let partes = data.split("/");

  if (partes.length !== 3) {
    return false;
  }

  let dia = parseInt(partes[0]);
  let mes = parseInt(partes[1]);
  let ano = parseInt(partes[2]);

  if (mes < 1 || mes > 12) {
    return false;
  }

  let diasNoMes;

  if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
    diasNoMes = 31;
  }
  else if ([4, 6, 9, 11].includes(mes)) {
    diasNoMes = 30;
  }
  else if (mes === 2) {
    diasNoMes = (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) ? 29 : 28;
  }

  return dia >= 1 && dia <= diasNoMes;
}

if (isDataValida(data)) {
  console.log("A data é válida.");
} else {
  console.log("A data é inválida.");
}