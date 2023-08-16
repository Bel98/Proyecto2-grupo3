

/* sombreado de los botones donde esta las categorias*/


function filtrarJuegos(categoria) {
  const buttons = document.querySelectorAll('.botonesFiltro');
  const cardsContainer = document.querySelector('.espaciadoJuegos');

  buttons.forEach(button => {
    if (button.textContent.toLowerCase() === categoria) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

/* aparicion de las card dependiendo de la categoria que seleccione*/

  const cardsJuegos = document.querySelectorAll('.cardJuego');

  cardsJuegos.forEach(juego => {
    if (juego.classList.contains(categoria)) {
      juego.style.display = 'block';
    } else {
      juego.style.display = 'none';
    }
  });

  if (categoria === 'shooter') {
    cardsContainer.style.display = 'block';
  } else {
    cardsContainer.style.display = 'none';
  }
}


/* busqueda del juego */

function busquedaJuego(buscarTexto) {
  const cardsGames = document.querySelectorAll('.cardJuego');


  cardsGames.forEach(juego => {
    const nombreJuego= juego.querySelector('.tituloCard');
    if (nombreJuego) {
      const nameJuego = nombreJuego.textContent.toLowerCase();

      if (nameJuego.includes(buscarTexto)) {
        juego.style.display = 'block';
      } else {
        juego.style.display = 'none';
      }
    }
  });
}

function realizarBusqueda(formElement) {
  const searchInput = formElement.querySelector('.buscarJuego');
  const searchTermino = searchInput.value.trim().toLowerCase();

  if (searchTermino === '') {
    return false;
  }
  busquedaJuego(searchTermino);
  return false;
}

filtrarJuegos('shooter');



