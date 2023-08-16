const nombreInput=document.getElementById("recipient-name");
const apellidoInput=document.getElementById("recipient-apellido");
const emailInput=document.getElementById("email");
const useropenEye = document.getElementById('openEye2');
const usercloseEye = document.getElementById('closeEye2');
const contraseñaInput=document.getElementById("Password");
const form= document.getElementById("miFormulario");
const parrafo=document.getElementById("btnreg");
const mensajeRegistro= document.getElementById('mensajeRegistro');

usercloseEye.style.display = 'none';
//efecto visibilidad de contraseña//
const showPass = () => {
    if(contraseñaInput.type === 'password'){
      contraseñaInput.type = 'text';
        useropenEye.style.display = 'none';
        usercloseEye.style.display = 'inline-block'
    }else{
      contraseñaInput.type = 'password';
        useropenEye.style.display = 'inline-block';
        usercloseEye.style.display = 'none'
    }
}
//validacion de formulario//
form.addEventListener('submit', function(event) { 
    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;


    if (nombre.length< 3 || apellido.length<3) {
        alert('El nombre y el apellido deben tener al menos 3 caracteres.');//condicion para que no se pueda agregar un nombre menor a 3 carcateres//
      }
      if(!emailRegex.test(emailInput.value)){
        console.log(emailInput.value);
        alert('Direccion de correo no valida');
        return;
    }
    
    
    if(!passwordRegex.test(contraseñaInput.value)){
        alert('Contraseña no valida, recuerde que debe ingresar al menos: una mayuscula, una minuscula, un numero y un simbolo especial');
        return;
    }
  
    const correo=emailInput.value;
    const con=contraseñaInput.value;
    const Usuario=({  nombre: nombre,apellido:apellido,correo: correo,contrasena: con,})
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica si el correo ya está registrado
    const isUserRegistered = usuariosRegistrados.find(usuario => usuario.correo === correo);
    if (isUserRegistered) {
        alert('El correo ya está registrado');
        return form.reset(); // Resetea el formulario
        window
    }

    usuariosRegistrados.push(Usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
alert("registro exsitoso");

document.getElementById("loginBtn").style.display = "inline-block";
document.getElementById("exampleModal").style.display = "none";
form.reset(); // Resetea el formulario

    });