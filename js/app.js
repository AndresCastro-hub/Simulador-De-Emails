
const btnEnviar = document.querySelector('#enviar')
const btnReset = document.querySelector('#resetBtn')
const formulario = document.querySelector('#enviar-mail')

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje')

const expresionRegular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


eventListeners()
function eventListeners(){
    document.addEventListener('DOMContentLoaded', initApp);

    email.addEventListener('blur', validarForm)
    asunto.addEventListener('blur', validarForm)
    mensaje.addEventListener('blur', validarForm)

    btnReset.addEventListener('click',reset)
    
    formulario.addEventListener('submit', enviarEmail)
}

function reset (e){
    e.preventDefault()
    formulario.reset()
}

function initApp() {
   btnEnviar.disabled = true;
   btnEnviar.classList.add('opacity-50')
}

function validarForm (e){

    if(e.target.value.length > 0 ){

        const error = document.querySelector('p.error')

        if(error){
            error.remove()
        }
        e.target.classList.remove('border', 'border-red-500');

        e.target.classList.add('border', 'border-blue-500')
    }else{
        e.target.classList.remove('border', 'border-blue-500');

        e.target.classList.add('border', 'border-red-400')

        llamarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){

        if(expresionRegular.test(e.target.value)){
            
            const error = document.querySelector('p.error')

            if(error){
                error.remove()
            }

            e.target.classList.remove('border', 'border-red-500');

            e.target.classList.add('border', 'border-blue-500')

        }else{
            e.target.classList.remove('border', 'border-blue-500');

            e.target.classList.add('border', 'border-red-400')

            llamarError('El Email no es valido')
        }
    
    }

    if(expresionRegular.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('opacity-50')
    }
}


function llamarError ( mensaje) {
    const mensajeDeError = document.createElement('p')

    mensajeDeError.textContent = mensaje

    mensajeDeError.classList.add('border', 'text-center', 'border-red-500', 'background-red', 'text-red-500' , 'p-5' , 'mt-5' , 'error')

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeDeError)
    }

}

function enviarEmail(e){
    
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex'

    setTimeout (() => {
        spinner.style.display = 'none'

        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envio correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-5' , 'bg-blue-500' , 'text-white' , 'font-bold')

        formulario.insertBefore(parrafo, spinner);

        setTimeout (() => {
            parrafo.remove()
            resetearForm()
        },5000)

    },3000);

    function resetearForm (){

        formulario.reset()
    
        initApp()
    }
}



