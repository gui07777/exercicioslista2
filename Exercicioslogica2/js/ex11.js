var salario = parseFloat(prompt("Salário:"));
var percentual;
var novosalario;
var aumento;

if(salario > 0 && salario < 280){
  percentual = 20}
else if(salario > 280 && salario < 700){
  percentual = 15
}
else if(salario > 700 && salario < 1500){
    percentual = 10
}
else{
    percentual = 5
}

novosalario = salario * (percentual/100) + salario;
aumento = novosalario - salario;

alert("Salário antes do reajuste:" + salario);
alert("Percentual de aumento aplicado:" + percentual,"%");
alert("Aumento:" + aumento);
alert("Novo salário:" + novosalario);