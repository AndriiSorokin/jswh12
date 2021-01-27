import css from "./style.css";
import debounce from 'lodash.debounce'
import fetchCountries from './fetchCountries'
import template from './Template/template.hbs'
import templateList from './Template/templateList.hbs'
import {success, error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
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

  if (inputValue.length > 0) {
  fetchCountries(inputValue)
    .then(data => {
      console.log(data);
      if (data.length > 10) {
        error({ text: 'Слишком много стран' })
        return;
      }
      if (data.status === 404) {
      return  error({text:'Не правильный ввод'})
      }
      if (data.length < 10 && data.length > 1) {
       return  moreCountry(data)

      }
      if (data.length == 1) {
        success({text: 'Страна найдена'})
        return updateMarkup(data)
      }
    })
  }
}, 500))

function updateMarkup(data) {
 const markup = template(data)
  refs.list.insertAdjacentHTML('beforeend', markup)
}

function moreCountry(data) {
  const markup = templateList(data)
  refs.list.insertAdjacentHTML('beforeend', markup)
}

