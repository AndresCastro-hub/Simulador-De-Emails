//Variables

const btnEnviar = document.querySelector('#enviar')
const formulario = document.querySelector('#enviar-mail')

//Validacion de los campos

const email = document.querySelector('#email');

const asunto = document.querySelector('#asunto');

const mensaje = document.querySelector('#mensaje')


eventListeners()
function eventListeners(){
    document.addEventListener('DOMContentLoaded', initApp);

    email.addEventListener('blur', validarForm)
    asunto.addEventListener('blur', validarForm)
    mensaje.addEventListener('blur', validarForm)
}


function initApp() {
   btnEnviar.disabled = true;
   btnEnviar.classList.add('opacity-50')

}

function validarForm (e){
  if(e.target.value.length > 0 ){
        console.log('Hay algo')
  }else{
        e.target.classList.add('border', 'border-red-400')

        llamarError();
  }
}


function llamarError ( ) {
    const mensajeDeError = document.createElement('p')

    mensajeDeError.textContent = 'Debes llenar todos los campos.'

    mensajeDeError.classList.add('border', 'text-center', 'border-red-500', 'background-red', 'text-red-500' , 'p-5' , 'mt-5' , 'error')

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeDeError)
    }

    
}