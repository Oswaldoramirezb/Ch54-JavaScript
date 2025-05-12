function cambiarNombre() {
    var nombre = prompt("¿Cuál es tu nombre?");
    document.getElementById("saludo").textContent = "Hola " + nombre;
}
