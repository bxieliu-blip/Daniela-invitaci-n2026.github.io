function crearLluviaMusical() {
  const contenedor = document.getElementById('lluvia-musical');
  if (!contenedor) return;

  const notasSimbolos = ['♩', '♪', '♫', '♬', '𝄢', '𝄞'];
  
  // 1. Detectar si el usuario está en un celular
  const esCelular = window.innerWidth <= 768;
  
  // 2. Control de cantidad (12 notas en móviles para no ralentizar, 40 en computadoras)
  const cantidadNotas = esCelular ? 12 : 40; 

  // Paleta de colores: Variaciones de Azul Eléctrico, Turquesa y Marfil Claro
  const coloresNotas = ['#00d2ff', '#fffdf4', '#0044ff', '#e0f2fe', '#06b6d4'];

  for (let i = 0; i < cantidadNotas; i++) {
    const nota = document.createElement('div');
    nota.className = 'nota-musical';
    
    // Asignar símbolo y color aleatorio de la paleta
    nota.innerText = notasSimbolos[Math.floor(Math.random() * notasSimbolos.length)];
    nota.style.color = coloresNotas[Math.floor(Math.random() * coloresNotas.length)];
    
    // 3. Adaptación de tamaños (Móvil: 11px a 16px | Computadora: 14px a 36px)
    const tamaño = esCelular ? (11 + Math.random() * 5) : (14 + Math.random() * 22); 
    
    const inicioX = Math.random() * 100; 
    const retraso = Math.random() * -20; // Retraso negativo para que ya estén cayendo al cargar la web
    const duracion = 8 + Math.random() * 10; // Velocidad de caída aleatoria (8 a 18 segundos)
    const opacidad = esCelular ? (0.3 + Math.random() * 0.4) : (0.4 + Math.random() * 0.5); 

    // Aplicar estilos calculados
    nota.style.fontSize = `${tamaño}px`;
    nota.style.left = `${inicioX}vw`;
    nota.style.animationDelay = `${retraso}s`;
    nota.style.animationDuration = `${duracion}s`;
    nota.style.opacity = opacidad;

    // 4. Reducir el balanceo lateral en móviles para que caigan de forma más fluida y recta
    const balanceo = esCelular ? (10 + Math.random() * 15) : (30 + Math.random() * 50);
    nota.style.setProperty('--balanceoX', `${balanceo}px`);

    contenedor.appendChild(nota);
  }
}

// Inicializar el efecto cuando el documento HTML esté listo
window.addEventListener('DOMContentLoaded', crearLluviaMusical);
