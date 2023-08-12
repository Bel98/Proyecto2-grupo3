const newFila = document.getElementById('fila');
const editFila = document.getElementById('filaEdit');
const save = document.getElementById('save');
save.style.display = 'none';
newFila.style.display = 'none';
editFila.style.display = 'none';

 const storageGames = JSON.parse(localStorage.getItem('games')) || [];
 const Body = document.getElementById('cuerpo');
    

const addGame = () => {
    newFila.style.display = 'table-row';
    save.style.display = 'block';
}



const saveGame = () => {
    
    const newGame = {
        gameCode : document.getElementById('codigo').value,
        gameName : document.getElementById('nameG').value.toLowerCase(),
        gameCat : document.getElementById('category').value.toLowerCase().replace(/\s+/g, ""),
        gameDesc : document.getElementById('decription').value.toLowerCase().replace(/.{10}/g, "$&\n"),
        gameCheck : document.getElementById('checkOut').checked,
    };
    




    const categoryArray = ["shooter","terror","deportes","carreras","deportesycarreras", "casuales"];   
    const categories = categoryArray.includes(newGame.gameCat);

    if(!categories){
        alert("No pertenece a una categoria valida");
        return;
    }

    if(!newGame.gameCheck){
        alert("Recuerde que el juego aun no esta publicado");
    }




    const gameCodExist = storageGames.find((game)=>{
        return game.gameCode === newGame.gameCode;
    })

    const gameNameExist = storageGames.find((gameN) => {
        return gameN.gameName === newGame.gameName;
    })

    const gamer = storageGames;

    if(gameCodExist || gameNameExist){
        alert(`El juego: ${newGame.gameName}\nCodigo: ${newGame.gameCode}\nYa existe`);
        return;
    }else{
        gamer.push(newGame);
    }
    
    



    saveDataToLocalStorage(gamer);

    addGameToTable(newGame);


    
    newFila.style.display = 'none';   
    save.style.display = 'none'; 
}








    function saveDataToLocalStorage(data) {
        localStorage.setItem('games', JSON.stringify(data));
    }



    function addGameToTable(game) {
        


        const fila = document.createElement('tr');
        const codeTd = document.createElement('td');
        const codeP = document.createElement('p');
        codeP.textContent = game.gameCode;

        codeTd.appendChild(codeP);
        fila.appendChild(codeTd);

       
        const nameTd = document.createElement('td');
        const nameP = document.createElement('p');
        nameP.textContent = game.gameName;

        nameTd.appendChild(nameP);
        fila.appendChild(nameTd);


        const catTd = document.createElement('td');
        const catP = document.createElement('p');
        catP.textContent = game.gameCat;

        catTd.appendChild(catP);
        fila.appendChild(catTd);

        const descTd = document.createElement('td');
        const descP = document.createElement('div');
        descP.classList.add('d-flex');
        descTd.classList.add('d-flex','justify-content-center');
        
        descP.textContent = game.gameDesc;
        descP.style.whiteSpace = 'pre-line';
        descP.style.maxWidth = "200px";
        descP.style.maxHeight = "100px";
        descP.style.overflow = 'auto';
        descP.style.wordBreak = 'break-word';
       

        descTd.appendChild(descP);
        fila.appendChild(descTd);
        



        /* Checkbox */
        
        let checkboxCell = document.createElement('td');
        checkboxCell.classList.add('border');
        
        let divCheck = document.createElement('div');
        divCheck.classList.add('d-flex', 'justify-content-center');
        
        let check = document.createElement('input');
        check.type = 'checkbox';

        check.checked = game.gameCheck;
        

        check.classList.add('form-check-input','d-flex', 'justify-content-center');
        
        checkboxCell.appendChild(divCheck);
        divCheck.appendChild(check);


        fila.appendChild(checkboxCell); 



        fila.setAttribute('data-code', game.gameCode); // Agrega el atributo data-code a la fila
    // ... (código para crear las celdas de la fila)
        /* Botones */
        
        let bottomCell = document.createElement('td');
        bottomCell.classList.add('border');
        
        let divBottom = document.createElement('div');
        divBottom.classList.add('d-flex', 'justify-content-center', 'btn-group');
        


        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button'); // Agrega una clase al botón
        deleteButton.classList.add('d-flex', 'justify-content-center', 'btn', 'btn-primary');
        deleteButton.innerHTML = '<i class="bi bi-trash"></i>';
        deleteButton.addEventListener('click', () => deleteGame(game.gameCode)); // Llama a la función para eliminar
        

        const editButton = document.createElement('button');
        editButton.classList.add('d-flex', 'justify-content-center', 'btn', 'btn-primary');
        editButton.innerHTML = '<i class="bi bi-pencil-square"></i>';
        editButton.addEventListener('click', () => editGame(game.gameCode)); // Llama a la función para editar

        const starButton = document.createElement('button');
        starButton.classList.add('d-flex', 'justify-content-center', 'btn', 'btn-primary');
        starButton.innerHTML = '<i class="bi bi-star-fill"></i>';

        divBottom.appendChild(deleteButton);
        divBottom.appendChild(editButton);
        divBottom.appendChild(starButton);

        
        bottomCell.appendChild(divBottom);


        
        fila.appendChild(bottomCell);
        Body.appendChild(fila);
    }



