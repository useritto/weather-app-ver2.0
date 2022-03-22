import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import MainCard from './MainCard';
import { prepareWeatherData, firstLetterToUpperCase } from '../helpers/formatters';
import AdditionalCard from './AdditionalCard';
import Grid from '@mui/material/Grid';

class WeatherView extends React.Component {
    constructor(props) {
        super(props);

        this.cityName = this.cityName.bind(this);
    }

    cityName() {
        return firstLetterToUpperCase(this.props.city);
    }

    render() {
        return (
            <Container maxWidth='false'>
                <MainCard 
                    weather={prepareWeatherData(this.props.weather.current, this.props.weather.timezone)} 
                    city={this.cityName()}
                />
                <Box display="flex">
                    <div style={{display: 'flex', gap: '20px', justifyContent: 'center', width: '100%'}}>
                        {this.props.weather.daily.map(day =>
                            <AdditionalCard weather={prepareWeatherData(day, this.props.weather.timezone)} />
                        )}
                    </div>
                </Box>
            </Container>
        );
    }
}

export default WeatherView;
