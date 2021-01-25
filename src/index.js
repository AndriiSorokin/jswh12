import css from "./style.css";
import debounce from 'lodash.debounce'
import fetchCountries from './fetchCountries'
import template from './Template/template.hbs'

import {success, error,notice, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import "../node_modules/@pnotify/core/dist/BrightTheme.css";
import "../node_modules/@pnotify/core/dist/PNotify.css";
defaultModules.set(PNotifyMobile, {});

const refs = {
  list : document.querySelector('.js-list'),
  input : document.querySelector('.js-countries'),
}

refs.input.addEventListener('input', debounce(() => {
  const inputValue = refs.input.value
  refs.list.innerHTML = ''

  fetchCountries(inputValue)
    .then((countries) => {
      if (countries.status == 200) {
       success({text: 'Страна найдена'})
      } if(countries.status == 404) {
     error({text: 'Введите корректное название'})
      }
       const markup = template(countries)
      refs.list.insertAdjacentHTML('beforeend', markup)
    })
}), 500)

// refs.input.addEventListener('input', debounce(() => {
//   const inputValue = refs.input.value
//   refs.list.innerHTML = ''

//   fetchCountries(inputValue)
//     .then(updateMarkup)

// }), 500)

// function updateMarkup(data) {
//  const markup = template(data)
//   refs.list.insertAdjacentHTML('beforeend', markup)
// }

// function Pisuccess() {
//   const mySuccess = success({
//     text: "I'm a success message.",
//     delay: 1500,
// });
// }

// function Pierror() {
//   const myError = error({
//   text: "I'm an error message."
// });
// }