function deleteGame(gameCode) {
    // Filtra los juegos para obtener los que no tengan el código a eliminar
    const updatedGames = storageGames.filter(game => game.gameCode !== gameCode);

    // Guarda los juegos actualizados en el almacenamiento
    saveDataToLocalStorage(updatedGames);

    storageGames.splice(0, storageGames.length, ...updatedGames);

    const rowToDelete = document.querySelector(`tr[data-code="${gameCode}"]`);
    if (rowToDelete) {
        Body.removeChild(rowToDelete);
    }

    console.log(storageGames);
}



function editGame(gameCode) {
    // Encuentra el juego con el código correspondiente en el array storageGames
    const gameToEdit = storageGames.find(game => game.gameCode === gameCode);

    console.log(gameToEdit);
    editFila.style.display = 'table-row';

    gameToEdit.gameName = document.getElementById('nameGEdit');
    gameToEdit.gameCat = document.getElementById('categoryEdit');
    gameToEdit.gameDesc = document.getElementById('decriptionEdit');
    /* Teniendo en cuenta que ya tenemos localizado el objeto ahora deberiamos encontrar la manera de editar esos valores:
    para ello podriamos probar lo siguiente:
    1- crear otra funcion de input 
    2- Tomar esos valores y guardarlos en otro objeto
    3- En el cual luego iterara y reemplazara los valores del objeto a editar
    4- subir al localStorage
    (propuestas, mantener el codigo en la edicion) 
    
    
    
    Opcion 2:  
        1- llamar a la funcion addGames*/

    console.log(gameToEdit);




    // Llena el formulario con los detalles del juego a editar
    document.getElementById('codigo').value = gameToEdit.gameCode;
    document.getElementById('nameG').value = gameToEdit.gameName;
    document.getElementById('category').value = gameToEdit.gameCat;
    document.getElementById('decription').value = gameToEdit.gameDesc;
    document.getElementById('checkOut').checked = gameToEdit.gameCheck;

    // Ahora el formulario está lleno con los detalles del juego a editar
    // Puedes habilitar el botón "Guardar" aquí si lo deshabilitaste previamente
    save.style.display = 'block';
}



document.addEventListener("DOMContentLoaded", function() {
    storageGames.forEach(game => {
        addGameToTable(game);
    });

    // Agrega event listeners a los botones de eliminar
        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
        const gameCode = button.parentElement.parentElement.getAttribute('data-code');
        deleteGame(gameCode);
    });
    });


})
   