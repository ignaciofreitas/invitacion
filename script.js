// Fecha objetivo
const countDownDate = new Date("April 25, 2026 00:00:00").getTime();

// Actualizar el contador cada segundo
const x = setInterval(function() {

    // Obtener la fecha y hora actual
    const now = new Date().getTime();

    // Calcular la distancia entre ahora y la fecha objetivo
    const distance = countDownDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado en los elementos correspondientes
    document.getElementById("days-number").innerHTML = days;
    document.getElementById("hours-number").innerHTML = hours;
    document.getElementById("minutes-number").innerHTML = minutes;
    document.getElementById("seconds-number").innerHTML = seconds;

    // Si la cuenta regresiva ha terminado
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡La fecha ha llegado!";
    }
}, 1000);
