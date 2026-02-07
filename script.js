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

// Animación de revelado al hacer scroll


// const reveals = document.querySelectorAll(".reveal");

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//         observer.unobserve(entry.target); // anima solo una vez
//       }
//     });
//   },
//   {
//     threshold: 0.3
//   }
// );

// reveals.forEach(el => observer.observe(el));

// const images = document.querySelectorAll(".reveal-center");

// const observer2 = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//         observer2.unobserve(entry.target);
//       }
//     });
//   },
//   { threshold: 0.3 }
// );

// images.forEach(img => observer2.observe(img));

const animatedElements = document.querySelectorAll(
  ".reveal, .reveal-center"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.3
  }
);

animatedElements.forEach(el => observer.observe(el));


// Animacion para los textos

const animatedElements2 = document.querySelectorAll(
  ".reveal, .reveal-center, .text-reveal, .text-blur, .text-lines"
);

const observer2 = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.35
  }
);

animatedElements.forEach(el => observer.observe(el));



