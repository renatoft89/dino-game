/////////////////////////////// *** FUNÇÂO DINO *** ///////////////////////////

const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let position = 0;
let isJumping = false;

function spaceUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jumping();
    }
  }
}

function jumping() {
  isJumping = true;

  let upMove = setInterval(() => {
    if (position >= 150) {
      clearInterval(upMove);

      //Faz o elemento descer
      let downMove = setInterval(() => {
        if (position <= 0) {
          clearInterval(downMove);
          isJumping = false;
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

////////////////////////// *** Criar Cactus *** //////////////////////////////

function creatCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let ramdomTime = Math.random() * 10000;

  cactus.classList.add('cactus');
  cactus.style.left = 1000 + 'px';
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
  cactusPosition -= 10;
  cactus.style.left = cactusPosition + 'px';

  if (cactusPosition < -60) {
    clearInterval(leftInterval);
    background.removeChild(cactus);
  } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60 ) {
    // GAME OVER  
    clearInterval(leftInterval);
    document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';  } else {  
    cactusPosition -= 10;
    cactus.style.left = cactusPosition + 'px';
  }  
}, 20);

setTimeout(creatCactus, ramdomTime);

}

creatCactus();