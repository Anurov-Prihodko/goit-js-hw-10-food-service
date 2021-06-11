'use strict';
import mainMarkup from './templates/markup.hbs';
import menu from './menu.json';
import './sass/main.scss';

const refs = {
    chekboxInput: document.querySelector('#theme-switch-toggle'),
    choseBody: document.querySelector('body'),
    markup: document.querySelector('.menu.js-menu'),
}

refs.markup.insertAdjacentHTML('beforeend', mainMarkup(menu));
refs.chekboxInput.addEventListener('change', chengeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function chengeTheme() {
    const checked = refs.chekboxInput.checked;
    // console.log(checked);

    
  
    if (checked === true) {        
        localStorage.setItem('themeIsNow', Theme.DARK);
        refs.choseBody.classList.add(Theme.DARK);
        refs.choseBody.classList.remove(Theme.LIGHT);

    } else if (checked === false) {
        refs.choseBody.classList.remove(Theme.DARK);
        refs.choseBody.classList.add(Theme.LIGHT);
        localStorage.removeItem('themeIsNow');              
        localStorage.setItem('themeIsNow', refs.choseBody.classList);
    }
};

if (localStorage.getItem('themeIsNow') === Theme.DARK) {
    refs.choseBody.classList.add(Theme.DARK);
    refs.chekboxInput.checked = true;
};