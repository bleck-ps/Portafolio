//backinicio
const backherocont = document.getElementById('backherocont');
const backherocont2 = document.getElementById('backherocont2');


//imagenes inicio
const img11 = document.getElementById('img11');
const img21 = document.getElementById('img21');
const img31 = document.getElementById('img31');
const img41 = document.getElementById('img41');
const img12 = document.getElementById('img12');
const img22 = document.getElementById('img22');
const img32 = document.getElementById('img32');
const img42 = document.getElementById('img42');
const img13 = document.getElementById('img13');
const img23 = document.getElementById('img23');
const img33 = document.getElementById('img33');
const img43 = document.getElementById('img43');

const imgcont1 = document.getElementById('imgcont1');
const imgcont2 = document.getElementById('imgcont2');
const imgcont3 = document.getElementById('imgcont3');

const texthero = document.getElementById('texthero');

const btnstart = document.getElementById('btnstart');
const shadowstart = document.getElementById('shadowstart');

const inicio = document.getElementById('inicio');

let mywidth = window.innerWidth;
let myheight = window.innerHeight;

console.log(mywidth + "px");
console.log(myheight + "px")


if (mywidth > myheight) {
    setback(1);
} else if (myheight >= mywidth) {
    setback(2);
}


function setback(position){
 if(position == 1){
    console.log("Horizontal");
    backherocont2.style.display = "flex";
 }else if(position == 2){
    console.log("Vertical");
    backherocont.style.display = "flex";
 }
}

texthero.style.transition = "1s ease"
setTimeout(rotate1,3000)



function rotate1(){
    resethero();
    text1();
    imgcont1.style.transform = "rotate(-360deg)";
    img41.style.opacity = "0";
    setTimeout(function(){
        imgcont2.style.transform = "rotate(-360deg)";
        img42.style.opacity = "0";
        setTimeout(function(){
            imgcont3.style.transform = "rotate(-360deg)";
            img43.style.opacity = "0";
            texthero.textContent = "DISEÑO GRÁFICO";
            texthero.style.opacity = 1;
            setTimeout(rotate2,3000);
        },200)
    },200)
}
function rotate2(){
    text2();
    imgcont1.style.transform = "rotate(0deg)";
    img31.style.opacity = "0";
    setTimeout(function(){
        imgcont2.style.transform = "rotate(0deg)";
        img32.style.opacity = "0";
        setTimeout(function(){
            imgcont3.style.transform = "rotate(0deg)";
            img33.style.opacity = "0";
            texthero.textContent = "DESARROLLO WEB";
            texthero.style.opacity = 1;
            setTimeout(rotate3,3000);
        },200)
    },200)
}
function rotate3(){
    text3();
    imgcont1.style.transform = "rotate(-360deg)";
    img21.style.opacity = "0";
    setTimeout(function(){
        imgcont2.style.transform = "rotate(-360deg)";
        img22.style.opacity = "0";
        setTimeout(function(){
            imgcont3.style.transform = "rotate(-360deg)";
            img23.style.opacity = "0";
            texthero.textContent = "MOTION GRAPHICS";
            texthero.style.opacity = 1;
            setTimeout(rotate4,3000);
        },200)
    },200)
}
function rotate4(){
    text4();
    imgcont1.style.transform = "rotate(0deg)";
    img41.style.opacity = "1";
    setTimeout(function(){
        imgcont2.style.transform = "rotate(0deg)";
        img42.style.opacity = "1";
        setTimeout(function(){
            imgcont3.style.transform = "rotate(0deg)";
            img43.style.opacity = "1";
            texthero.textContent = "BLECK DESIGN";
            texthero.style.opacity = 1;
            setTimeout(rotate1,3000);
        },200)
    },200)
}
function resethero(){
    img31.style.opacity = "1";
    img32.style.opacity = "1";
    img33.style.opacity = "1";
    img21.style.opacity = "1";
    img22.style.opacity = "1";
    img23.style.opacity = "1";
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function text1(){
    texthero.textContent = "BLECK DESI";
    await esperar(50);
    texthero.textContent = "BLECK DE";
    await esperar(50);
    texthero.textContent = "BLECK";
    await esperar(50);
    texthero.textContent = "BLE";
    await esperar(50);
    texthero.style.opacity = 0;
    texthero.textContent = "B";
    await esperar(50);
    texthero.textContent = "";
}
async function text2(){
    texthero.textContent = "DISEÑO GRÁF";
    await esperar(50);
    texthero.textContent = "DISEÑO GR";
    await esperar(50);
    texthero.textContent = "DISEÑO";
    await esperar(50);
    texthero.textContent = "DISE";
    await esperar(50);
    texthero.textContent = "DI";
    await esperar(50);
    texthero.style.opacity = 0;
    texthero.textContent = "D";
    await esperar(50);
    texthero.textContent = "";
}
async function text3(){
    texthero.textContent = "DESARROLLO W";
    await esperar(50);
    texthero.textContent = "DESARROLLO";
    await esperar(50);
    texthero.textContent = "DESARROL";
    await esperar(50);
    texthero.textContent = "DESAR";
    await esperar(50);
    texthero.textContent = "DES";
    await esperar(50);
    texthero.style.opacity = 0;
    texthero.textContent = "D";
    await esperar(50);
    texthero.textContent = "";
}
async function text4(){
    texthero.textContent = "MOTION GRAPH";
    await esperar(50);
    texthero.textContent = "MOTION GR";
    await esperar(50);
    texthero.textContent = "MOTION";
    await esperar(50);
    texthero.textContent = "MOTI";
    await esperar(50);
    texthero.textContent = "MO";
    await esperar(50);
    texthero.style.opacity = 0;
    texthero.textContent = "D";
    await esperar(50);
    texthero.textContent = "";
}

btnstart.addEventListener('click',start);

function start(){
    btnstart.style.opacity = "0";
    shadowstart.style.top = "0px";
    setTimeout(function(){
        window.location.href = "portafolio/portafolio.html";
    },1100)
}