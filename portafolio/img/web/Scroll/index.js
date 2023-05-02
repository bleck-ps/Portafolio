const bham = document.getElementById('hamburguesas');
const bpizza = document.getElementById('pizzas');
const bbeb = document.getElementById('bebidas');
const bpostres = document.getElementById('postres');
const bextras = document.getElementById('extras');

var mham = document.getElementById('sham');
var mpizza = document.getElementById('spizza');
var mbeb = document.getElementById('sbeb');
var mpostres = document.getElementById('spostres');
var mextras = document.getElementById('sextras');

var menu = 0;

bham.addEventListener('click',function(){
    reset();
    mham.style.display = 'flex';
})
bpizza.addEventListener('click',function(){
    reset();
    mpizza.style.display = 'flex';
})
bbeb.addEventListener('click',function(){
    reset();
    mbeb.style.display = 'flex';
})
bpostres.addEventListener('click',function(){
    reset();
    mpostres.style.display = 'flex';
})
bextras.addEventListener('click',function(){
    reset();
    mextras.style.display = 'flex';
})

function reset() {
    mham.style.display = 'none';
    mpizza.style.display = 'none';
    mbeb.style.display = 'none';
    mpostres.style.display = 'none';
    mextras.style.display = 'none';
}