const dayButton = document.getElementById('day-button');
const nightButton = document.getElementById('night-button');
const scene = document.getElementById('scene');

dayButton.addEventListener('click', () => {
  scene.classList.remove('scene-night');
  scene.classList.add('scene-day');
  document.getElementById('scene-text').textContent = "Scena del Giorno!";
});

nightButton.addEventListener('click', () => {
  scene.classList.remove('scene-day');
  scene.classList.add('scene-night');
  document.getElementById('scene-text').textContent = "Scena della Notte!";
});