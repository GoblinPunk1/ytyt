import { telegramAPI } from './telegram';

telegramAPI.expand();

const imageCard = document.querySelector('.js-main-person');

imageCard.addEventListener('touchstart', event => {
  [...event.touches].forEach(touch);
});

function resetImageStyle() {
  imageCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
}

function touch(touch) {
  const rect = imageCard.getBoundingClientRect();
  const offsetX = touch.clientX - rect.left; // Use touches[0] for touch event
  const offsetY = touch.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((offsetY - centerY) / centerY) * 15;
  const rotateY = ((centerX - offsetX) / centerX) * 15;

  imageCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

imageCard.addEventListener('touchend', function (event) {
  navigator.vibrate(100);
  resetImageStyle();
});
