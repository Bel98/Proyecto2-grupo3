const useropenEyeG = document.getElementById('openEyeG');
const usercloseEyeG = document.getElementById('closeEye');
const userpassword = document.getElementById('password');
const userMail = document.getElementById('emailG');

usercloseEyeG.style.display = 'none';

const showPass2 = () => {

    if(userpassword.type === 'password'){
        userpassword.type = 'text';
        useropenEyeG.style.display = 'none';
        usercloseEyeG.style.display = 'inline-block'
    }else{
        userpassword.type = 'password';
        useropenEyeG.style.display = 'inline-block';
        usercloseEyeG.style.display = 'none'
    }
}

const userAdmin = document.getElementById('userAdmin');
const logNone = document.getElementById('logNoneJS');
const closeSessionNone= document.getElementById('closeSessionNoneJS')
const accountNone = document.getElementById('accountNone');
const adminMobile = document.getElementById('adminNone');
const test = document.getElementsByClassName('test');
const loginform = document.getElementById('logForm');

// userAdmin.style.display = 'none';
adminMobile.style.display = 'none';
closeSessionNone.style.display= 'none';


const log = () => {
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const enteredUserMail = userMail.value;
    const enteredUserpassword = userpassword.value;

    const users = JSON.parse(localStorage.getItem('usuarios')) || [];
    console.log(users);

    
  
    if(!emailRegex.test(enteredUserMail)){
        
        alert('Direccion de correo no valida');
        return;
    }
    
    
    if(!passwordRegex.test(enteredUserpassword)){
        alert(`Contraseña no valida, recuerde que debe ingresar al menos: \n-8 caracteres como minimo 
        \n-Una mayuscula \n-Una minuscula \n-Un numero  \n-Un simbolo especial`);
        return  ;
    }
    
    
        
        
        
    const validUser = users.find(user => user.correo === enteredUserMail && user.contrasena === enteredUserpassword);
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos');
    }
    alert(`Bienvenido ${validUser.nombre}`);
   
    
    
    userAdmin.style.display = 'inline-block';
    logNone.style.display = 'none';
    accountNone.style.display =  'none';
    closeSessionNone.style.display= 'inline-block';
    adminMobile.style.display = 'inline-block';

}

