document.getElementById("button").addEventListener("click", function() {
    validarCampo("Pruebas", "error1_pruebas", "error2_pruebas", 100);
    validarCampo("Frontend", "error1_frontend", "error2_frontend", 100);
    validarCampo("Backend", "error1_backend", "error2_backend", 100);
    validarCampo("Versiones", "error1_versiones", "error2_versiones", 50);
});

function validarCampo(idCampo, idError1, idError2, maxLength) {
    let campo = document.getElementById(idCampo);
    let error1 = document.getElementById(idError1);
    let error2 = document.getElementById(idError2);
    
    if (campo.value.trim() === "") {
        error1.hidden = false;
        error2.hidden = true;
    } else if (campo.value.length > maxLength) {
        error1.hidden = true;
        error2.hidden = false;
    } else {
        error1.hidden = true;
        error2.hidden = true;
    }
}
