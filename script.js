
const dayButton = document.getElementById('day-button');
const nightButton = document.getElementById('night-button');
const scene = document.getElementById('scene');
const intro = document.getElementById('intro');
const homeButton = document.getElementById('home-button');



document.body.classList.add('home-bg');


dayButton.addEventListener('click', () => {
  scene.classList.remove('scene-night');
  scene.classList.add('scene-day');
  document.getElementById('scene-text').textContent = "Scena del Giorno!";
  intro.style.display = 'none';
  homeButton.style.display = 'inline-block';
  document.body.classList.remove('home-bg');
});


nightButton.addEventListener('click', () => {
  scene.classList.remove('scene-day');
  scene.classList.add('scene-night');
  document.getElementById('scene-text').textContent = "Scena della Notte!";
  intro.style.display = 'none';
  homeButton.style.display = 'inline-block';
  document.body.classList.remove('home-bg');
});


homeButton.addEventListener('click', () => {
  scene.classList.remove('scene-day', 'scene-night');
  document.getElementById('scene-text').textContent = "Viaggio nel Tempo: Giorno e Notte in un Click";
  intro.style.display = '';
  homeButton.style.display = 'none';
  document.body.classList.add('home-bg');
});
