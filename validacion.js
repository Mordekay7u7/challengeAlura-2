//Haz tú validación en javascript acá
const inputs = document.querySelectorAll("input");

inputs.forEach( (input) =>{
    input.addEventListener('blur', (input) =>{
        validadar(input.target)
    })
})

function validadar(input){
    const tipoDeInput = input.dataset.tipo
  
    if(input.validity.valid){
        input.parentElement.classList.remove("error__campo");
        input.parentElement.querySelector(".mensaje__error").innerHTML = "" ;
    }else{
        input.parentElement.classList.add("error__campo");        
        input.parentElement.querySelector(".mensaje__error").innerHTML = mostrarMensajeDeError(tipoDeInput, input) ;
    }
}


const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajesDeError ={
    nombre:{
        valueMissing: "El campo nombre no puede estar vacio"
    },
    email:{
        valueMissing: "El campo email no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    asunto:{
        valueMissing: "El campo no puede estar vacio",
        patternMismatch:"El "
    },
}

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = ""
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            console.log(input.validity[error])
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return  mensaje  
}
function select(){
    console.log("test");
}