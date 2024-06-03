import { screens } from './refs';
const refs = {
  navigation: document.querySelector('.js-footer-nav'),
  frame: document.querySelector('.js-main-frame'),
};

refs.frame.insertAdjacentElement('afterbegin', screens.main);

refs.navigation.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const li = e.target.closest('li');
  const src = li.dataset.src;
  refs.frame.innerHTML = '';
  refs.frame.insertAdjacentElement('afterbegin', screens[src]);

  const oldLi = refs.navigation.querySelector('.active');
  oldLi.classList.remove('active');
  li.classList.add('active');
});
