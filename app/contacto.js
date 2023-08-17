
const send = () => {

    const storageMessage = JSON.parse(localStorage.getItem('message')) || [];

    const newContact =  {
         userName : document.getElementById('input1').value,
         userMail : document.getElementById('input2').value,
         userNumber: document.getElementById('input3').value,
         userMessage : document.getElementById('text').value,
    }
    
    
    console.log(newContact)
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    

    if(!emailRegex.test(newContact.userMail)){
        console.log(newContact.userMail);
        alert('Direccion de correo no valida');
        return;
    }else if (newContact.userName.length< 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        return;
      }else if (newContact.userMessage.length< 1) {
        alert('Debe ingresar el mensaje');
        return;
      }else {
        storageMessage.push(newContact);
      } 
    


    localStorage.setItem('message', JSON.stringify(storageMessage));

    window.location.href = 'http://127.0.0.1:5502/Pages/Contacto.html';
}