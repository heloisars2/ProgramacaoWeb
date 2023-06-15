function triangulo(){

    var inLadoA = document.getElementById("Lado1")
    var inLadoB = document.getElementById("Lado2")
    var inLadoC = document.getElementById("Lado3")
    var tipoTri = document.getElementById("H")
    var outSN = document.getElementById("R")

    var lado1 = Number(Lado1.value)
    var lado2 = Number(Lado2.value)
    var lado3 = Number(Lado3.value)

    if((lado1 > lado2 + lado3) || (lado2 > lado1+lado3) || (lado3 > lado1+lado2) || (lado1 + lado2 + lado3 == 0)){
        tipoTri.innerText = "Não é possivel formar um triangulo"
        tipoTri.style.color = "black"
    }else if((lado1 == lado2 && lado1 != lado3) || (lado1 == lado3 && lado3 != lado2) || (lado2 == lado3 && lado2 != lado1)){
        tipoTri.innerText = "Isóceles"
        tipoTri.style.color = "blue"
    }else if(lado1 == lado2 && lado1 == lado3 && lado2 ==lado3){
        tipoTri.textContent = "Equilátero"
        tipoTri.style.color = "red"
    }else{
        tipoTri.innerText = "Escaleno"
        tipoTri.style.color = "green"
    }
}

var btTriangulo = document.getElementById("btResultado")
btTriangulo.addEventListener("click", triangulo)