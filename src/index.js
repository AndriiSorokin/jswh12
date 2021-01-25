import css from "./style.css";
import debounce from 'lodash.debounce'
import fetchCountries from './fetchCountries'
import template from './Template/template.hbs'

// import { alert,error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
// import "../node_modules/@pnotify/core/dist/BrightTheme.css";
// import "../node_modules/@pnotify/core/dist/PNotify.css";
// defaultModules.set(PNotifyMobile, {});



const refs = {
  list : document.querySelector('.js-list'),
  input : document.querySelector('.js-countries'),
}

refs.input.addEventListener('input', debounce(() => {

  const countriesName = refs.input.value
  refs.list.innerHTML = ''

  fetchCountries(countriesName)
    .then(updateMarkup)
    .catch(error => console.error(error))

}), 500)

function updateMarkup(data) {
 const markup = template(data)
     refs.list.insertAdjacentHTML('beforeend', markup)
}

