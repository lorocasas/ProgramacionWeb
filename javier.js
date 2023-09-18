// Desplazamiento a las secciones cuando se hace clic en los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Formulario de contacto
const formulario = document.getElementById('contacto-form');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        alert('Formulario enviado correctamente.');
        formulario.reset();
    }
});
