var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));
var numero3 = parseFloat(prompt("Digite o terceiro número:"));
var medio

var maior = numero1;
if(numero2 > maior){
  maior = numero2;
  medio = numero2;
}
if(numero3 > maior){
  maior = numero3;
  medio = numero2
}

var menor = numero1;
if (numero2 < menor) {
      menor = numero2;
      medio = numero2
    }
if (numero3 < menor) {
      menor = numero3;
      medio = numero2;
    }



alert(+ maior);
alert(+ medio);
alert(+ menor);

