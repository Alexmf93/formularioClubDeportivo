const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    

    let spanErrors = document.querySelectorAll('.error')
    spanErrors.forEach(span => {
        span.innerText = ""
    })

    const nombre = document.getElementById('nombre').value
    const usuario = document.getElementById('usuario').value
    const edad = document.getElementById('edad').value
    const password = document.getElementById('password')
    const soloLetrasNumerosGuiones = /^[A-Za-z][A-Za-z0-9_]*$/;


    if(nombre.trim().length<3 || nombre.trim().length>50){
        document.getElementById('nombreError').innerText = "El nombre debe contener entre 3 y 50 caracteres"
    
    }

    if(usuario.trim()<5 || usuario.trim()>20){
        document.getElementById('usuarioError').innerText = "El usuario debe contener entre 5 y 20 caracteres"
    }

    if(edad < 18){
        document.getElementById('edadError').innerText = "Debe ser mayor de edad"
    
    }

    if(password.trim().length < 8 || password.trim().length > 16 || !soloLetrasNumerosGuiones.test(password.trim())){
        document.getElementById('contraseñaError').innerText = "La contraseña introducida no es correcta"
    }
})