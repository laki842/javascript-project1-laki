/* //////////// mobile navbar //////////// */

// mobile button

const mobileBtn = document.querySelector('.mobile-btn');
const mobileNavbar = document.querySelector('.navbar-right');

mobileBtn.addEventListener('click', function () {
  mobileNavbar.classList.toggle('navbar-right1');
});

// collapse mobile menu

const navLinks = document.querySelector('.nav-elements');

navLinks.addEventListener('click', function () {
  mobileNavbar.classList.remove('navbar-right1');
});

/* //////////// languages  //////////// */

const languages = [
  {
    name: 'HTML',
    img: './images/html.png',
    text: 1,
  },
  {
    name: 'CSS',
    img: './images/css.png',
    text: 2,
  },
  {
    name: 'JAVASCRIPT',
    img: './images/javascript.png',
    text: 3,
  },
  {
    name: 'REACT',
    img: './images/react.png',
    text: 4,
  },
];

// hardcoded placeholders ; selecting

const passiveName = document.getElementById('blog-language-name');
const passiveImg = document.getElementById('blog-language-img');
const passiveText = document.getElementById('blog-language-text');

let languageList = 0;
const language = languages[languageList];

// show first language

window.addEventListener('DOMContentLoaded', function () {
  passiveName.textContent = language.name;
  passiveImg.src = language.img;
  passiveText.textContent = language.text;
});

// btns

const prevBtn = document.querySelector('.uil-previous');
const nextBtn = document.querySelector('.uil-step-forward');

// show other languages

function show(l) {
  const language = languages[l];
  passiveName.textContent = language.name;
  passiveImg.src = language.img;
  passiveText.textContent = language.text;
}

// previous button

prevBtn.style.visibility = 'hidden';
prevBtn.addEventListener('click', function () {
  languageList--;
  // dont allow number to be lower than 0
  if (languageList < 0) {
    languageList = 0;
  }
  // hide prevBtn
  if (languageList < 1) {
    prevBtn.style.visibility = 'hidden';
  }
  // trigger showing of next button
  if (languageList < 3) {
    nextBtn.style.visibility = 'visible';
  }
  show(languageList);
});

// next button

nextBtn.addEventListener('click', function () {
  languageList++;
  // dont allow number to be higher than 3
  if (languageList > 3) {
    languageList = 3;
  }
  // hide nextBtn
  if (languageList > 2) {
    nextBtn.style.visibility = 'hidden';
  }
  // trigger showing of prev button
  if (languageList > 0) {
    prevBtn.style.visibility = 'visible';
  }
  show(languageList);
});
