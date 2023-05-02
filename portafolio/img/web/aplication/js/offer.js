var buttonmenu = document.getElementById('menubutton');
var	menulateral = document.getElementById('menulateral');
var	shadow = document.getElementById('shadow');
var	idiomaesp = document.getElementById('espanol');
var	idiomaing = document.getElementById('english');
var idiomav = 1;
var	contactoid = document.getElementById('contactoid');
var	quienesid = document.getElementById('quienesid');


function menuactivate() {setTimeout(imenuunactivate, 200); function imenuunactivate(){menulateral.classList.toggle('activate')} ;}
buttonmenu.addEventListener('click', menuactivate);
function menuunactivate() {menulateral.classList.toggle('activate');}
shadow.addEventListener('click', menuunactivate);

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
 		contactoid.textContent = 'Contact';
 		quienesid.textContent = 'About us';
 	} else if(idiomav == 1) {
 		contactoid.textContent = 'Contacto';
 		quienesid.textContent = 'Quienes somos';
 	}
 }


