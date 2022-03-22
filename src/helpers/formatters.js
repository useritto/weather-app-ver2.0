const locale = 'en-US';

function getWindDirectByDeg(windDirect) {
    // N [337.5-360; 0-22.5] NE [22.5-67.5] E [67.5-112.5] SE [112.5-157.5] S [157.5-202.5] SW [202.5-247.5] W [247.5-292.5] NW [292.5-337.5]
    let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    let w = Math.round(windDirect / 45);
    if (w === 8) { w = 0};
    return `${directions[w]}`;
}

export function firstLetterToUpperCase(condition) {
    return `${condition[0].toUpperCase() + condition.substring(1,)}`
}

export function prepareWeatherData(weatherData, timeZoneName) {
    const date = new Date(weatherData.dt * 1000);
    return {
        currentTime: date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', timeZone: timeZoneName }),
        weekDay: date.toLocaleDateString(locale, { weekday: 'long' }),
        date: date.toLocaleDateString(locale, { month: 'long', day: 'numeric' }),
        temperatureDay: Math.round(weatherData.temp.day || weatherData.temp) + '°',
        temperatureNight: Math.round(weatherData.temp.night) + '°',
        feelsLike: Math.round(weatherData.feels_like) + '°',
        pressure: Math.round(weatherData.pressure * 0.75006)  + ' mm Hg',
        humidity: weatherData.humidity + '%',
        windSpeed: weatherData.wind_speed + ' m/s',
        windDeg: getWindDirectByDeg(weatherData.wind_deg),
        condition: weatherData.weather[0].main,
        description: firstLetterToUpperCase( weatherData.weather[0].description ),
        image: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
    }
}
