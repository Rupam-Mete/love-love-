/* ---------------- Floating Love Emojis ---------------- */
const heartWrapper = document.querySelector('.heart-wrapper');
const emojiList = ['❤️', '💖', '💘', '💕', '💗'];

// Create a floating emoji at a random horizontal position
function createHeart() {
  const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = emoji;
  heart.style.left = Math.random() * 100 + '%';
  heartWrapper.appendChild(heart);
  animateHeart(heart);
}

// Animate upwards and fade out
function animateHeart(element) {
  const size = Math.random() * 20 + 10; // between 10–30px
  element.style.fontSize = size + 'px';
  element.style.opacity = 1;
  const riseDuration = Math.random() * 3000 + 2000; // 2–5s

  element.animate(
    [
      { transform: 'translateY(0)', opacity: 1 },
      { transform: 'translateY(-600px)', opacity: 0 }
    ],
    {
      duration: riseDuration,
      easing: 'linear'
    }
  );

  setTimeout(() => {
    element.remove();
  }, riseDuration);
}

// Continuously spawn new hearts every 0.7 seconds
setInterval(createHeart, 700);


/* ---------------- Fade-in Love Messages ---------------- */
const loveMsgs = document.querySelectorAll('.love-msg');
loveMsgs.forEach((msg, i) => {
  setTimeout(() => {
    msg.classList.add('visible');
  }, i * 800); // 0.8s staggering
});


/* ---------------- Surprise Box Toggle ---------------- */
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseBox = document.getElementById('surpriseBox');

surpriseBtn.addEventListener('click', () => {
  surpriseBox.classList.toggle('visible');
});
