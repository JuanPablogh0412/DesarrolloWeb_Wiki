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

    }
    else if(nombres.value.length > 100){
        document.getElementById("error2_nombre").hidden = false
        nombres.style.backgroundColor = "red"
    }
}