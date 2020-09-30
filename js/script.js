function guardarDatos(){
    var entradaNombre = document.getElementById("nombre");
    var entradaCorreo = document.getElementById("correo");
    localStorage.setItem("nombre", entradaNombre.value);
    localStorage.setItem("correo", entradaCorreo.value);
}

function cargarDatos(){
    var nombre = localStorage.getItem("nombre");
    var correo = localStorage.getItem("correo");
    document.getElementById("titulo").value = nombre;
    console.log(nombre);
}