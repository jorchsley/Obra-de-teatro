
document.addEventListener("DOMContentLoaded", () => {
  // Cuenta regresiva
  const countdownEl = document.getElementById("countdown");
  
  if (countdownEl) {
    const estreno = new Date("2025-08-07T09:30:00").getTime();

    const timer = setInterval(() => {
      const ahora = new Date().getTime();
      const diff = estreno - ahora;

      if (diff < 0) {
        clearInterval(timer);
        countdownEl.textContent = "¡La obra ha comenzado!";
        return;
      }

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diff / 1000 / 60) % 60);
      const segundos = Math.floor((diff / 1000) % 60);

      countdownEl.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }, 1000);
  }

  // Registro y generación de folio
  const seccionRegistro = document.getElementById("ticketForm");
  if (seccionRegistro) {
    seccionRegistro.innerHTML = `
      <div class="registro-simplificado" style="text-align: center;">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfrtyRQ0hR1pK5ncnDfjWVamTL8f7zqlp95gfV6yaQ11zB9BQ/viewform?usp=pp_url" 
           target="_blank" 
           class="btn-registro"
           style="display: inline-block; margin: 10px auto;">
          Regístrate aquí
        </a>
        <p class="nota-registro" style="margin: 0 auto; max-width: 300px;">
          Serás redirigido al formulario oficial de registro
        </p>
      </div>
    `;
  }

  // Funcionalidad para botones de descarga
  const downloadButtons = document.querySelectorAll('.btn-download');
  downloadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const buttonText = button.textContent.trim();
      
      try {
        if (buttonText.includes('Ver Videos')) {
          alert('Funcionalidad de videos próximamente disponible');
        } else {
          // Abrir enlace en nueva pestaña
          window.open('https://drive.google.com/file/d/1khRMmykNJXnNIAsavbhPGj50GW5IywFU/view?usp=sharing', '_blank');
        }
      } catch (error) {
        console.error('Error en botón de descarga:', error);
        alert('Error al procesar la descarga');
      }
    });
  });

  // Funcionalidad para el header flotante
  const header = document.querySelector('.floating-header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Indicador de página activa en el menú
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === 'index.html' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
});
