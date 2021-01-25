import css from "./style.css";
import debounce from 'lodash.debounce'
import fetchCountries from './fetchCountries'
import template from './Template/template.hbs'




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

}), 1500)

function updateMarkup(data) {
 const markup = template(data)
     refs.list.insertAdjacentHTML('beforeend', markup)
}
