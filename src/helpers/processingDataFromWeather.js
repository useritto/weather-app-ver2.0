// переделать на prepare

export default function processingDataFromWeather(obj, timeZoneOffset) {   
    let weatherInformation = {};
    const date = new Date(obj.dt * 1000);

    weatherInformation.currentTime = getTime( date, timeZoneOffset );
    weatherInformation.weekDay = getWeekDay( date );
    weatherInformation.date = getMonth(date) + ' ' + getMonthDay(date) + 'th';
    weatherInformation.temperatureDay = Math.round(obj.temp.day || obj.temp) + '°';
    weatherInformation.temperatureNight = Math.round(obj.temp.night) + '°';
    weatherInformation.feelsLike = Math.round(obj.feels_like) + '°';
    weatherInformation.pressure = Math.round(obj.pressure * 0.75006)  + ' mm Hg';
    weatherInformation.humidity = obj.humidity + '%';
    weatherInformation.windSpeed = obj.wind_speed + ' m/s';
    weatherInformation.windDeg = getWindDirectByDeg(obj.wind_deg);
    weatherInformation.condition = obj.weather[0].main;
    weatherInformation.description = firstLetterToUpperCase( obj.weather[0].description );
    weatherInformation.image = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@4x.png`;

    function getWindDirectByDeg(windDirect) {
        // N [337.5-360; 0-22.5] NE [22.5-67.5] E [67.5-112.5] SE [112.5-157.5] S [157.5-202.5] SW [202.5-247.5] W [247.5-292.5] NW [292.5-337.5]
        let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        let w = Math.round(windDirect / 45);
        if (w === 8) { w = 0};
        return `${directions[w]}`;
    }

    function firstLetterToUpperCase(condition) {
        return `${condition[0].toUpperCase() + condition.substring(1,)}`
    }

    function getMonth(timestamp) {
        let month = timestamp.getMonth();
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July' ,'August', 'September', 'October', 'November', 'December'];
        return `${months[month]}`;
    }

    function getMonthDay(timestamp) {
        let monthDay = timestamp.getDate();
        return monthDay;
    }

    function getWeekDay(timestamp) {
        let weekDay = timestamp.getDay();
        let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return `${day[weekDay]}`;
    }

    function getTime(timestamp, timezone_offset) {
        let hours = (timestamp.getUTCHours() + timezone_offset / 3600);
        let minutes =  timestamp.getUTCMinutes();
    
        if(hours >= 24) {
            hours = hours - 24;
        }
        if(hours < 10) {
            hours = '0' + hours;
        }; 
        if(minutes < 10) {
            minutes = '0' + minutes;
        };
    
        return ( hours + ':' + minutes );
    }

    return weatherInformation;
}
