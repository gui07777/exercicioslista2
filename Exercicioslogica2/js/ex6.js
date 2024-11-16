var n1 = parseFloat(prompt("Primeiro número:"));
var n2 = parseFloat(prompt("Segundo número:"));
var n3 = parseFloat(prompt("Terceiro número:"));

if(n1 > n2 && n1 > n3){
    alert("O maior é:" + n1); // check
}
else if(n2 > n1 && n2 > n3){
    alert("O maior é:" + n2); // check
}else{ 
    alert("O maior é:" + n3);
}
