var posicion = 2;
var cajas1 = document.getElementsByClassName('1');
var cajas2 = document.getElementsByClassName('2');
var cajas3 = document.getElementsByClassName('3');
var botones = document.getElementsByClassName('btn');
var scorenumero = document.getElementById('scoree');
var highscore = document.getElementById('high');
var highnum = highscore.textContent;
var score = 0;
var speed = 2000;
var loser = 0;
var select = 0;
speedbox = 500;

function start() {
	speed = 2000;
	speedbox = 500;
	loser = 0;
	score = 0;
	scorenumero.textContent = score;
	lanzar()
}

function posicion1() {posicion = 1;}
function posicion2() {posicion = 2;}
function posicion3() {posicion = 3;}

var lanzador = document.getElementById('lanzador');
lanzador.addEventListener('click', lanzar);

function lanzar() {
	if(speed > 1){speed = speed - 50;}
	if (speedbox > 160) {speedbox = speedbox - 20 ;}
	function asign(){return Math.floor((Math.random() * (3)) + 1);}
	var select = asign();
	if (loser < 1) {
		if (select == 1) {
			setTimeout(wave11, speed)
		}
		if (select == 2) {
			setTimeout(wave21, speed)
		}
		if (select == 3) {
			setTimeout(wave31, speed)
		}
	}
}

// cajas1[0].className = 'caja 1 dn';
function wave11() {
	cajas1[0].className = 'caja 1 dn';
	setTimeout(wave12,speedbox)
	function wave12() {
		cajas1[0].className = 'caja 1';
		cajas1[1].className = 'caja 1 dn';
		setTimeout(wave13,speedbox)
		function wave13() {
			cajas1[1].className = 'caja 1';
			cajas1[2].className = 'caja 1 dn';
				setTimeout(wave14,speedbox)
				function wave14() {
					cajas1[2].className = 'caja 1';
					cajas1[3].className = 'caja 1 dn';
					setTimeout(hit1,speedbox)
					function hit1(){
					cajas1[3].className = 'caja 1';
					if(posicion == 1) {
						alert('Perdiste');
						loser = 1;
						if (score > highnum) {highscore.textContent = score;}
						lanzador.addEventListener('click', lanzar);
					} else {
						score = score + 1;
						scorenumero.textContent = score;
						lanzar();
					}
				}
			}
		}
	}
}
function wave21() {
	cajas2[0].className = 'caja 2 dn';
	setTimeout(wave22,speedbox)
	function wave22() {
		cajas2[0].className = 'caja 2';
		cajas2[1].className = 'caja 2 dn';
		setTimeout(wave23,speedbox)
		function wave23() {
			cajas2[1].className = 'caja 2';
			cajas2[2].className = 'caja 2 dn';
			setTimeout(wave24,speedbox)
			function wave24() {
				cajas2[2].className = 'caja 2';
				cajas2[3].className = 'caja 2 dn';
				setTimeout(hit2,speedbox)
				function hit2(){
					cajas2[3].className = 'caja 2';
					if(posicion == 2) {
						alert('Perdiste');
						loser = 1;
						if (score > highnum) {highscore.textContent = score;}
						lanzador.addEventListener('click', lanzar);
						} else {
						score = score + 1;
						scorenumero.textContent = score;
						lanzar();
					}
				}
			}
		}
	}
}
function wave31() {
	cajas3[0].className = 'caja 3 dn';
	setTimeout(wave32,speedbox)
	function wave32() {
		cajas3[0].className = 'caja 3';
		cajas3[1].className = 'caja 3 dn';
		setTimeout(wave33,speedbox)
		function wave33() {
			cajas3[1].className = 'caja 3';
			cajas3[2].className = 'caja 3 dn';
			setTimeout(wave34,speedbox)
			function wave34() {
				cajas3[2].className = 'caja 3';
				cajas3[3].className = 'caja 3 dn';
				setTimeout(hit3,speedbox)
				function hit3(){
					cajas3[3].className = 'caja 3';
					if(posicion == 3) {
						alert('Perdiste');
						loser = 1;
						if (score > highnum) {highscore.textContent = score;}
						lanzador.addEventListener('click', lanzar);
						} else {
						score = score + 1;
						scorenumero.textContent = score;
						lanzar();
					}
				}
			}
		}
	}
}

function movimiento(event) {
	if(event.keyCode == '37') {
		if(posicion == 1) {
			posicion = 1
		} else {
			posicion = posicion - 1;
		}
	}
	if(event.keyCode == '39') {
		if(posicion == 3) {
			posicion = 3
		} else {
			posicion = posicion + 1;
		}
	}
	if(posicion == 1){
		botones[0].className = 'btn sl'
	} else {
		botones[0].className = 'btn'
	}
	if(posicion == 2){
		botones[1].className = 'btn sl'
	} else {
		botones[1].className = 'btn'
	}
	if(posicion == 3){
		botones[2].className = 'btn sl'
	} else {
		botones[2].className = 'btn'
	}
}

window.onkeyup = movimiento;