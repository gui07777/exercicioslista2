

var p1 = parseFloat(prompt("Valor do primeiro produto:"));
var p2 = parseFloat(prompt("Valor do segundo produto:"));
var p3 = parseFloat(prompt("Valor do terceiro produto:"));

var menor = p1
if(p3 < menor){
 menor = p3
 alert("O mais barato é o terceiro produto")
}
if(p2 < menor){
    menor = p2
    alert("O mais barato é o segundo produto")
}else{
    alert("O mais barato é o primeiro produto")
}
