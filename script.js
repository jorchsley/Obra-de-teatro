// Cuenta regresiva para la fecha del evento
const countdown = document.getElementById("countdown");
const eventDate = new Date("2025-08-30T18:00:00").getTime(); // Fecha del evento

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        countdown.innerHTML = "¡La obra ha comenzado!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

setInterval(updateCountdown, 1000);
updateCountdown();