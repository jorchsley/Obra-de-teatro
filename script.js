
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
  const form = document.getElementById("ticketForm");
  const folioDisplay = document.getElementById("folio");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const nombre = formData.get("nombre");
      const email = formData.get("email");
      const folio = "F" + Date.now();
      
      if (folioDisplay) {
        folioDisplay.textContent = `Tu folio: ${folio}`;
      }
      
      // Aquí iría el envío con fetch a Apps Script
      // Enviar datos al servidor
      fetch("https://script.google.com/macros/s/AKfycbzmOI1eHkp2zg8jrpoj5VGB3Tse-uyYpK1OfmAKeYGBTSbR5c6kX-1f4WN6YPExf-P1hQ/exec", {
        method: "POST",
        body: JSON.stringify({ nombre, correo: email }),
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return res.json();
      })
      .then(data => {
        if (folioDisplay) {
          folioDisplay.innerHTML = `Tu folio: ${data.folio}<br><a href="${data.pdf}" target="_blank">Descargar PDF</a>`;
        }
      })
      .catch(err => {
        if (folioDisplay) {
          folioDisplay.innerHTML = `Tu folio: ${folio}<br><small style="color: #ff6b6b;">Error al enviar al servidor, pero tu folio es válido</small>`;
        }
        console.error('Error en el registro:', err);
      });
      

    });
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
          alert('Descarga simulada: ' + buttonText);
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
