// import { alert,error,success, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
// import "../node_modules/@pnotify/core/dist/BrightTheme.css";
// import "../node_modules/@pnotify/core/dist/PNotify.css";
// defaultModules.set(PNotifyMobile, {});

function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then((response) => response.json())
}

export default fetchCountries


    // .then(response => {
    //   if(response.status == 200 ){
    //       return  response.json();
    //   } else {
    //     notice = alert({title:'NOT Found', hide: true, delay: 1000})
    // }
    // if(response.status == 404) {
    //     error({text:`error 404`})
    // }
    // })
    // .then(data => {
    //     if(data.length > 10|| !data.length) {
    //         return error({text: 'Введите точный запрос'})
    //     }
    //   if (!data.length) return error({ text: `пустой запрос` })
    //     })