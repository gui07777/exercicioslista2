var l1 = parseFloat(prompt("Informe o lado 1:"));
var l2 = parseFloat(prompt("Informe o lado 2:"));
var l3 = parseFloat(prompt("Informe o lado 3:"));

var maior = l3

if(l1 + l2 > maior){
    alert("É um triângulo")
}

if( l1 == l2 == l3 ){
    alert("Triângulo equilátero")
}
else if(( l1 != l2) && (l1 != l3) && (l2 != l3 )) {
    alert("Triângulo escaleno")
}
else{
    alert("Triângulo isósceles")
}