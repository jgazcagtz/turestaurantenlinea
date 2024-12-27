document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !correo || !mensaje) {
      alert('Por favor, completa todos los campos antes de enviar.');
      return;
    }

    const numeroWhatsApp = "525533355687"; // Reemplaza con el número de WhatsApp (formato internacional)
    const texto = `Hola, mi nombre es ${nombre}. Mi correo es ${correo}. Quiero más información sobre sus servicios. Este es mi mensaje: ${mensaje}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  });
});
