import React from "react";
import Headers from './components/Header';
import SearchField from './components/SearchField';
import WeatherView from './components/WeatherView';

import { getCityCoordByName, getWeatherByCoords} from './api/axios';

class WeatherPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { city: '', weather: null };

        this.fetchWeather = this.fetchWeather.bind(this);
    }

    async fetchWeather(searchText) {
        const city = await getCityCoordByName(searchText);
        const weather = (await getWeatherByCoords(city)).data;
        this.setState({ weather, city: searchText });
    }

    render() {  
        return (
            <React.Fragment>
                <Headers />
                <SearchField onSearchSubmit={this.fetchWeather} value={'' || this.state.city}/>

                {this.state.weather && <WeatherView weather={this.state.weather} city={this.state.city} />}
            </React.Fragment>
        )
    };
}

export default WeatherPage;