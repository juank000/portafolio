const inputs = document.querySelectorAll("input")
const inputxt = document.querySelectorAll("textarea")

let fieldName = document.getElementById('input-name')
let fieldEmail = document.getElementById('input-email')
let fieldAsunto = document.getElementById('input-asunto')
let fieldMssg = document.getElementById('input-msj')

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
    validate(input.target);
    });
});

inputxt.forEach((input) => {
    input.addEventListener("blur", (input) => {
    validate(input.target);
    });
});

/* ----------- */

function validate (input) {
    const inputType = input.dataset.type;

    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.classList.remove("textarea-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = " "
    } else {
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.classList.add("textarea-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = showMssg(inputType, input)
    }
}

const errorTypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const errorMssgs = {
    name: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "Nombre debe contener mínimo 4 caracteres y máximo 15"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío",
        patternMismatch: "Asunto debe contener entre 5 y 20 caracteres"
    },
    msj: {
        valueMissing: "El campo mensaje no puede estar vacío"
    }
}

function showMssg(inputType, input) {
    let mssg = ""
    errorTypes.forEach((error) => {
        if (input.validity[error]) {
            console.log(inputType, error)
            console.log(input.validity[error])
            console.log(errorMssgs[inputType][error])
            mssg = errorMssgs[inputType][error]
        }
    })
    return mssg
}

function reset() {
    fieldName.value = ''
    fieldEmail.value = ''
    fieldAsunto.value = ''
    fieldMssg.value = ''
}