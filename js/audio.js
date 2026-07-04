// 1. Instanciar el archivo WAV (se descarga en segundo plano)
const audioWav = new Audio('badlove.wav');
audioWav.preload = 'auto'; // Fuerza al navegador a precargar el buffer

// 2. Función que activa el sonido tras la interacción
function desbloquearYReproducir() {
    audioWav.play()
        .then(() => {
            console.log("WAV reproducido exitosamente gracias a la interacción.");
            eliminarEventos(); // Limpia los listeners
        })
        .catch(error => {
            console.error("Error al reproducir el WAV:", error);
        });
}

// 3. Registrar eventos de interacción del usuario
const eventosInteraccion = ['click', 'touchstart', 'keydown', 'mousedown'];

eventosInteraccion.forEach(evento => {
    window.addEventListener(evento, desbloquearYReproducir, { once: true });
});

// 4. Limpieza de eventos para que no se vuelva a disparar al hacer más clics
function eliminarEventos() {
    eventosInteraccion.forEach(evento => {
        window.removeEventListener(evento, desbloquearYReproducir);
    });
}
