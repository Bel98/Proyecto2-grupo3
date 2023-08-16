const newFila = document.getElementById('fila');
const editFila = document.getElementById('filaEdit');
const save = document.getElementById('save');
const edition = document.getElementById('edition');
edition.style.display = 'none';
save.style.display = 'none';
newFila.style.display = 'none';
editFila.style.display = 'none';

const Body = document.getElementById('cuerpo');

const addGame = () => {
    newFila.style.display = 'table-row';
    save.style.display = 'block';
}



const saveGame = () => {
    
    const storageGames = JSON.parse(localStorage.getItem('games')) || [];
    

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
    
    

    localStorage.setItem('games', JSON.stringify(gamer));

    addGameToTable(newGame);

    
    
    newFila.style.display = 'none';   
    save.style.display = 'none'; 
}




function addGameToTable(game) {
        


    const fila = document.createElement('tr');




    /* Codigo */
    const codeTd = document.createElement('td');
    const codeP = document.createElement('p');
    codeP.textContent = game.gameCode;
    codeP.classList.add('d-flex','justify-content-center', 'wordsCell');

    codeTd.appendChild(codeP);
    fila.appendChild(codeTd);




    /* Nombre */
    const nameTd = document.createElement('td');
    const nameP = document.createElement('div');
    nameP.textContent = game.gameName;
    nameP.classList.add('d-flex','justify-content-center','wordsCell','positionsi');
    
    nameTd.appendChild(nameP);
    fila.appendChild(nameTd);




    /* Categoria */
    const catTd = document.createElement('td');
    const catP = document.createElement('div');
    catP.textContent = game.gameCat;
    catP.classList.add('d-flex','justify-content-center', 'wordsCell');

    catTd.appendChild(catP);
    fila.appendChild(catTd);




    /* Descripcion */
    const descTd = document.createElement('td');
    const descP = document.createElement('div');
    descP.textContent = game.gameDesc;
    descP.classList.add('d-flex','justify-content-center','wordsCell','positionsi');

    descTd.appendChild(descP);
    fila.appendChild(descTd);
    



    /* Checkbox */
    
    let checkboxCell = document.createElement('td');
    checkboxCell.classList.add('border');
    
    let divCheck = document.createElement('div');
    divCheck.classList.add('d-flex', 'justify-content-center','mt-3');
    
    let check = document.createElement('input');
    check.type = 'checkbox';

    check.checked = game.gameCheck;
    

    check.classList.add('form-check-input','d-flex', 'justify-content-center');
    
    checkboxCell.appendChild(divCheck);
    divCheck.appendChild(check);


    fila.appendChild(checkboxCell); 






    fila.setAttribute('data-code', game.gameCode); // Agrega el atributo data-code a la fila






    /* Botones */
    
    let bottomCell = document.createElement('td');
    bottomCell.classList.add('border');
    
    let divBottom = document.createElement('div');
    divBottom.classList.add('d-flex', 'justify-content-center', 'btn-group');
    
    
    // Código para deleteButton
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button', 'btn', 'btn-primary','btnAdmin');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('bi', 'bi-trash');
    deleteIcon.classList.add('icon-size');
    deleteButton.appendChild(deleteIcon);
    deleteButton.addEventListener('click', () => deleteGame(game.gameCode));

    // Código para editButton
    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-primary','btnAdmin');
    const editIcon = document.createElement('i');
    editIcon.classList.add('bi', 'bi-pencil-square');
    editIcon.classList.add('icon-size');
    editButton.appendChild(editIcon);
    editButton.addEventListener('click', () => editionIN(game.gameCode));

    // Código para starButton
    const starButton = document.createElement('button');
    starButton.classList.add('btn', 'btn-primary','btnAdmin');
    const starIcon = document.createElement('i');
    starIcon.classList.add('bi', 'bi-star-fill');
    starIcon.classList.add('icon-size');
    starButton.appendChild(starIcon);


    divBottom.appendChild(deleteButton);
    divBottom.appendChild(editButton);
    divBottom.appendChild(starButton);

    
    bottomCell.appendChild(divBottom);


    
    fila.appendChild(bottomCell);
    Body.appendChild(fila);
}





