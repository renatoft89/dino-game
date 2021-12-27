const dino = document.querySelector('.dino');

function spaceUp(event) {
  if (event.keyCode === 32) {
    jumping();
  }
}

function jumping() {
  let position = 0;

  let upMove = setInterval(() => {
    if (position >= 150) {
      clearInterval(upMove);

      //Faz o elemento descer
      let downMove = setInterval(() => {
        if (position <= 0) {
          clearInterval(downMove);
        } else {
          position -= 20;
          dino.style.bottom = position + 'px';
        }
      }, 20);
    } else {
      // faz elemento subir
      position += 20;
      dino.style.bottom = position + 'px';
    }
  }, 20);
}

document.addEventListener('keyup', spaceUp);