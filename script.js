'use strict';

// ---------smooth scrolling---------

const btnInformacoes = document.querySelector('.btn-menu');
const section1 = document.querySelector('#section1');
const btnHeart = document.querySelector('.heart');
const section2 = document.querySelector('#section2');
const btnPicture = document.querySelector('.picture');
const section3 = document.querySelector('#section3');
const btnMoon = document.querySelector('.moon');
const section4 = document.querySelector('#section4');

function smooth(btn, sectionS) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();

    sectionS.scrollIntoView({ behavior: 'smooth' });
  });
}

smooth(btnInformacoes, section1);
smooth(btnHeart, section2);
smooth(btnPicture, section3);
smooth(btnMoon, section4);

// -----------Tabbed component-----------

const tabComponent = document.querySelector('.paginamenu');

const tabBotoes = document.querySelector('.tab');
const botoes = document.querySelectorAll('.btnp2');

tabBotoes.addEventListener('click', function (e) {
  const clicked = e.target.closest('.btnp2');
  //   console.log(clicked);

  //Guard clause -- finish the function when there's "nothing clicked" (se clicar entre os botões não vai dar erro)
  if (!clicked) return;

  //Active tab
  botoes.forEach(t => t.classList.remove('btnactive'));
  clicked.classList.add('btnactive');

  //Activate content

  const conteudos = document.querySelectorAll('.conteudot');

  conteudos.forEach(c => c.classList.remove('conteudo-active'));

  //   console.log(clicked.dataset.tab);

  document
    .querySelector(`.click${clicked.dataset.tab}`)
    .classList.add('conteudo-active');

  let texto = document.querySelector(`.text--${clicked.dataset.tab}`);

  // console.log(texto);
});

// ----------------Card change--------------

const gostamos = document.querySelector('.gostamos');

gostamos.addEventListener('click', function (e) {
  const clic = e.target.closest('.imgdq');

  //   console.log(clic);

  if (!clic) return;

  //   console.log(clic.dataset.pic);

  const picFotinha = document.querySelector(`.--${clic.dataset.pic}`);
  let prevImage = undefined;

  if (picFotinha) {
    picFotinha.src = picFotinha.src.replace(
      'images/cartavirada.png',
      `images/${clic.dataset.pic}.jpg`
    );
  }
});

// ---------------Carousel------------------

const carousel = document.querySelector('.fotos-carousel');
const sidePic = document.querySelectorAll('.sides');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');

let curPicture = 0;
const maxPictures = sidePic.length;

// sidePic.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const andarCarousel = function (picture) {
  sidePic.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - picture)}%)`)
  );
};

andarCarousel(0);

const nextPicture = function () {
  if (curPicture === maxPictures - 1) {
    curPicture = 0;
  } else {
    curPicture++;
  }

  andarCarousel(curPicture);
};

const prevPicture = function () {
  if (curPicture === 0) {
    curPicture = maxPictures - 1;
  } else {
    curPicture--;
  }
  andarCarousel(curPicture);
};

btnRight.addEventListener('click', nextPicture);
btnLeft.addEventListener('click', prevPicture);

//Usar teclas pra mover as fotos
document.addEventListener('keydown', function (e) {
  // console.log(e);
  if (e.key === 'ArrowLeft') prevPicture();
  if (e.key === 'ArrowRight') nextPicture();
});
