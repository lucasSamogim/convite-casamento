lucide.createIcons();

const audio = document.getElementById("musicaFundo");
const toggleBtn = document.getElementById("audioToggle");

// Define volume inicial
audio.volume = 0.2;

toggleBtn.addEventListener("click", () => {
  if (!audio.paused) {
    audio.pause();
    toggleBtn.textContent = "▶️"; // muda para play
  } else {
    audio.play();
    toggleBtn.textContent = "⏸️"; // muda para pause
  }
  });

  //Countdown para o Casamento

  function updateCountdown() {
    const weddingDate = new Date("2025-06-21T16:00:00");
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);