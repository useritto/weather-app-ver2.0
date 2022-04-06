import React from 'react';
import i18next from 'i18next';
import Headers from './components/Header';
import SearchField from './components/SearchField';
import CitySearchHistory from './components/CitySearchHistory';
import WeatherView from './components/WeatherView';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { getCityCoordByName, getWeatherByCoords} from './api/axios';
import {languageByLocaleName} from "./helpers/formatters";

class WeatherPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { city: '', weather: null, isLoading: false };

        this.fetchWeather = this.fetchWeather.bind(this);
        this.saveCityHistory = this.saveCityHistory.bind(this);
    }

    render() {
        const locale = i18next.language || localStorage.getItem('i18nextLng') || 'ru-RU';
        const language = languageByLocaleName(locale);
        return (
            <React.Fragment>
                <Headers onSearchSubmit={this.fetchWeather} value={this.state.city[language]}/>
                <SearchField onSearchSubmit={this.fetchWeather} value={'' || this.state.city[language]} />
                <CitySearchHistory onSearchSubmit={this.fetchWeather} language={language}/>
                {(!this.state.isLoading 
                    ? this.state.weather && <WeatherView weather={this.state.weather} city={this.state.city} locale={locale} language={language}/>
                    : <Box sx={{ height: "400px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <CircularProgress thickness={1.5} size={100}/>
                    </Box>
                )}
            </React.Fragment>
        )
    };

    // componentDidMount() {
    //     i18n.on('languageChanged', this.fetchWeather(this.state.city))
    // }
    
    async fetchWeather(searchText) {
        this.setState({isLoading: true});
        this.setState({locale: i18next.language});
        const city = await getCityCoordByName(searchText);
        const weather = (await getWeatherByCoords(city, this.state.locale)).data;
        this.setState({ weather, city: {ru: city.local_names.ru , en: city.local_names.en || city.name}, isLoading: false });
        this.saveCityHistory(this.state.city);
    }
    
    saveCityHistory(cityName) {
        let comparasion;
        const citySearchRecord = localStorage.searchHistory ? JSON.parse(localStorage.searchHistory) : [];
        if (citySearchRecord.length === 0) {
            citySearchRecord.unshift(cityName);
            localStorage.setItem('searchHistory', JSON.stringify(citySearchRecord));
            return;
        } else {
            for (let i=0; i < citySearchRecord.length; i++) {
                if (citySearchRecord[i].ru === cityName.ru) {
                    comparasion = true;
                    break;
                }
            }
            if (comparasion) {
                return;
            } else {
                citySearchRecord.unshift(cityName);
                localStorage.setItem('searchHistory', JSON.stringify(citySearchRecord));
                return;
            }
        }
    }
}

export default WeatherPage;
