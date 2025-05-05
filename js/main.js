function temaOscuro() {
    const oscuro=document.getElementById('oscuro');
    let clima=document.getElementById('clima');
    let tema=document.getElementById('tema');
    const claro=document.getElementById('claro');
    tema.innerHTML='<img src="https://cdn-icons-png.flaticon.com/512/1518/1518052.png" alt="luna">';
    document.body.style.backgroundColor="black";
    clima.style.backgroundColor="white";
    oscuro.style.display="none";
    claro.style.display="block";
}
function temaClaro() {
  const oscuro=document.getElementById('oscuro');
  let clima=document.getElementById('clima');
  let tema=document.getElementById('tema');
  const claro=document.getElementById('claro');
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
}

function idiomaEspañol(){
  let español=document.getElementById('tituloEspañol');
  let soy=document.getElementById('soy');
  soy.innerHTML='Desarrollador Web/Java';
  español.innerHTML='<input id="español" type="radio" name="account-type" checked onclick="idiomaEspañol(this)"/> Español';
}
//window.addEventListener('load',cambiarTema);