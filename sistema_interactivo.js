const name = prompt("Ingrese tu nombre"), age = +prompt("Ingrese tu edad")

if(isNaN(age)){
    console.log("Error: Por favor, ingresa una edad válida en números.")
}else if(age < 18){
    console.log (`Hola, ${name}, no eres mayor de edad.`)
}else{
    console.log(`Hola ${name}, tienes ${age} años. Eres mayor de edad`)
}