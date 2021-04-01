window.addEventListener('scroll', (e) => {
  if (window.scrollY>=window.innerHeight) {
    document.body.classList.add("change-color")
    document.getElementById('logo').src="assets/img/logo-mexico-dark.png"
    document.getElementById('mesa').src="assets/img/mesa-icono-dark.png"
    document.getElementById('pedido').src="assets/img/pedido-icono-dark.png"
  }else{
    document.body.classList.remove("change-color")
    document.getElementById('logo').src="assets/img/logo-mexico.png"
    document.getElementById('mesa').src="assets/img/reserva-mesa-icono.png"
    document.getElementById('pedido').src="assets/img/pedido-icono.png"
  }
})
ScrollReveal({ reset: true });
ScrollReveal().reveal('.reveal-element-1', { delay: 150 });
ScrollReveal().reveal('.reveal-element-2', { delay: 300 });
ScrollReveal().reveal('.reveal-element-3', { delay: 450 });
ScrollReveal().reveal('.reveal-element-4', { delay: 600 });
