    var numero1 = parseFloat(prompt("Digite o primeiro número:"));
    var numero2 = parseFloat(prompt("Digite o segundo número:"));
    var numero3 = parseFloat(prompt("Digite o terceiro número:"));
  
    var maior = numero1;
    if (numero2 > maior) {
      maior = numero2;
    }
    if (numero3 > maior) {
      maior = numero3;
    }
  
    var menor = numero1;
    if (numero2 < menor) {
      menor = numero2;
    }
    if (numero3 < menor) {
      menor = numero3;
    }
  
    alert("O maior número é: " + maior);
    alert("O menor número é: " + menor);