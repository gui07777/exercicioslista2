var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

var media = (nota1 + nota2 + nota3) / 3;

if (media === 10) {
    alert("Aprovado com Distinção! Média: " + media);
} else if (media >= 7) {
    alert("Aprovado! Média: " + media);
} else {
    alert("Reprovado! Média: " + media);
}