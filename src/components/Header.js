import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import SelectLanguage from './SelectLanguage';

class Headers extends React.Component {
    constructor(props) {
        super(props);

        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage() {
        if(this.props.value === undefined || this.props.value === null) {
            // console.log('this.state.city is empty and equal undefined');
            return;
        } else {
            // console.log('this.state.city has a name');
            this.props.onSearchSubmit(this.props.value);
        };
    }

    render() {
        return (
            <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: 'none' }}>
                <Toolbar>
                    <Typography component="div" sx={{ flexGrow: 1, color: 'rgba(0,0,0,.87)', fontSize: '1.5rem' }} >
                        WeatherApp
                    </Typography>
                    <SelectLanguage onChangeLanguage={this.changeLanguage} color="primary" />
                </Toolbar>
            </AppBar>
        );
    }
}

export default Headers;