function deleteGame(gameCode) {
    const storageGamesDelete =  JSON.parse(localStorage.getItem('games')) || [];
    const updatedGames = storageGamesDelete.filter(game => game.gameCode !== gameCode);
    

    
    localStorage.setItem('games', JSON.stringify(updatedGames));

    storageGamesDelete.splice(0, storageGamesDelete.length, ...updatedGames);

    const rowToDelete = document.querySelector(`tr[data-code="${gameCode}"]`);
    if (rowToDelete) {
        Body.removeChild(rowToDelete);
    }

    
}





const editionIN = (posicion) => {
    btnEdit(posicion)
    editFila.style.display = 'table-row';
    edition.style.display = 'block';
}

const btnEdit = (valor) => {
    edition.addEventListener('click', () => editGame(valor));
}


const editGame = (gamep) => {
    
    const storageGamesEdit = JSON.parse(localStorage.getItem('games')) || [];

    const codigoEdit = document.getElementById('codigoEdit').value;
    const nameEdit = document.getElementById('nameGEdit').value;
    const categoryEdit = document.getElementById('categoryEdit').value;
    const descrEdit = document.getElementById('decriptionEdit').value;
    const checkEdit = document.getElementById('checkOutEdit').checked;
    


    const categoryArrayEdit = ["shooter","terror","deportes","carreras","deportesycarreras", "casuales"];   
    const categoriesEdit = categoryArrayEdit.includes(categoryEdit);



    if(!categoriesEdit){
        alert("No pertenece a una categoria valida");
        return;
    }


    if(!checkEdit){
        alert("Recuerde que el juego aun no esta publicado");
    }



    const gameNameExist = storageGamesEdit.find((gameN) => {
        return gameN.gameName === nameEdit;
    })



   

    if(gameNameExist){
        alert(`El juego: ${nameEdit}\nYa existe`);
        return;
    }else{
        
        const indexToEdit = storageGamesEdit.findIndex((game) => {
            return game.gameCode === gamep;
            });
        
            if (indexToEdit !== -1) {
                // Actualiza las propiedades del juego editado directamente en el arreglo
                storageGamesEdit[indexToEdit].gameName = nameEdit;
                storageGamesEdit[indexToEdit].gameCat = categoryEdit;
                storageGamesEdit[indexToEdit].gameDesc = descrEdit;
                storageGamesEdit[indexToEdit].gameCheck = checkEdit;
        
    
            // Actualiza los campos de la fila directamente
            const filaEditada = document.querySelector(`tr[data-code="${gamep}"]`);
            const nameP = filaEditada.querySelector('td:nth-child(2) p'); // Cambia 2 por el índice de columna correcto
            const catP = filaEditada.querySelector('td:nth-child(3) p'); // Cambia 3 por el índice de columna correcto
            const descP = filaEditada.querySelector('td:nth-child(4) div'); // Cambia 4 por el índice de columna correcto
            const checkInput = filaEditada.querySelector('td:nth-child(5) input'); // Cambia 5 por el índice de columna correcto
    
            nameP.textContent = nameEdit;
            catP.textContent = categoryEdit;
            descP.textContent = descrEdit;
            checkInput.checked = checkEdit;
    
                // Guarda los cambios en el localStorage
                localStorage.setItem('games', JSON.stringify(storageGamesEdit));
        
                editFila.style.display = 'none';
                edition.style.display = 'none';
            } else {
                console.log("Juego no encontrado en el arreglo.");
            }
        
    }




}






document.addEventListener("DOMContentLoaded", function() {
    const storageGamesDOM =  JSON.parse(localStorage.getItem('games')) || [];
    storageGamesDOM.forEach(game => {
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
   