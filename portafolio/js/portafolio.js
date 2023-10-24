//Elementos para el filtro
const diseno = document.getElementById('diseno');
const web = document.getElementById('web');
const video = document.getElementById('video');
const tred = document.getElementById('tred');
const equis = document.getElementById('equis');

const eldiseno = document.getElementsByClassName('diseno');
let arrayeldiseno = Array.from(eldiseno);
const elweb = document.getElementsByClassName('web');
let arrayelweb = Array.from(elweb);
const elvideo = document.getElementsByClassName('video');
let arrayelvideo = Array.from(elvideo);
const eltred = document.getElementsByClassName('treD');
let arrayeltred = Array.from(eltred);

let cards = document.getElementsByClassName('card');
let arraycards = Array.from(cards);

let stat = 0;
let reelstat = 0;
let playerstat = 0;
let arrowcase = 0;


//Elementos del player
const player = document.getElementById('player');
const playershadow = document.getElementById('playershadow');
const playercont = document.getElementById('playercont');
const playervidcont = document.getElementById('playervidcont');
const showimg = document.getElementById('showimg');
const showvid = document.getElementById('showvid');
let showimgheight = showimg.offsetHeight;
let showimgwidth = showimg.offsetWidth;

const shadowredir = document.getElementById('shadowredir');

playershadow.addEventListener('click',function(){
    player.style.display = "none";
    playervidcont.style.display = "none";
    showimg.src = "";
    showvid.src = "";
    endarrows();
    playerstat = 0;
})

//controls
const controls = document.getElementById('controls');
const arrowup = document.getElementById('arrowup');
const arrowdown = document.getElementById('arrowdown');



//loadimage
window.onload = function(){
    setTimeout(function(){
    shadowredir.style.opacity = "0";
    setTimeout(function(){
        shadowredir.style.display = "none";
    },1000)
},500)
}



//asignador de src

function startwin(id){
    if(id < 500){
        console.log('img')
        playercont.style.display = "flex";
        playervidcont.style.display = "none";


        if (id == 001){
            showimg.src = "img/diseno/mdino/mdino.jpeg";
            player.style.display = "flex";
            showimg.onload = function(){
                if(playerstat == 0) {
                    playerstat = 1;
                    resizecont();
                }
            }
        }
        if (id == 002){
            showimg.src = "img/3d/escaleras/escaleras.jpg";
            player.style.display = "flex";
            showimg.onload = function(){
                if(playerstat == 0) {
                    playerstat = 1;
                    resizecont();
                }
            }
        }
        if (id == 003){
            showimg.src = "img/diseno/snack/snack1.jpg";
            player.style.display = "flex";
            showimg.onload = function(){
                if(playerstat == 0) {
                    playerstat = 1;
                    resizecont();
                    startarrows();
                    reelstat = 1;
                }
            }
        }
        if (id == 004){
            showimg.src = "img/diseno/librot/librot.jpeg";
            player.style.display = "flex";
            showimg.onload = function(){
                if(playerstat == 0) {
                    playerstat = 1;
                    resizecont();
                }
            }
        }
        if (id == 005){
            showimg.src = "img/3d/frutas/frutas.jpg";
            player.style.display = "flex";
            showimg.onload = function(){
                if(playerstat == 0) {
                    playerstat = 1;
                    resizecont();
                    startarrows();
                    reelstat = 10;
                }
            }
        }
        if (id == 006){
            showimg.src = "img/diseno/montajemujer/mujer.jpeg";
            player.style.display = "flex";
            showimg.onload = function(){
                if(playerstat == 0) {
                    playerstat = 1;
                    resizecont();
                }
            }
        }
        if (id == 007){
            showimg.src = "img/3d/casanavidad/casanavidad.jpg";
            player.style.display = "flex";
            showimg.onload = function(){
                if(playerstat == 0) {
                    playerstat = 1;
                    resizecont();
                }
            }
        }
        if (id == 010){
            showimg.src = "img/diseno/drch/drch1.jpg";
            player.style.display = "flex";
            showimg.onload = function(){
                if(playerstat == 0) {
                    playerstat = 1;
                    resizecont();
                }
            }
        }
        if (id == 011){
            showimg.src = "img/diseno/bebidaperfecta/beb1.jpg";
            player.style.display = "flex";
            showimg.onload = function(){
                if(playerstat == 0) {
                    playerstat = 1;
                    resizecont();
                    startarrows();
                    reelstat = 20;
                }
            }
        }
        if (id == 012){
            showimg.src = "img/3d/ofrenda/ofrenda.jpg";
            player.style.display = "flex";
            showimg.onload = function(){
                if(playerstat == 0) {
                    playerstat = 1;
                    resizecont();
                }
            }
        }
        if (id == 013){
            showimg.src = "img/diseno/libros/libros.jpg";
            player.style.display = "flex";
            showimg.onload = function(){
                if(playerstat == 0) {
                    playerstat = 1;
                    resizecont();
                    startarrows();
                    reelstat = 30;
                }
            }
        }



    }
    if(id > 500){
        console.log('vid')
        playercont.style.display = "none";
        playervidcont.style.display = "flex";


        if (id == 501){
            showvid.src = "img/videos/lexin/promo.mp4";
            player.style.display = "flex";
        }

        if (id == 502){
            showvid.src = "img/videos/14feb/14feb.mp4";
            player.style.display = "flex";
        }
        if (id == 503){
            showvid.src = "img/3d/hallowen/hallowen.mp4";
            player.style.display = "flex";
        }
        if (id == 504){
            showvid.src = "img/videos/happye/hp.mp4";
            player.style.display = "flex";
        }
        if (id == 505){
            showvid.src = "img/videos/2023/20223.mp4";
            player.style.display = "flex";
        }
        if (id == 506){
            showvid.src = "img/videos/terror/terror.mp4";
            player.style.display = "flex";
        }
        if (id == 507){
            showvid.src = "img/videos/navidad/navidad.mp4";
            player.style.display = "flex";
        }
        if (id == 508){
            showvid.src = "img/videos/fiesta/winter.mp4";
            player.style.display = "flex";
        }
        if (id == 509){
            showvid.src = "img/videos/stk/stk.mp4";
            player.style.display = "flex";
        }
        if (id == 510){
            showvid.src = "img/videos/mimosa/mimosa.mp4";
            player.style.display = "flex";
        }
        if (id == 511){
            showvid.src = "img/videos/areases/ReelAreasEs.mp4";
            player.style.display = "flex";
        }

    }
}

