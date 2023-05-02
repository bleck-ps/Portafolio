var buttonmenu = document.getElementById('menubutton');
var	menulateral = document.getElementById('menulateral');
var	shadow = document.getElementById('shadow');
var	aeselect = document.getElementById('aeselect');
var  seleccionaero = aeselect.value;
var	delicia = document.getElementById('delicia');
var	gastro = document.getElementById('gastro');
var	cienaga = document.getElementById('cienaga');
var	lastabas = document.getElementById('lastabas');
var	michelob = document.getElementById('michelob');
var	modelocu = document.getElementById('modelocu');
var	stella = document.getElementById('stella');
var	urban = document.getElementById('urban');
var	tacos = document.getElementById('tacosfrontera');
var	txfd = document.getElementById('txfd');
var	novecento = document.getElementById('novecento');
var	idiomaesp = document.getElementById('espanol');
var	idiomaing = document.getElementById('english');
var idiomav = 1;
var	ofertas = document.getElementById('ofertas');
var	seleccionatu = document.getElementById('seleccionatu');
var	contactoid = document.getElementById('contactoid');
var	quienesid = document.getElementById('quienesid');
var	menuhe = document.getElementById('menuhe');

function menuactivate() {setTimeout(imenuunactivate, 200); function imenuunactivate(){menulateral.classList.toggle('activate')} ;}
buttonmenu.addEventListener('click', menuactivate);
function menuunactivate() {menulateral.classList.toggle('activate');}
shadow.addEventListener('click', menuunactivate);

function lanzador() {
	menuhe.style.height = 'auto';
	seleccionaero = aeselect.value;
	seleccionatu.style.display = 'none';
	if(seleccionaero == 'AI Ciudad de México') {
		reset();
		delicia.style.display = 'flex';
		gastro.style.display = 'flex';
		modelocu.style.display = 'flex';
		stella.style.display = 'flex';
		lastabas.style.display = 'flex';
		urban.style.display = 'flex';
	}
	if(seleccionaero == 'Monterrey') {
		reset();
		cienaga.style.display = 'flex';
		gastro.style.display = 'flex';
		michelob.style.display = 'flex';
		tacos.style.display = 'flex';
		txfd.style.display = 'flex';
		urban.style.display = 'flex';
	}
	if(seleccionaero == 'Guadalajara') {
		reset();
		delicia.style.display = 'flex';
		gastro.style.display = 'flex';
		cienaga.style.display = 'flex';
		urban.style.display = 'flex';
		novecento.style.display = 'flex';
	}
	if(seleccionaero == 'Culiacan') {
		reset();
		michelob.style.display = 'flex';
		cienaga.style.display = 'flex';
		menuhe.style.height = '60vh';
	}
}
aeselect.addEventListener('change', lanzador);

function reset() {
		cienaga.style.display = 'none';
		michelob.style.display = 'none';
		stella.style.display = 'none';
		tacos.style.display = 'none';
		delicia.style.display = 'none';
		gastro.style.display = 'none';
		modelocu.style.display = 'none';
		stella.style.display = 'none';
		lastabas.style.display = 'none';
		urban.style.display = 'none';
		txfd.style.display = 'none';
		novecento.style.display = 'none';
}

idiomaesp.addEventListener('click', idiomachesp)
idiomaing.addEventListener('click', idiomaching)

function idiomachesp() {
	idiomav = 1;
	idiomach();
}
function idiomaching() {
	idiomav = 2;
	idiomach();
}
 function idiomach() {
 	if (idiomav == 2) {
 		ofertas.textContent = 'Find our season promotions!';
 		seleccionatu.textContent = 'Select your airport';
 		contactoid.textContent = 'Contact';
 		quienesid.textContent = 'About us';
 	} else if(idiomav == 1) {
 		ofertas.textContent = 'Descubre nuestras ofertas de temporada!';
 		seleccionatu.textContent = 'Selecciona un aeropuerto';
 		contactoid.textContent = 'Contacto';
 		quienesid.textContent = 'Quienes somos';
 	}
 }


