
(function() {
  'use strict';

  // Configuración: Cambia este ID por el de tu etiqueta <audio> en el HTML
  const AUDIO_ELEMENT_ID = 'miAudio';
  
  // Lista exhaustiva de interacciones del usuario
  const interacciones = ['click', 'touchstart', 'keydown', 'wheel', 'mousedown'];
  
  let elementoAudio = null;

  function inicializarAutoplay() {
    elementoAudio = document.getElementById(AUDIO_ELEMENT_ID);

    if (!elementoAudio) {
      console.error(`Error: No se encontró ningún elemento audio con el ID "${AUDIO_ELEMENT_ID}".`);
      return;
    }

    // Escuchar interacciones para activar la reproducción
    interacciones.forEach(evento => {
      document.addEventListener(evento, activarAudio, { passive: true });
    });
  }

  function activarAudio() {
    if (!elementoAudio) return;

    elementoAudio.play()
      .then(() => {
        console.log("Éxito: El navegador permitió la reproducción interactiva.");
        limpiarEventos();
      })
      .catch(error => {
        // El navegador detectó la acción pero determinó que no fue una intención clara del usuario
        console.warn("Aviso: Interacción registrada, pero el navegador bloqueó el audio.", error);
      });
  }

  function limpiarEventos() {
    interacciones.forEach(evento => {
      document.removeEventListener(evento, activarAudio);
    });
  }

  // Esperar a que el DOM esté listo para buscar el elemento de audio
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarAutoplay);
  } else {
    inicializarAutoplay();
  }
})();
