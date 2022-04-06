function getWindDirectByDeg(windDirect) {
    // N [337.5-360; 0-22.5] NE [22.5-67.5] E [67.5-112.5] SE [112.5-157.5] S [157.5-202.5] SW [202.5-247.5] W [247.5-292.5] NW [292.5-337.5]
    let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    let w = Math.round(windDirect / 45);
    if (w === 8) { w = 0};
    return `${directions[w]}`;
}

export function firstLetterToUpperCase(condition) {
    return `${condition[0].toUpperCase() + condition.substring(1)}`
}

export function prepareWeatherData(weatherData, timeZoneName, locale) {
    const date = new Date(weatherData.dt * 1000);

    return { 
        currentTime: date.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric', timeZone: timeZoneName }),
        weekDay: firstLetterToUpperCase( date.toLocaleDateString(locale, { weekday: 'long' }) ),
        date: date.toLocaleDateString(locale, { month: 'long', day: 'numeric' }),
        temperatureDay: Math.round(weatherData.temp.day || weatherData.temp) + '°',
        temperatureNight: Math.round(weatherData.temp.night) + '°',
        feelsLike: Math.round(weatherData.feels_like) + '°',
        pressure: Math.round(weatherData.pressure * 0.75006),
        humidity: weatherData.humidity + '%',
        windSpeed: weatherData.wind_speed,
        windDeg: getWindDirectByDeg(weatherData.wind_deg),
        description: firstLetterToUpperCase( weatherData.weather[0].description ),
        image: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
    }
}
