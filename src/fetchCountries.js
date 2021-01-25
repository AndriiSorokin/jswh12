function fetchCountries(searchQuery) {
 return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
   .then((response) => response.json())
}

export default fetchCountries


    // .then(response => {
    //   if(response.status == 200 ){
    //       return  response.json();
    //   } else {
    //     norice = alert({title:'NOT Found', hide: true, delay: 1000})
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