var nota1 = parseFloat(prompt("Primeira nota:"));
var nota2 = parseFloat(prompt("Segunda nota:"));

var media = (nota1 + nota2)/2;

if(media >= 9 && media <= 10){
    alert(+nota1, +nota2, "Média:" +media, "A - Aprovado")}

else if(media >= 7.5 && media < 9){
    alert(+nota1, +nota2, "Média:" +media, "B - Aprovado")}
    
else if(media >= 6 && media < 7.5){
    alert(+nota1, +nota2, "Média:" +media, "C - Aprovado")}

else if(media >= 4 && media < 6){
    alert(+nota1, +nota2, "Média: "+media, "D - Reprovado")}

else if(media = 0 && media < 4){
    alert(+nota1, +nota2, "Média:" +media, "E - Reprovado")}
    
    else{
        alert("Inválido. Digite notas de 0 a 10.")
    }