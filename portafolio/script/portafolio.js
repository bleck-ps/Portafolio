const btndiseno = document.getElementById('btndiseno');
const btnlogos = document.getElementById('btnlogos');
const btn3d = document.getElementById('btn3d');
const btnvideos = document.getElementById('btnvideos');
const btnweb = document.getElementById('btnweb');


//secciones

const heroport = document.getElementById('heroport');
const disenodiv = document.getElementById('diseno');
const logosdiv = document.getElementById('logos');
const trede = document.getElementById('3d');
const videos = document.getElementById('videos');
const web = document.getElementById('web');
const portpant = document.getElementById('portpant');

//ventana emergente

const ventana = document.getElementById('ventana');
const ghost = document.getElementById('ghost');
const imagebox = document.getElementById('imagebox');

const ventanavid = document.getElementById('ventanavid');
const ghostvid = document.getElementById('ghostvid');
const videobox = document.getElementById('vidbox');

const ghostfull = document.getElementById('ghostfull');

//menu responsive

const menuresp = document.getElementById('menuresp');
const ghost2 = document.getElementById('ghost2');
const btnmenu = document.getElementById('btnmenu');



//listeners


btndiseno.addEventListener('click',disenoln);

function disenoln(){
    reset();
    btndiseno.style.color = "#b5f8ff";
    btndiseno.style.textDecoration = "underline";
    lanzar(1);
};
btnlogos.addEventListener('click',logosln);

function logosln(){
    reset();
    btnlogos.style.color = "#b5f8ff";
    btnlogos.style.textDecoration = "underline";
    lanzar(2);
};
btn3d.addEventListener('click',tdln);

function tdln(){
    reset();
    btn3d.style.color = "#b5f8ff";
    btn3d.style.textDecoration = "underline";
    lanzar(3);
};
btnvideos.addEventListener('click',videosln);

function videosln(){
    reset();
    btnvideos.style.color = "#b5f8ff";
    btnvideos.style.textDecoration = "underline";
    lanzar(4);
};
btnweb.addEventListener('click',webln);

function webln(){
    reset();
    btnweb.style.color = "#b5f8ff";
    btnweb.style.textDecoration = "underline";
    lanzar(5);
};



//lanzador

function reset() {
    ghostfull.style.display = "flex";
    setTimeout(function(){
        ghostfull.style.opacity = "0";
        setTimeout(function(){
            ghostfull.style.display = "none";
            ghostfull.style.opacity = "1";
        },500)
    },50);

    portpant.style.display = "flex";
    heroport.style.display = "none";
    disenodiv.style.display = "none";
    logosdiv.style.display = "none";
    trede.style.display = "none";
    videos.style.display = "none";
    web.style.display = "none";

    btn3d.style.color = "#fff";
    btn3d.style.textDecoration = "none";
    btndiseno.style.color = "#fff";
    btndiseno.style.textDecoration = "none";
    btnlogos.style.color = "#fff";
    btnlogos.style.textDecoration = "none";
    btnvideos.style.color = "#fff";
    btnvideos.style.textDecoration = "none";
    btnweb.style.color = "#fff";
    btnweb.style.textDecoration = "none";

    menuresp.style.display = "none";
};

function lanzar(seccion) {
    if(seccion == 1) {
        disenodiv.style.display = "flex";
    } else if(seccion == 2) {
        logosdiv.style.display = "flex";
    } else if(seccion == 3) {
        trede.style.display = "flex";
    } else if(seccion == 4) {
        videos.style.display = "flex";
    } else if(seccion == 5) {
        web.style.display = "flex";
    }
}



//venatana

ghost.addEventListener('click',function(){
    ventana.style.display = "none";
})
ghostvid.addEventListener('click',function(){
    ventanavid.style.display = "none";
    videobox.src = "undefined";
})

function lanzarimagen(idimage){
    ventana.style.display = "flex";
    if (idimage == 1) {
        imagebox.src = "img/diseno/libros/libros.jpg";
    } else if (idimage == 2) {
        imagebox.src = "img/diseno/bebidaperfecta/beb1.jpg";
    } else if (idimage == 3) {
        imagebox.src = "img/diseno/snack/snack1.jpg";
    } else if (idimage == 4) {
        imagebox.src = "img/diseno/drch/drch1.jpg";
    } else if (idimage == 5) {
        imagebox.src = "img/diseno/happy/happy1.jpg";
    } else if (idimage == 6) {
        imagebox.src = "img/diseno/librot/librot.jpeg";
    } else if (idimage == 7) {
        imagebox.src = "img/diseno/mdino/mdino.jpeg";
    } else if (idimage == 8) {
        imagebox.src = "img/diseno/montajemujer/mujer.jpeg";
    } else if (idimage == 9) {
        imagebox.src = "img/post/3d/frutas/frutas.jpg";
    } else if (idimage == 10) {
        imagebox.src = "img/post/3d/casanavidad/casanavidad.jpg";
    } else if (idimage == 11) {
        imagebox.src = "img/post/3d/escaleras/escaleras.jpg";
    } else if (idimage == 12) {
        imagebox.src = "img/post/3d/hallowen/hallowen-minico.jpg";
    } else if (idimage == 13) {
        imagebox.src = "img/post/3d/ofrenda/ofrenda.jpg";
    } else if (idimage == 14) {
        imagebox.src = "img/videos/terror/ico.jpg";
    }
}

function lanzarvideo(idvideo) {
    ventanavid.style.display = "flex";
    if (idvideo == 15) {
        videobox.src = "img/videos/happye/hp.mp4";
    } else if (idvideo == 16) {
        videobox.src = "img/videos/14feb/14feb.mp4";
    } else if (idvideo == 17) {
        videobox.src = "img/videos/2023/20223.mp4";
    } else if (idvideo == 18) {
        videobox.src = "img/videos/fiesta/winter.mp4";
    } else if (idvideo == 19) {
        videobox.src = "img/videos/lexin/promo.mp4";
    } else if (idvideo == 20) {
        videobox.src = "img/videos/mimosa/mimosa.mp4";
    } else if (idvideo == 21) {
        videobox.src = "img/videos/navidad/navidad.mp4";
    } else if (idvideo == 22) {
        videobox.src = "img/videos/stk/stk.mp4";
    } else if (idvideo == 12) {
        videobox.src = "img/post/3d/hallowen/hallowen.mp4";
    } else if (idvideo == 14) {
        videobox.src = "img/videos/terror/terror.mp4";
    }
}

heroport.style.display = "flex";
disenodiv.style.display = "none";
logosdiv.style.display = "none";
trede.style.display = "none";
videos.style.display = "none";
web.style.display = "none";



//responsive

let wit = window.innerWidth;
console.log(wit);

//menu
ghost2.addEventListener('click', function(){
    menuresp.style.display = "none";
})
btnmenu.addEventListener('click', function(){
    menuresp.style.display = "flex";
})