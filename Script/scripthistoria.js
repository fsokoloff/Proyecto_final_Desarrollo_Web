/*------VIDEO------*/
let video = document.querySelector('video');
let playBoton = document.querySelector("#play");
let pauseBoton = document.querySelector("#pause");
let duracion = document.querySelector("#duracion");
let duracionTotal = document.querySelector("#duracionTotal");
video.ontimeupdate = tiempos;

playBoton.addEventListener('click', ()=>{
    video.play()
});

pauseBoton.addEventListener('click', ()=>{
    video.pause()
});

function tiempos() {
    duracionTotal.innerHTML = `${Math.floor(video.duration / 60)}:${Math.floor(video.duration % 60)}`;
    duracion.innerHTML = `${Math.floor(video.currentTime / 60)}:${Math.floor(video.currentTime % 60)}`;
    };

/*------MENU------*/
function toggleDarkLight() {
    let body = document.querySelector("body"); 
    body.classList.toggle("body-night");
};
