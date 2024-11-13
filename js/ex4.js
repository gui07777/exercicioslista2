var letra = prompt("Digite uma letra:")
letra = letra.toLowerCase();

if(letra = "a" || "e" || "i" || "o" || "u"){
    alert("É uma vogal")
}else if (letra = /[a-z]/.test(letra)){
    alert("É uma consoante")
}

    
