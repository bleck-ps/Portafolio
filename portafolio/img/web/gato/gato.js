var caja1 = document.getElementById('caja1');
var caja2 = document.getElementById('caja2');
var caja3 = document.getElementById('caja3');
var caja4 = document.getElementById('caja4');
var caja5 = document.getElementById('caja5');
var caja6 = document.getElementById('caja6');
var caja7 = document.getElementById('caja7');
var caja8 = document.getElementById('caja8');
var caja9 = document.getElementById('caja9');
var scorexx = document.getElementById('scorex');
var scoreoo = document.getElementById('scoreo');
var scorex = 0;
var scoreo = 0;
var stat1 = 0;
var stat2 = 0;
var stat3 = 0;
var stat4 = 0;
var stat5 = 0;
var stat6 = 0;
var stat7 = 0;
var stat8 = 0;
var stat9 = 0;
var turno = 1;
var gana = 0;

function scaja1() {
	if(stat1 == 0) {
		stat1 = turno;
		if(turno == 1) {caja1.textContent = 'O'} else {caja1.textContent = 'X'}
		game();
		if (turno == 1) {turno = 2;} else {turno = 1;}
	}
}
function scaja2() {
	if(stat2 == 0) {
		stat2 = turno;
		if(turno == 1) {caja2.textContent = 'O'} else {caja2.textContent = 'X'}
		game();
		if (turno == 1) {turno = 2;} else {turno = 1;}
	}
}
function scaja3() {
	if(stat3 == 0) {
		stat3 = turno;
		if(turno == 1) {caja3.textContent = 'O'} else {caja3.textContent = 'X'}
		game();
		if (turno == 1) {turno = 2;} else {turno = 1;}
	}
}
function scaja4() {
	if(stat4 == 0) {
		stat4 = turno;
		if(turno == 1) {caja4.textContent = 'O'} else {caja4.textContent = 'X'}
		game();
		if (turno == 1) {turno = 2;} else {turno = 1;}
	}
}
function scaja5() {
	if(stat5 == 0) {
		stat5 = turno;
		if(turno == 1) {caja5.textContent = 'O'} else {caja5.textContent = 'X'}
		game();
		if (turno == 1) {turno = 2;} else {turno = 1;}
	}
}
function scaja6() {
	if(stat6 == 0) {
		stat6 = turno;
		if(turno == 1) {caja6.textContent = 'O'} else {caja6.textContent = 'X'}
		game();
		if (turno == 1) {turno = 2;} else {turno = 1;}
	}
}
function scaja7() {
	if(stat7 == 0) {
		stat7 = turno;
		if(turno == 1) {caja7.textContent = 'O'} else {caja7.textContent = 'X'}
		game();
		if (turno == 1) {turno = 2;} else {turno = 1;}
	}
}
function scaja8() {
	if(stat8 == 0) {
		stat8 = turno;
		if(turno == 1) {caja8.textContent = 'O'} else {caja8.textContent = 'X'}
		game();
		if (turno == 1) {turno = 2;} else {turno = 1;}
	}
}
function scaja9() {
	if(stat9 == 0) {
		stat9 = turno;
		if(turno == 1) {caja9.textContent = 'O'} else {caja9.textContent = 'X'}
		game();
		if (turno == 1) {turno = 2;} else {turno = 1;}
	}
}

function game() {
	if(stat1 == 1) {
		if (stat2 == 1) {
			if (stat3 == 1) {
				alert('Gana O');
				gana = 1;
			}
		}
	}
	if(stat1 == 2) {
		if (stat2 == 2) {
			if (stat3 == 2) {
				alert('Gana X');
				gana = 2;
			}
		}
	}
	if(stat4 == 1) {
		if (stat5 == 1) {
			if (stat6 == 1) {
				alert('Gana O');
				gana = 1;
			}
		}
	}
	if(stat4 == 2) {
		if (stat5 == 2) {
			if (stat6 == 2) {
				alert('Gana X');
				gana = 2;
			}
		}
	}
	if(stat7 == 1) {
		if (stat8 == 1) {
			if (stat9 == 1) {
				alert('Gana O');
				gana = 1;
			}
		}
	}
	if(stat7 == 2) {
		if (stat8 == 2) {
			if (stat9 == 2) {
				alert('Gana X');
				gana = 2;
			}
		}
	}if(stat1 == 1) {
		if (stat4 == 1) {
			if (stat7 == 1) {
				alert('Gana O');
				gana = 1;
			}
		}
	}
	if(stat1 == 2) {
		if (stat4 == 2) {
			if (stat7 == 2) {
				alert('Gana X');
				gana = 2;
			}
		}
	}
	if(stat2 == 1) {
		if (stat5 == 1) {
			if (stat8 == 1) {
				alert('Gana O');
				gana = 1;
			}
		}
	}
	if(stat2 == 2) {
		if (stat5 == 2) {
			if (stat8 == 2) {
				alert('Gana X');
				gana = 2;
			}
		}
	}if(stat3 == 1) {
		if (stat6 == 1) {
			if (stat9 == 1) {
				alert('Gana O');
				gana = 1;
			}
		}
	}
	if(stat3 == 2) {
		if (stat6 == 2) {
			if (stat9 == 2) {
				alert('Gana X');
				gana = 2;
			}
		}
	}
	if(stat1 == 1) {
		if (stat5 == 1) {
			if (stat9 == 1) {
				alert('Gana O');
				gana = 1;
			}
		}
	}
	if(stat1 == 2) {
		if (stat5 == 2) {
			if (stat9 == 2) {
				alert('Gana X');
				gana = 2;
			}
		}
	}
	if(stat3 == 1) {
		if (stat5 == 1) {
			if (stat7 == 1) {
				alert('Gana O');
				gana = 1;
			}
		}
	}
	if(stat3 == 2) {
		if (stat5 == 2) {
			if (stat7 == 2) {
				alert('Gana X');
				gana = 2;
			}
		}
	}
	if (gana == 1) {scoreo = scoreo + 1; scoreoo.textContent = scoreo; reset()}
	if(turno == 2) {turnos.textContent = 'O'} else {turnos.textContent = 'X'}
	if(gana == 2) {scorex = scorex + 1; scorexx.textContent = scorex; reset();}
}
function reset() {
	gana = 0;
	stat1 = 0;
	stat2 = 0;
	stat3 = 0;
	stat4 = 0;
	stat5 = 0;
	stat6 = 0;
	stat7 = 0;
	stat8 = 0;
	stat9 = 0;
	caja1.textContent = ' ';
	caja2.textContent = ' ';
	caja3.textContent = ' ';
	caja4.textContent = ' ';
	caja5.textContent = ' ';
	caja6.textContent = ' ';
	caja7.textContent = ' ';
	caja8.textContent = ' ';
	caja9.textContent = ' ';
}