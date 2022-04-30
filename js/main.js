document.querySelector('boton-form')
function boton(){
    alert('Se envio el formulario correctamente')
}

let creando=document.querySelector('p')
let titulo=document.createElement('p');

titulo.innerHTML='<strong>Formulario<strong>';
creando.appendChild(titulo);

let teclas=document.getElementById('nombre');
teclas.addEventListener('keydown',function(e){
    console.log('El usuario esta presionando la tecla: ',e.key)
})

let teclasDos=document.getElementById('apellido');
teclasDos.addEventListener('keydown',function(e){
    console.log('Estas presionando la tecla: ',e.key)
})

let email=document.querySelector('form');
email.addEventListener('submit',function(e){
    e.preventDefault();
    let mail=document.getElementById('correo');
    console.log(mail);
})

// ------------------------------------------------------------------

const checkbox =document.getElementById('activador');
checkbox.addEventListener('change',e=>{
    if (e.target.checked){
  console.log('Su solicitud es aceptada')
    }
    else{
        console.log('ACTIVE LA SOLICITUD POR FAVOR')
    }
})