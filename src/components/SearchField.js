import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tooltip from '@mui/material/Tooltip';

import { withTranslation } from 'react-i18next';

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchText: props.value || '', weather: {} };

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
            <Container maxWidth='xl' sx={{ mb: 2 }}>
                <Paper sx={{ mt: '10px', mx: 'auto', p: '2px 10px', display: 'flex', flex: 1, borderRadius: 8, backgroundColor: 'rgba(0,0,0,.05)'  }} >
                    <IconButton 
                        sx={{ p: '10px' }} 
                        aria-label="location"
                    >
                        <LocationOnIcon />
                    </IconButton>
                    {/* <TextField   
                        type='text'
                        sx={{ flex: 1 }}
                        placeholder={this.props.t("input_label")}
                        autoFocus
                        error="true"
                        value={this.state.searchText}
                        onChange={this.handleChangeText}
                        onKeyPress={this.onKeyPress}
                    /> */}
                    <InputBase   
                        type='text'
                        sx={{ flex: 1 }}
                        placeholder={this.props.t("input_label")}
                        autoFocus
                        error="true"
                        value={this.state.searchText}
                        onChange={this.handleChangeText}
                        onKeyPress={this.onKeyPress}
                    />
                    {this.state.searchText &&
                        <Tooltip title={this.props.t("tooltip.clear")} arrow>
                            <IconButton 
                                type="submit" 
                                sx={{ p: '10px' }} 
                                aria-label="clear"
                                onClick={() => this.clearInputBaseText()} 
                            >
                                <ClearIcon />
                            </IconButton>
                        </Tooltip>
                    }
                    <Divider sx={{ height: 36, m: 0.5 }} orientation="vertical" />
                        <Tooltip title={this.props.t("tooltip.search")} arrow>
                            <IconButton 
                                type="submit"
                                onClick={this.handleClick}
                                >
                                <SearchIcon />
                            </IconButton>
                        </Tooltip>
                </Paper>
            </Container>
        );
    }
}

export default withTranslation()(SearchField);