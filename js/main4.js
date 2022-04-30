setTimeout (()=>alert("tardo 3segundos"),3000);

let boton=document.getElementById('boton');
function enviar(){
alert("se ha enviado el mensaje")
}

setInterval(()=>{
let dia=document.getElementsByClassName('reloj')[0];
let tiempo=new Date();
let hora=tiempo.getHours();
let minutos=tiempo.getMinutes();
let segundos=tiempo.getSeconds();

dia.innerHTML=hora+":"+minutos+":"+segundos;


},1000);

let title=document.getElementById('titulo');
let tituloN=document.createElement('h1');

tituloN.innerHTML='FORMULARIO';
title.appendChild(tituloN)


let teclado=document.getElementById('teclaN');
teclado.addEventListener('keydown',function(e){

    console.log('estas presionando la tecla: ',e.key)
})
s

let email=document.querySelector('form');
email.addEventListener('submit',function(e){
    e.preventDefault();
    let mail=document.getElementById('correo').value;
    console.log(mail)
})

document.getElementById('form-boton');
function click(){
 alert('se envio el arhivo siuuuu')
}