//console.log("Hello world")


function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    const Price = document.getElementById("ResultPrice");
    Price.innerText = "El Perimetro del Cuadrado es: $" + perimetro;

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    const Price = document.getElementById("ResultPrice");
    Price.innerText = "El Area del Cuadrado es: $" + area;

}


//Calculos triangulo
function calcularPerimetroTriangulo(){
    let inputlado1 = document.getElementById("inputLadoTriangulo");
    let lado1 = parseInt(inputlado1.value);
    let inputlado2 = document.getElementById("inputLado2Triangulo");
    let lado2 = parseInt(inputlado2.value);
    let inputbase = document.getElementById("inputBase3Triangulo");
    let base = parseInt(inputbase.value);
    const pTriangulo = perimetroTriangulo(lado1, lado2, base);
    const Price = document.getElementById("ResultPrice1");
    Price.innerText = "El Perimetro del Triangulo es: $" + pTriangulo;
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputBaseTriangulo");
    const base = inputBase.value;
    const inputAltura = document.getElementById("inputAlturaTriangulo");
    const altura = inputAltura.value;
    const aTriangulo = areaTriangulo(base, altura);
    const Price = document.getElementById("ResultPrice1");
    Price.innerText = "El Area del Triangulo es: $" + aTriangulo;
}
//Calulos Circulo
function calcularDiametroCirculo(){
    const inputRadio = document.getElementById("inputRadioCirculo")
    const radio = inputRadio.value;
    const diametro = diametroCirculo(radio);
    const Price = document.getElementById("ResultPrice2");
    Price.innerText = "El Diametro del Circulo es: $" + diametro;
   
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputRadioCirculo")
    const radio = inputRadio.value;
    const PerimetroC = perimetroCirculo(radio);
    const Price = document.getElementById("ResultPrice2");
    Price.innerText = "El Perimetro del Circulo es: $" + PerimetroC;

}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputRadioCirculo")
    const radio = inputRadio.value;
    const AreaC = areaCirculo(radio);
    const Price = document.getElementById("ResultPrice2");
    Price.innerText = "El Area del Circulo es: $" + AreaC;
}
//Cuadrado
function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}
//Triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) /2;
}
//Circulo
function diametroCirculo(radio){
    return radio*2;
}
const PI = Math.PI;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio){
    return (radio * radio) * PI;
}
