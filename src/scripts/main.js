import { telegramAPI } from './telegram';

telegramAPI.expand();

const imageCard = document.querySelector('.js-main-person');

imageCard.addEventListener('click', event => {
  const rect = imageCard.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((offsetY - centerY) / centerY) * 15;
  const rotateY = ((centerX - offsetX) / centerX) * 15;

  imageCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  setTimeout(resetImageStyle, 100);
});

function resetImageStyle() {
  imageCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
}
