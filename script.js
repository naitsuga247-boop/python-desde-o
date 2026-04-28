// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Saludo dinámico en la consola o alerta
    const hora = new Date().getHours();
    let mensaje = "";
    if (hora < 12) mensaje = "¡Buen día! Listo para programar?";
    else if (hora < 20) mensaje = "¡Buenas tardes! A darle a Python.";
    else mensaje = "¡Buenas noches! No te olvides de descansar.";
    
    console.log(mensaje);

    // 2. Interactividad en el menú desplegable
    const enlaces = document.querySelectorAll('.dropdown-content a');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            // Animación simple: confirmación en pantalla
            const tema = e.target.innerText;
            alert(`Has seleccionado el módulo: ${tema}`);
            
            // Marcar como visitado visualmente con JS
            e.target.style.color = "#c246a3"; 
        });
    });

    // 3. Hacer que el botón principal reaccione al clic
    const boton = document.querySelector('.dropbtn');
    boton.addEventListener('mousedown', () => {
        boton.style.transform = "scale(0.95)";
    });
    boton.addEventListener('mouseup', () => {
        boton.style.transform = "scale(1)";
    });
});