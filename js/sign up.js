
const formulario = document.querySelector('form');
formulario.setAttribute('id', 'registroForm');

const registroForm = document.getElementById('registroForm');

function registrarUsuario(e) {
    e.preventDefault();

    const nombreValor = document.getElementById('name').value.trim();
    const apellidoValor = document.getElementById('lastname').value.trim();
    const emailValor = document.getElementById('Email').value.trim();
    const usernameValor = document.getElementById('Username').value.trim();
    const passwordValor = document.getElementById('password').value;
    

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const existeUsuario = usuarios.find((usuario) => usuario.email === emailValor);

    if (existeUsuario) {
        alert("El usuario ya está registrado.");
        registroForm.reset();
        return;
    }

    const nuevoUsuario = {
        nombre: nombreValor,
        apellido: apellidoValor,
        email: emailValor,
        username: usernameValor,
        password: passwordValor,
    };

  usuarios.push(nuevoUsuario);
localStorage.setItem('usuarios', JSON.stringify(usuarios));

localStorage.setItem('userName', nombreValor);

alert('Usuario creado con éxito');
window.location.href = 'login.html';


    
}

registroForm.addEventListener('submit', registrarUsuario);
