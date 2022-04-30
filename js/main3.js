setTimeout(() =>alert('se acabo el tiempo transcurrido'),3000) 
// setInterval(()=>alert('cada un segundo'),1000)
    


let pratica=document.getElementById('boton');

function practica(){
    alert('enviando')
}
// ------------------------------------reloj 
setInterval(() => {
let reloj=document.getElementsByClassName("reloj")[0];
let tiempo=new Date();
let hora=tiempo.getHours()
let minutos=tiempo.getMinutes();
let segundos=tiempo.getSeconds();


reloj.innerHTML=hora+':'+ minutos+':'+segundos;
},1000);