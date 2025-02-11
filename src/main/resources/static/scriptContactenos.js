var nombres = document.getElementById("Nombres")
var apellidos = document.getElementById("Apellidos")
var correo = document.getElementById("Correo")
var semestre = document.getElementById("Semestre")
var descripcion = document.getElementById("Descripcion")
var button = document.getElementById("button")

button.onclick = revisar;

function revisar(){
    if(nombres.value.length == 0){
        document.getElementById("error1_nombre").hidden = false
        nombres.style.backgroundColor = "red"
        console.log("entro 1")

    }
    if(nombres.value.length > 100){
        document.getElementById("error2_nombre").hidden = false
        nombres.style.backgroundColor = "red"
    }

    if(apellidos.value.length == 0){
        document.getElementById("error1_apellido").hidden = false
        apellidos.style.backgroundColor = "red"
        console.log("entro 2")

    }
    if(apellidos.value.length > 100){
        document.getElementById("error2_apellido").hidden = false
        apellidos.style.backgroundColor = "red"
    }
    
    if(correo.value.length == 0){
        document.getElementById("error1_correo").hidden = false
        correo.style.backgroundColor = "red"
        console.log("entro 3")

    }
    //falta agregar la verificacion de caracteres especiales
    if(!correo.value.includes("@") || !correo.value.includes(".")){
        document.getElementById("error2_correo").hidden = false
        correo.style.backgroundColor = "red"
    }

    if(semestre.value.length == 0){
        document.getElementById("error1_semestre").hidden = false
        semestre.style.backgroundColor = "red"
        console.log("entro 4")

    }
    if(semestre.value <=0 || semestre.value >16){
        document.getElementById("error2_semestre").hidden = false
        semestre.style.backgroundColor = "red"
    }

    if(descripcion.value.length == 0){
        document.getElementById("error1_descrip").hidden = false
        semestre.style.backgroundColor = "red"
        console.log("entro 5")

    }
    if(descripcion.value.length > 1000){
        document.getElementById("error2_descrip").hidden = false
        semestre.style.backgroundColor = "red"
    }
}