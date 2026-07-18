const heartContainer = document.getElementById('hearts');
const addHeartButton = document.getElementById('addHeart');
const complimentBtn = document.getElementById('complimentBtn');
const complimentDiv = document.getElementById('compliment');

const compliments = [
  'Sen dünyanın en şefkatli annesisin.',
  'Gülüşün evimizi aydınlatıyor.',
  'Her günün sevgiyle dolu olsun, canım anne.',
  'Seninle her an daha güzel.',
  'Senin emeğin her şeyden kıymetli.',
  'Senin sabrın ve gücün ilham veriyor.'
];

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '\u2764';
  const size = Math.floor(Math.random() * 18) + 22;
  heart.style.fontSize = `${size}px`;
  heart.style.left = `${Math.random() * 80 + 10}%`;
  heart.style.color = `hsl(${Math.random() * 40 + 320}, 75%, 65%)`;
  heart.style.animationDuration = `${Math.random() * 0.6 + 1.6}s`;
  heartContainer.appendChild(heart);

  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

function burstHearts(count = 8, interval = 80) {
  for (let i = 0; i < count; i += 1) {
    setTimeout(createHeart, i * interval);
  }
}

addHeartButton.addEventListener('click', () => {
  burstHearts(6, 120);
});

function showCompliment() {
  const text = compliments[Math.floor(Math.random() * compliments.length)];
  complimentDiv.textContent = text;
  complimentDiv.classList.remove('large', 'small');
  complimentDiv.classList.add(Math.random() > 0.6 ? 'large' : 'small');
  complimentDiv.classList.add('show');
  burstHearts(14, 45);
  setTimeout(() => {
    complimentDiv.classList.remove('show');
  }, 3000);
}

complimentBtn.addEventListener('click', showCompliment);

// initial gentle hearts
for (let i = 0; i < 10; i += 1) {
  setTimeout(createHeart, i * 220);
}

// Cake interaction
const cakeEl = document.getElementById('cake');
if (cakeEl) {
  let lit = false;
  cakeEl.addEventListener('click', () => {
    lit = !lit;
    if (lit) {
      cakeEl.classList.add('lit');
      // celebration: many hearts and a compliment
      burstHearts(30, 30);
      const prev = complimentDiv.textContent;
      complimentDiv.textContent = 'Pastanın mumları yandı! İyi ki doğdun anne.';
      complimentDiv.classList.add('show', 'large');
      setTimeout(() => {
        complimentDiv.classList.remove('show');
        complimentDiv.textContent = prev || '';
      }, 4200);
    } else {
      cakeEl.classList.remove('lit');
    }
  });
}
