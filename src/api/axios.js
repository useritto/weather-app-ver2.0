const axios = require('axios').default;
// let language = 'ru';

const API_KEY = '68d761537b68ffc3da82043a20f48ec7';

export function getCityCoordByName(searchText) {
    return axios
         .get(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&appid=${API_KEY}`)
         .then((response) => { console.log(response.data[0]); return response.data[0] })
         .catch((error) => console.error(error))
}

export function getWeatherByCoords({ lat, lon }, locale) {
    console.log(lat, lon, locale);
    return axios
        .get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${locale}&units=metric`)
        .then((response) => { console.log(response.data); return response;  })
        .catch((error) => console.error(error.name))
}
