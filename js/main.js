const oscuro=document.getElementById('oscuro');
let clima=document.getElementById('clima');
let tema=document.getElementById('tema');
const claro=document.getElementById('claro');
let nube1=document.getElementById('nube1');
let nube2=document.getElementById('nube2');
let nube3=document.getElementById('nube3');
let nube4=document.getElementById('nube4');
let estrella1=document.getElementById('estrella1');
let estrella2=document.getElementById('estrella2');
let estrella3=document.getElementById('estrella3');
let estrella4=document.getElementById('estrella4');

function temaOscuro() {  
  tema.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/1518/1518052.png" alt="luna">';
  document.body.style.backgroundColor="black";
  clima.style.backgroundColor="white";
  oscuro.style.display="none";
  claro.style.display="block";
  estrella1.style.color ="yellow";
  estrella2.style.color ="yellow";
  estrella3.style.color ="yellow";
  estrella4.style.color ="yellow";
  nube1.style.backgroundColor="black";
  nube2.style.backgroundColor="black";
  nube3.style.backgroundColor="black";
  nube4.style.backgroundColor="black";
}
function temaClaro() {
   tema.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/6661/6661565.png" alt="sol">';
   document.body.style.backgroundColor="#3fc0e7b8";
  clima.style.backgroundColor="yellow";
  oscuro.style.display="block";
  claro.style.display="none";
}

function idiomaIngles(){
  let ingles=document.getElementById('tituloIngles');
  let soy=document.getElementById('soy');
  ingles.innerHTML='<input id="ingles" type="radio" name="account-type" checked onclick="idiomaIngles(this)"/> English';
  soy.innerHTML='Web/Java Developer';
  estrella1.innerHTML="Education";
  estrella2.innerHTML="Skills";
  estrella3.innerHTML="Projects";
  estrella4.innerHTML="Contact us";
}

function idiomaEspañol(){
  let español=document.getElementById('tituloEspañol');
  let soy=document.getElementById('soy');
  soy.innerHTML='Desarrollador Web/Java';
  español.innerHTML='<input id="español" type="radio" name="account-type" checked onclick="idiomaEspañol(this)"/> Español';
}
//window.addEventListener('load',cambiarTema);