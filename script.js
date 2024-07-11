// Array de palabras
const words = [
    'californication', 'plataforma5', 'black', 'summer', 'flea', 'aeroplane', 
    'peppers', 'unlimited', 'arcadium', 'love', 'getaway', 'stadium', 
    'quixoticelixer', 'quarter', 'snow', 'dylan', 'zephyr', 'funky', 'chili'
  ];
  
  // Variables
  let palabraAleatoria;
  let time = 10;
  let score = 0;
  
  // Referencias a elementos del DOM
  const randomWordElement = document.getElementById('randomWord');
  const textInput = document.getElementById('text');
  const timeSpan = document.getElementById('timeSpan');
  const scoreElement = document.getElementById('score');
  const endGameContainer = document.getElementById('end-game-container');
  
  // Función que genera una palabra random
  function randomWords() {
    return words[Math.floor(Math.random() * words.length)];
  }
  
  // Función que añade una palabra al DOM
  function addToDOM() {
    palabraAleatoria = randomWords();
    randomWordElement.innerText = palabraAleatoria;
  }
  
  // Evento que se activa cuando el usuario escribe en el input
  textInput.addEventListener('input', (e) => {
    const palabraIngresada = e.target.value.toLowerCase();
    if (palabraIngresada === palabraAleatoria) {
      time += 3;
      e.target.value = '';
      addToDOM();
      updateScore();
    }
  });
  
  // Función que actualiza el tiempo
  function actualizarTiempo() {
    const timer = setInterval(() => {
      time--;
      timeSpan.innerText = `${time}s`;
      if (time === 0) {
        clearInterval(timer);
        gameOver();
      }
    }, 1000);
  }
  
  // Función que actualiza el score
  function updateScore() {
    score++;
    scoreElement.innerText = score;
  }
  
  // Función que maneja el fin del juego
  function gameOver() {
    endGameContainer.innerHTML = `
      <h1>Se terminó el tiempo</h1>
      <p>Tu puntaje final es ${score}</p>
      <button onclick="location.reload()">Volver a Jugar</button>
    `;
    endGameContainer.style.display = 'block';
    document.querySelector('.main').style.display = 'none';
  }
  
  // Inicialización del juego
  addToDOM();
  actualizarTiempo();
  