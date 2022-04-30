let teclado=document.getElementById('nombre');
teclado.addEventListener('keydown',function(e){
    console.log("estas presionando la tecla: ",e.key)
})

let tecladoDOs=document.querySelector('form');
tecladoDOs.addEventListener('submit',function(e){
    e.preventDefault();
    let email=document.getElementById('contraseña').value;
    console.log(email);
});