function resizecont() {
    if (window.innerWidth >= window.innerHeight){
        showimgheight = document.getElementById('showimg').offsetHeight;
        showimgwidth = document.getElementById('showimg').offsetWidth;
        if (showimgwidth > showimgheight){
            console.log('max');
            showimg.style.width = "100%";
            showimg.style.height = "auto";
            playercont.style.width = "80vw";
            playercont.style.height = "auto";
        } else if (showimgwidth <= showimgheight){
            console.log('min');
            showimg.style.width = "auto";
            showimg.style.height = "100%";
            playercont.style.height = "80vh";
            playercont.style.width = showimgwidth + "px" ;
        }
    }
    if (window.innerWidth < window.innerHeight){
        showimgheight = document.getElementById('showimg').offsetHeight;
        showimgwidth = document.getElementById('showimg').offsetWidth;
            console.log('mb-min');
            playercont.style.height = "auto";
            playercont.style.width = "80vw" ;
            showimg.style.width = "100%";
            showimg.style.height = "auto";
    }
}

function startarrows() {
    controls.style.display = "flex";
    setTimeout(function(){
        arrowup.style.transform = "scale(1)";
        arrowup.style.transform = "rotate(90deg)";
        arrowdown.style.transform = "scale(1)";
        arrowdown.style.transform = "rotate(270deg)";
    },50)
}
function endarrows() {
    arrowup.style.transform = "scale(0)";
    arrowdown.style.transform = "scale(0)";
    setTimeout(function(){
        controls.style.display = "flex";
    },500)
}
arrowup.addEventListener('click', function(){
    if(reelstat == 2){
        reelstat = 1;
        showimg.src = "img/diseno/snack/snack1.jpg";
    }
    if(reelstat == 3){
        reelstat = 2;
        showimg.src = "img/diseno/snack/snack2.png";
    }
    if(reelstat == 4){
        reelstat = 3;
        showimg.src = "img/diseno/snack/snack3.png";
    }
    if(reelstat == 5){
        reelstat = 4;
        showimg.src = "img/diseno/snack/snack4.png";
    }
    if(reelstat == 11){
        reelstat = 10;
        showimg.src = "img/3d/frutas/frutas.jpg";
    }
    if(reelstat == 12){
        reelstat = 11;
        showimg.src = "img/3d/frutas/frutas-02.jpg";
    }
    if(reelstat == 13){
        reelstat = 12;
        showimg.src = "img/3d/frutas/frutas-03.jpg";
    }
    if(reelstat == 13){
        reelstat = 12;
        showimg.src = "img/3d/frutas/frutas-03.jpg";
    }
    if(reelstat == 14){
        reelstat = 13;
        showimg.src = "img/3d/frutas/frutas-04.jpg";
    }
    if(reelstat == 21){
        reelstat = 20;
        showimg.src = "img/diseno/bebidaperfecta/beb1.jpg";
    }
    if(reelstat == 31){
        reelstat = 30;
        showimg.src = "img/diseno/libros/libros.jpg";
    }
})
arrowdown.addEventListener('click', function(){
    if(reelstat == 30){
        reelstat = 31;
        showimg.src = "img/diseno/libros/libros2.png";
    }
    if(reelstat == 20){
        reelstat = 21;
        showimg.src = "img/diseno/bebidaperfecta/beb2.png";
    }
    if(reelstat == 13){
        reelstat = 14;
        showimg.src = "img/3d/frutas/frutas-05.jpg";
    }
    if(reelstat == 12){
        reelstat = 13;
        showimg.src = "img/3d/frutas/frutas-04.jpg";
    }
    if(reelstat == 11){
        reelstat = 12;
        showimg.src = "img/3d/frutas/frutas-03.jpg";
    }
    if(reelstat == 10){
        reelstat = 11;
        showimg.src = "img/3d/frutas/frutas-02.jpg";
    }
    if(reelstat == 4){
        reelstat = 5;
        showimg.src = "img/diseno/snack/snack5.png";
    }
    if(reelstat == 3){
        reelstat = 4;
        showimg.src = "img/diseno/snack/snack4.png";
    }
    if(reelstat == 2){
        reelstat = 3;
        showimg.src = "img/diseno/snack/snack3.png";
    }
    if(reelstat == 1){
        reelstat = 2;
        showimg.src = "img/diseno/snack/snack2.png";
    }
})
















