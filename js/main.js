function cambiarTema(boton) {
    const tema = boton.value;
    const botonPrincipal = document.querySelector('#tema > button');
    if (tema === "oscuro") {
      botonPrincipal.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/1518/1518052.png" alt="luna">';
      botonPrincipal.value = "oscuro";
    } else {
      botonPrincipal.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/6661/6661565.png" alt="sol">';
      botonPrincipal.value = "claro";
    }
}