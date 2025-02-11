document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const nombres = document.getElementById("Nombres");
    const apellidos = document.getElementById("Apellidos");
    const correo = document.getElementById("Correo");
    const semestre = document.getElementById("Semestre");
    const descripcion = document.getElementById("Descripcion");

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const limits = {
        'Nombres': 100,
        'Apellidos': 100,
        'Correo': 100,
        'Descripcion': 500
    };

    function createCounters() {
        Object.keys(limits).forEach(fieldId => {
            const input = document.getElementById(fieldId);
            const counter = document.createElement('div');
            counter.className = 'char-counter';
            counter.id = `counter${fieldId}`;
            input.insertAdjacentElement('afterend', counter);
            
            input.addEventListener('input', () => {
                const maxLength = limits[fieldId];
                if (input.value.length > maxLength) {
                    input.value = input.value.slice(0, maxLength);
                }
                counter.textContent = `${input.value.length}/${maxLength}`;
                counter.classList.toggle('invalid', input.value.length >= maxLength);
            });
            
            counter.textContent = `${input.value.length}/${limits[fieldId]}`;
        });
    }

    function validarFormulario() {
        let valido = true;

        [nombres, apellidos, correo, semestre, descripcion].forEach(field => {
            field.classList.remove("error-input");
        });
        document.querySelectorAll('.error-message').forEach(error => error.hidden = true);

        if (!nombres.value.trim()) {
            showError('error1_nombre', nombres);
            valido = false;
        } else if (nombres.value.length > limits.Nombres) {
            showError('error2_nombre', nombres);
            valido = false;
        }

        if (!apellidos.value.trim()) {
            showError('error1_apellido', apellidos);
            valido = false;
        } else if (apellidos.value.length > limits.Apellidos) {
            showError('error2_apellido', apellidos);
            valido = false;
        }

        if (!correo.value.trim()) {
            showError('error1_correo', correo);
            valido = false;
        } else if (!emailRegex.test(correo.value.toUpperCase())) {
            showError('error2_correo', correo);
            valido = false;
        }

        if (!semestre.value.trim()) {
            showError('error1_semestre', semestre);
            valido = false;
        } else {
            const semestreNum = parseInt(semestre.value, 10);
            if (isNaN(semestreNum) || semestreNum < 0 || semestreNum > 16) {
                showError('error2_semestre', semestre);
                valido = false;
            }
        }

        if (!descripcion.value.trim()) {
            showError('error1_descrip', descripcion);
            valido = false;
        } else if (descripcion.value.length > limits.Descripcion) {
            showError('error2_descrip', descripcion);
            valido = false;
        }

        return valido;
    }

    function showError(errorId, field) {
        document.getElementById(errorId).hidden = false;
        field.classList.add("error-input");
    }

    form.addEventListener("submit", function(event) {
        if (!validarFormulario()) {
            event.preventDefault(); 
        }
    });

    createCounters();
});