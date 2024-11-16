var p1 = parseFloat(prompt("Valor do primeiro produto:"));
var p2 = parseFloat(prompt("Valor do segundo produto:"));
var p3 = parseFloat(prompt("Valor do terceiro produto:"));

var maior = p1;
if(p2 > maior){
 maior = p2;}
if(p3 > maior){
    maior = p3;
}

var menor = p1;
if(p2 < menor){
    menor = p2}
if(p3 < menor){
    menor = p3
}

alert("O produto mais barato custa:" + menor);