const checkbox= document.getElementById('activador');
checkbox.addEventListener('change',()=>{
console.log('Datos aceptados')
})

const practica=document.getElementById('activadorDos');
practica.addEventListener('change',e=>{
    if(e.target.checked){
        console.log('solicitu aceptada')
    }

    else{
        console.log('active el boton')
    }
})

// -------------------------------------------------------------------------------

for(let i=0; i<80; i++){
    const nodo=document.createElement('input')
    document.body.appendChild(nodo)
}