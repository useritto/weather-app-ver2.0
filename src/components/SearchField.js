import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { getCityCoordByName, getWeatherByCoords} from '../api/axios';
import MainCard from './MainCard';
import processingDataFromWeather from '../helpers/processingDataFromWeather';
import AdditionalCard from './AdditionalCard';
import Grid from '@mui/material/Grid';

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchText: props.city || '', city: '', weather: {} };

        this.handleChangeText = this.handleChangeText.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.clearInputBaseText = this.clearInputBaseText.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleChangeText(event) {
        this.setState({searchText: event.target.value});
    }

    onKeyPress(event) {
        if(event.charCode === 13) {
            this.handleClick();
        };
    }

    clearInputBaseText() {
        this.setState({searchText: ''});
    }

    async handleClick() {
        console.log('Click!');
        const city = await getCityCoordByName(this.state.searchText);
        // if(city.lat === 0) {this.handleError};
        this.setState({ weather: (await getWeatherByCoords(city)).data, city: this.state.searchText });
        console.log(this.state.weather);
    }

    handleError() {
        console.log('UPS!');
    }

    render() {
        return (
            <div>
                <Container maxWidth='sm' sx={{ mb: 10 }}>
                    <Paper sx={{ mt: '10px', mx: 'auto', p: '2px 10px', display: 'flex', flex: 1, borderRadius: '25px', backgroundColor: 'rgba(0,0,0,.05)', color: '#fe224d' }} >
                        <IconButton 
                            type="submit" 
                            sx={{ p: '10px' }} 
                            aria-label="clear"
                            onClick={() => this.clearInputBaseText()} 
                        >
                            <LocationOnIcon />
                        </IconButton>
                        <InputBase   
                            type='text'
                            sx={{ flex: 1 }}
                            placeholder='Enter the city name'
                            autoFocus
                            value={this.state.searchText}
                            onChange={this.handleChangeText}
                            onKeyPress={this.onKeyPress}
                        />
                        {this.state.searchText &&
                            <IconButton 
                                type="submit" 
                                sx={{ p: '10px' }} 
                                aria-label="clear"
                                onClick={() => this.clearInputBaseText()} 
                            >
                                <ClearIcon />
                            </IconButton>
                        }
                        <Divider sx={{ height: 36, m: 0.5 }} orientation="vertical" />
                            <IconButton 
                                type='submit'
                                onClick={this.handleClick}
                            >
                                <SearchIcon />
                            </IconButton>
                    </Paper>
                </Container>
                {this.state.city &&
                    <Container maxWidth='false'>
                        <MainCard 
                            weather={ processingDataFromWeather(this.state.weather.current, this.state.weather.timezone_offset) } 
                            city = { this.state.city[0].toUpperCase() + this.state.city.substring(1,) }
                        />
                        {/* <Container sx={{ display: 'flex', flexDirection: 'row' }} > */}
                        <Box display="flex">
                            <Grid container spacing={1} sx={{  }}>
                                { this.state.weather.daily.map( currentDay => <AdditionalCard weather = { processingDataFromWeather(currentDay, this.state.weather.timezone_offset) } /> ) }
                            </Grid>
                        </Box>
                        {/* </Container> */}
                    </Container>
                    }
            </div>
        );
    }
}

export default SearchField;
