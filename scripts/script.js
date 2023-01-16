window.addEventListener('DOMContentLoaded', () => {
  const move = document.createElement('h1');
  move.textContent = 'Move the alien with your keyboard!';
  const moon = document.querySelector('.moon');
  moon.insertAdjacentElement('beforebegin', move);
  setTimeout(() => {
    move.classList.add('disappear');
  }, 2000);
});

function stars() {
  const count = 200;
  const scene = document.querySelector('.scene');
  let i = 0;
  while (i < count) {
    const star = document.createElement('i');
    const x1 = Math.floor(Math.random() * window.innerWidth);
    const y1 = Math.floor(Math.random() * window.innerHeight);
    const duration = Math.random() * 10;
    const size = Math.random() * 2;

    star.style.left = `${x1}px`;
    star.style.top = `${y1}px`;
    star.style.width = `${1 + size}px`;
    star.style.height = `${1 + size}px`;
    star.style.animationDuration = `${20 + duration}s`;
    scene.appendChild(star);
    i++;
  }
}
stars();

const ufo = document.querySelector('.alien');
let x = 0;
let y = 0;
let rotate = 0;
const speed = 20;

function handleKeyDown(event) {
  if (!event.key.includes('Arrow')) return;
  switch (event.key) {
    case 'ArrowUp':
      y -= 1;
      rotate = 0;
      break;
    case 'ArrowDown':
      y += 1;
      rotate = 0;
      break;
    case 'ArrowRight':
      x += 1;
      rotate = 35;
      break;
    case 'ArrowLeft':
      x -= 1;
      rotate = -35;
      break;
    default:
      console.log('Invalid move');
      break;
  }

  ufo.setAttribute('style', `
  --x: ${x * speed}px; 
  --y: ${y * speed}px;
  --rotate: ${rotate}deg;
  `);
}

window.addEventListener('keydown', handleKeyDown);
