import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
            this.props.onSearchSubmit(this.state.searchText);
        };
    }

    clearInputBaseText() {
        this.setState({searchText: ''});
    }

    async handleClick() {
        this.props.onSearchSubmit(this.state.searchText);
    }

    handleError() {
        console.log('UPS!');
    }

    render() {
        return (
            <Container maxWidth='lg' sx={{ mb: 10 }}>
                <Paper sx={{ mt: '10px', mx: 'auto', p: '2px 10px', display: 'flex', flex: 1, borderRadius: '25px', backgroundColor: 'rgba(0,0,0,.05)'  }} >
                    <IconButton 
                        sx={{ p: '10px' }} 
                        aria-label="location"
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
        );
    }
}

export default SearchField;