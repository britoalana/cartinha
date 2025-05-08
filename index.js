function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s"; // 3s a 5s
  heart.style.fontSize = (Math.random() * 20 + 20) + "px"; // tamanho entre 20px e 40px
  document.body.appendChild(heart);

  // Remove o coração após a animação
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Cria corações constantemente
setInterval(createHeart, 300);

  const imagens = [
    'foto1.jpeg',
    'foto2.jpeg',
    'foto3.jpeg',
    'foto4.jpeg',
    'foto5.jpeg',
    'foto6.jpeg'
];

let index = 0;
const imgEl = document.getElementById('carouselImage');

// Definir a imagem inicial
imgEl.src = imagens[index];

// Troca de imagem a cada 2 segundos
setInterval(() => {
    index = (index + 1) % imagens.length;
    imgEl.src = imagens[index];
}, 2000);

// Precarregar as imagens para melhorar o tempo de troca
const preloadImages = () => {
    imagens.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
};

preloadImages();


  function atualizarContador() {
    const inicio = new Date("2024-11-04T14:39:00");
    const agora = new Date();
  
    let diffMs = agora - inicio;
  
    if (diffMs < 0) {
      document.getElementById("contador").innerText = "Ainda não começou 💖";
      return;
    }
  
    const segundosTotais = Math.floor(diffMs / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const diasTotais = Math.floor(horasTotais / 24);
    const mesesTotais = Math.floor(diasTotais / 30.44); // média de dias por mês
  
    const segundos = segundosTotais % 60;
    const minutos = minutosTotais % 60;
    const horas = horasTotais % 24;
    const dias = diasTotais % 30;
    const meses = mesesTotais;
  
    document.getElementById("contador").innerHTML =
      `${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos com você 💖`;
  }
  
  setInterval(atualizarContador, 1000);
  const audio = document.getElementById('audio');
const progress = document.querySelector('.progress');
const currentTimeDisplay = document.getElementById('current-time');
const totalTimeDisplay = document.getElementById('total-time');

// Atualiza o progresso da barra de progresso
function updateProgress() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  
  // Atualiza o valor da barra de progresso
  progress.value = (currentTime / duration) * 100;

  // Atualiza o tempo atual
  currentTimeDisplay.textContent = formatTime(currentTime);
}

// Define o tempo total quando a música é carregada
function setTotalTime() {
  const duration = audio.duration;
  totalTimeDisplay.textContent = formatTime(duration);
}

// Formata o tempo no formato MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Alterna entre play e pause
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    document.querySelector('.play-icon').classList.replace('fa-play', 'fa-pause');
  } else {
    audio.pause();
    document.querySelector('.play-icon').classList.replace('fa-pause', 'fa-play');
  }
}
