/*------JUEGO ROMPECABEZAS------*/

function iniciar() {
    let imagenes= document.querySelectorAll('#cajaimagenes img');
    destino1= document.getElementById('dropZona1');
    destino2= document.getElementById('dropZona2');
    destino3= document.getElementById('dropZona3');

    for(let i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart',inicioTraslado, false);
        imagenes[i].addEventListener('dragend',finalTraslado, false);
    }
    
    destino1.addEventListener('dragenter', function(evento){evento.preventDefault();}, false);
    destino1.addEventListener('dragover', function(evento){evento.preventDefault();}, false);
    destino1.addEventListener('drop', soltarImagen1, false);

    destino2.addEventListener('dragenter', function(evento){evento.preventDefault();}, false);
    destino2.addEventListener('dragover', function(evento){evento.preventDefault();}, false);
    destino2.addEventListener('drop', soltarImagen2, false);
    
    destino3.addEventListener('dragenter', function(evento){evento.preventDefault();}, false);
    destino3.addEventListener('dragover', function(evento){evento.preventDefault();}, false);
    destino3.addEventListener('drop', soltarImagen3, false);
}

function inicioTraslado(evento){
    elemento=evento.target;
    evento.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

function finalTraslado(evento){
    elemento=evento.target;
    elemento.style.visibility= "hidden";
}

function soltarImagen1 (evento) {
    evento.preventDefault();
    let id= evento.dataTransfer.getData('Text');
if(id!="img4"){
    let src= document.getElementById(id).src;
    destino1.innerHTML='<img src="'+src+'" height="400px" width="275px">';
} else{
    destino1.innerHTML= 'la imagen no es admitida';
}        
}

function soltarImagen2 (evento) {
    evento.preventDefault();
    let id= evento.dataTransfer.getData('Text');
if(id!="img4"){
    let src= document.getElementById(id).src;
    destino2.innerHTML='<img src="'+src+'" height="400px" width="275px">';
} else{
    destino2.innerHTML= 'la imagen no es admitida';
}        
}

function soltarImagen3 (evento) {
    evento.preventDefault();
    let id= evento.dataTransfer.getData('Text');
if(id!="img4"){
    let src= document.getElementById(id).src;
    destino3.innerHTML='<img src="'+src+'" height="400px" width="275px">';
} else{
    destino3.innerHTML= 'la imagen no es admitida';
}        
}

function reinicio() {
    window.location.reload()
}

iniciar()

/*------MENU------*/
function toggleDarkLight() {
    let body = document.querySelector("body"); 
    body.classList.toggle("body-night");
};
