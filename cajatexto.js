function fnGeo() {

    let datoVariable = "";

    datoVariable = document.getElementById("txtDato").value;

    console.log("Dato:", datoVariable);

    fnSalidaParrafo(datoVariable);

    fnAlerta(datoVariable);

}


function fnSalidaParrafo(datoVariable) {

    document.getElementById("pfoSalida").innerHTML =
        "El dato ingresado fue: <b>" + datoVariable + "</b>";

}


function fnAlerta(datoVariable) {

    alert("El dato ingresado fue: " + datoVariable);

}


function fnCalculaRider() {

    let numero1 = 0;
    let numero2 = 0;

    let resultadoSuma = 0;
    let resultadoResta = 0;
    let resultadoMultiplicacion = 0;

    // Obtener valores

    numero1 = document.querySelector(".txtNum1").value;

    numero2 = document.querySelector("#txtNum2").value;

    // Operaciones

    resultadoSuma = parseInt(numero1) + parseInt(numero2);

    resultadoResta = parseInt(numero1) - parseInt(numero2);

    resultadoMultiplicacion = parseInt(numero1) * parseInt(numero2);

    // Mostrar en consola

    console.log(
        "Suma de datos:",
        numero1,
        "+",
        numero2,
        "es:",
        resultadoSuma
    );

    console.log(
        `Resta de datos con comilla inversa: ${numero1} - ${numero2} es: ${resultadoResta}`
    );

    console.log(
        `Multiplicación: ${numero1} × ${numero2} es: ${resultadoMultiplicacion}`
    );

    // Llamar funciones

    fnSalidaContenedorDivSuma(resultadoSuma);

    fnSalidaContenedorDivResta(
        numero1,
        numero2,
        resultadoResta
    );

    fnSalidaContenedorDivMultiplica(
        numero1,
        numero2,
        resultadoMultiplicacion
    );

}



function fnSalidaContenedorDivSuma(resultadoSuma) {

    document.getElementById("divSalidaSuma").textContent =
        "Resultado de la suma es: " + resultadoSuma;

}



function fnSalidaContenedorDivResta(numero1, numero2, resultadoResta) {

    document.querySelector(".divSalidaResta").textContent =
        `Al restar: ${numero1} - ${numero2} = ${resultadoResta}`;

}



function fnSalidaContenedorDivMultiplica(numero1, numero2, resultadoMultiplicacion) {

    document.querySelector(".divSalidaMultiplicacion").textContent =
        `Al multiplicar: ${numero1} × ${numero2} = ${resultadoMultiplicacion}`;

}