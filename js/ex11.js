var salario = parseFloat(prompt("Salário do colaborador em real:"));

var percentual = 0;
var novosalario = 0;
var valoraumento = 0;

if(salario <= 280){
    percentual = 20;
}
 else if(salario > 280 && salario <= 700 ){
    percentual = 15;
}
else if(salario > 1500 && salario <= 700){
    percentual = 10;
}
else if (salario > 1500 ){
    percentual = 5;
}


valoraumento = salario * (percentual/100);
novosalario = salario + valoraumento;



alert("Salário antes do reajuste: R$ " + salario.toFixed(2));
alert("Percentual de aumento aplicado: " + percentualAumento + "%");
alert("Valor do aumento: R$ " + valorAumento.toFixed(2));
alert("Novo salário, após o aumento: R$ " + novoSalario.toFixed(2));