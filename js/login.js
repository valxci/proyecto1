const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', ingresarUsuario);

function ingresarUsuario(e) {
    e.preventDefault();

    const userInput = document.getElementById('username').value.trim(); // puede ser username o email
    const password = document.getElementById('password').value.trim();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar por username o email
    const usuarioEncontrado = usuarios.find((usuario) =>
        usuario.username === userInput || usuario.email === userInput
    );

    if (!usuarioEncontrado) {
        alert('El usuario no existe, regístrate');
        loginForm.reset();
        return;
    }

    if (usuarioEncontrado.password !== password) {
        alert("La contraseña es incorrecta");
        loginForm.reset();
        return;
    }

    const usuarioLogueado = {
        nombreCompleto: `${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}`,
        username: usuarioEncontrado.username,
        email: usuarioEncontrado.email
    };

    localStorage.setItem('logueado', JSON.stringify(usuarioLogueado));
    window.location.href = "main.html";
}
