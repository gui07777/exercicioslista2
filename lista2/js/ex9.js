function ordenarDecrescente() {
    
    var n1 = parseFloat(prompt("Digite o primeiro número:"));
    var n2 = parseFloat(prompt("Digite o segundo número:"));
    var n3 = parseFloat(prompt("Digite o terceiro número:"));
  
    var numeros = [n1, n2, n3];
  
    numeros.sort(function(a, b) {
      return b - a;
    });
  
    alert("Os números em ordem decrescente são: " + numeros.join(", "));
  }
  
  ordenarDecrescente();