diseno.addEventListener('click', function(){
    equis.style.display = "flex";
    diseno.style.background = "#ffa41a";
    web.style.background = "#bb52ff";
    video.style.background = "#bb52ff";
    tred.style.background = "#bb52ff";
    
    arraycards.forEach(function(card) {
        card.style.display = "none";
        stat ++;
        mostrardiseno();
      });
    function mostrardiseno(){
        if(stat == arraycards.length){
            console.log('limpio//diseño');
            stat = 0;
            arrayeldiseno.forEach(function(disenos) {
                disenos.style.display = "flex";
              });
        }
    }
})
web.addEventListener('click', function(){
    equis.style.display = "flex";
    diseno.style.background = "#bb52ff";
    web.style.background = "#ffa41a";
    video.style.background = "#bb52ff";
    tred.style.background = "#bb52ff";
    
    arraycards.forEach(function(card) {
        card.style.display = "none";
        stat ++;
        mostrarweb();
      });
    function mostrarweb(){
        if(stat == arraycards.length){
            console.log('limpio//web');
            stat = 0;
            arrayelweb.forEach(function(webs) {
                webs.style.display = "flex";
              });
        }
    }
})
video.addEventListener('click', function(){
    equis.style.display = "flex";
    diseno.style.background = "#bb52ff";
    web.style.background = "#bb52ff";
    video.style.background = "#ffa41a";
    tred.style.background = "#bb52ff";
    
    arraycards.forEach(function(card) {
        card.style.display = "none";
        stat ++;
        mostrarvideo();
      });
    function mostrarvideo(){
        if(stat == arraycards.length){
            console.log('limpio//videos');
            stat = 0;
            arrayelvideo.forEach(function(videos) {
                videos.style.display = "flex";
              });
        }
    }
})
tred.addEventListener('click', function(){
    equis.style.display = "flex";
    diseno.style.background = "#bb52ff";
    web.style.background = "#bb52ff";
    video.style.background = "#bb52ff";
    tred.style.background = "#ffa41a";
    
    arraycards.forEach(function(card) {
        card.style.display = "none";
        stat ++;
        mostrartred();
      });
    function mostrartred(){
        if(stat == arraycards.length){
            console.log('limpio//TresD');
            stat = 0;
            arrayeltred.forEach(function(treds) {
                treds.style.display = "flex";
              });
        }
    }
})
equis.addEventListener('click', function(){
    equis.style.transform = "scale(0)";
    setTimeout(function(){
        equis.style.display = "none";
        equis.style.transform = "scale(1)";
    },500)
    diseno.style.background = "#bb52ff";
    web.style.background = "#bb52ff";
    video.style.background = "#bb52ff";
    tred.style.background = "#bb52ff";
    
    arraycards.forEach(function(card) {
        card.style.display = "flex";
      });
})



function redirect(idre){
    shadowredir.style.display = "flex";
    setTimeout(function(){
        shadowredir.style.opacity = "1";
        setTimeout(function(){
            if(idre == 001){
                shadowredir.style.display = "none";
                shadowredir.style.opacity = "0";
                window.location.href = "https://bleck-ps.github.io/Plataforma/";
            }
            if(idre == 002){
                shadowredir.style.display = "none";
                shadowredir.style.opacity = "0";
                window.location.href = "https://bleck-ps.github.io/MenuTest";
            }
            if(idre == 003){
                shadowredir.style.display = "none";
                shadowredir.style.opacity = "0";
                window.location.href = "https://areasmex.com/TacosFrontera/TIJ/Esp/";
            }
            if(idre == 004){
                shadowredir.style.display = "none";
                shadowredir.style.opacity = "0";
                window.location.href = "https://bleck-ps.github.io/betabeta10/";
            }
            if(idre == 005){
                shadowredir.style.display = "none";
                shadowredir.style.opacity = "0";
                window.location.href = "https://bleck-ps.github.io/CarGame/";
            }
            if(idre == 006){
                shadowredir.style.display = "none";
                shadowredir.style.opacity = "0";
                window.location.href = "https://bleck-ps.github.io/TicTacToe1/";
            }
        },1100)
    },50)
}