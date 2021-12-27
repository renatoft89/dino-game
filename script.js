const dino = document.querySelector('.dino');

function spaceUp(event) {
  if(event.keyCode === 32) {
    console.log('Pressionou Tecla Espaço');
  }
}

document.addEventListener('keyup', spaceUp);