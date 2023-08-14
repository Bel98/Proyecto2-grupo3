const useropenEye = document.getElementById('openEye');
const usercloseEye = document.getElementById('closeEye');
const userpassword = document.getElementById('password');
const userMail = document.getElementById('email');

usercloseEye.style.display = 'none';

const showPass = () => {

    if(userpassword.type === 'password'){
        userpassword.type = 'text';
        useropenEye.style.display = 'none';
        usercloseEye.style.display = 'inline-block'
    }else{
        userpassword.type = 'password';
        useropenEye.style.display = 'inline-block';
        usercloseEye.style.display = 'none'
    }
}

const userAdmin = document.getElementById('userAdmin');
const logNone = document.getElementById('logNoneJS');
const registerNone = document.getElementById('registerNoneJS');
const accountNone = document.getElementById('accountNone');
const adminMobile = document.getElementById('adminNone');
const test = document.getElementsByClassName('test');
// console.log(test)
userAdmin.style.display = 'none';
adminMobile.style.display = 'none';


const log = () => {
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!emailRegex.test(userMail.value)){
        console.log(userMail.value);
        alert('Direccion de correo no valida');
        return;
    }
    
    
    if(!passwordRegex.test(password.value)){
        alert('Contraseña no valida, recuerde que debe ingresar al menos: una mayuscula, una minuscula, un numero y un simbolo especial');
        return;
    }

    
    userAdmin.style.display = 'inline-block';
    logNone.style.display = 'none';
    registerNone.style.display = 'none';
    accountNone.style.display =  'none';
    adminMobile.style.display = 'inline-block'
    
}



