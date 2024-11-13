var n1 = parseFloat(prompt("Primeiro número:"));
var n2 = parseFloat(prompt("Segundo número:"));
var n3 = parseFloat(prompt("Terceiro número:"));

if(n3 > n2 && n1){
    alert(n3)
}else if(n2 > n3 && n1){
    alert(n2)
}else{
    alert(n1)
}