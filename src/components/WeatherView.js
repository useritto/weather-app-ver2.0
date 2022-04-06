import * as React from 'react';
import Container from '@mui/material/Container';
import WeatherCard from './WeatherCard';
import WeatherMiniCard from './WeatherMiniCard';
import { prepareWeatherData } from '../helpers/formatters';

class WeatherView extends React.Component {
    render() {
        return(
            <Container maxWidth='xl' disableGutters sx={{ paddingX: 0 }}>
                <WeatherCard 
                    weather={prepareWeatherData(this.props.weather.current, this.props.weather.timezone, this.props.locale)} 
                    city = {this.props.city}
                />
                <Container maxWidth='xl'>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        {this.props.weather.daily.map( day => 
                            <WeatherMiniCard weather={prepareWeatherData(day, this.props.weather.timezone, this.props.locale)} /> 
                        )}
                    </div>
                </Container>
            </Container>
        )
    }
}

export default WeatherView;