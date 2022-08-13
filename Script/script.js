/*------VIDEO------*/

let video = document.querySelector('video');
let playBoton = document.querySelector("#play");
let pauseBoton = document.querySelector("#pause");

playBoton.addEventListener('click', ()=>{
    video.play()
});

pauseBoton.addEventListener('click', ()=>{
    video.pause()
});

