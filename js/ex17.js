var ano = parseInt(prompt("Digite um ano para verificar se é bissexto:"));

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  console.log(ano + " é um ano bissexto.");
} else {
  console.log(ano + " não é um ano bissexto.");
}