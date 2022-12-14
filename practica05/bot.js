var msj_bot = {
    saludo : "hola",
    despedida : "Adios",
    Preocupacion: "como estas",
    sorpresa: "¡Orale!"    
}

var arr_msj = ["Hola", "Adios", "¿Como estas?","¡Orale!"]

function test() {
    let mensajes = document.getElementById("msjs")
    //mensajes.innerHTML = arr_msj;
    //mensajes.innerHTML = msj_bot;
    mensajes.innerHTML = JSON.stringify(msj_bot);
    
}
function procesa() {
    let campo = document.getElementById("msj").value
    console.log(woz(campo))
    let mensajes = document.getElementById("msjs")
    mensajes.innerHTML = msj_bot[woz(campo)];
}
function woz(params) {
    if (params == "hola") {
        return "saludo";
    }if (params == "despedida") {
        return "Despedida";
    }if (params == "preocupacion") {
        return "como estas";
    }if (params == "sorpresa") {
        return "¡Orale!";
    }        
}