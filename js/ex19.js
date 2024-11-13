let numero = parseInt(prompt("Digite um número inteiro menor que 1000:"));

// Verifica se o número está dentro do intervalo válido
if (numero >= 0 && numero < 1000) {
  // Calcula centenas, dezenas e unidades
  let centenas = Math.floor(numero / 100);      // Extrai as centenas
  let dezenas = Math.floor((numero % 100) / 10); // Extrai as dezenas
  let unidades = numero % 10;                   // Extrai as unidades


  let resultado = "";

  // Centenas
  if (centenas > 0) {
    resultado += `${centenas} centena${centenas > 1 ? 's' : ''}`;
  }

  // Dezenas
  if (dezenas > 0) {
    if (resultado) resultado += ", ";
    resultado += `${dezenas} dezena${dezenas > 1 ? 's' : ''}`;
  }

  // Unidades
  if (unidades > 0) {
    if (resultado) resultado += " e ";
    resultado += `${unidades} unidade${unidades > 1 ? 's' : ''}`;
  }

  // Se o número for 0, trata-se de 0 unidades
  if (numero === 0) {
    resultado = "0 unidades";
  }

  // Exibe o resultado
  console.log(resultado);
} else {
  console.log("Por favor, digite um número menor que 1000.");
}