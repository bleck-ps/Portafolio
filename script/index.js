const loadimg = document.getElementById('loadimg');
const loadmaster = document.getElementById('loadmaster');
const navcont = document.getElementById('navcont');
const navmenutxt = document.getElementById('navmenutxt');
const navint = document.getElementById('navint');
let loadframe = 0;


window.onload = function load() {
 loadimg.src = "img/fenix/fenix_" + loadframe + ".png";
 if(loadframe < 10) {
    loadframe++;
    setTimeout(load,30);
 } else {
    setTimeout(function(){
    loadmaster.style.opacity = "0";
    setTimeout(function(){
        loadmaster.style.transform = "translatey(-100%)";
    },400)
    },300)
 }
};

//navconfig

navmenutxt.addEventListener('click', function(){
    navmenutxt.style.display = "none";
    navcont.style.display = "flex";
    setTimeout(function(){
        navcont.style.fontSize = "26px";
    },10)
});


//contacto

const ghosty = document.getElementById('ghosty');
const contcont = document.getElementById('contcont');

function contup() {
    ghosty.style.display = "flex";
    contcont.style.display = "flex";
};
function contdo() {
    ghosty.style.display = "none";
    contcont.style.display = "none";
}
