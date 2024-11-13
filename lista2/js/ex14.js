var nota1 = parseFloat(prompt("Primeira nota:"));
var nota2 = parseFloat(prompt("Segunda nota:"));

media = (nota1+nota2)/2;

conceito = "";

if(media <= 10 && media >= 9){
    conceito = "A";
}
else if(media < 9.0 && media >= 7.5){
    conceito = "B";
}
else if(media < 7.5 && media >= 6.0){
    conceito = "C";
}
else if(media < 6.0 && media >= 4.0){
    conceito = "D";
}
else if(media < 4.0){
    conceito = "E";
}

var situacao = (conceito === "A" || conceito === "B" || conceito === "C") ? "APROVADO" : "REPROVADO";

alert("Primeira nota: " + nota1.toFixed(1));
alert("Segunda nota: " + nota2.toFixed(1));
alert("Média: " + media.toFixed(1));
alert("Conceito: " + conceito);
alert(situacao);