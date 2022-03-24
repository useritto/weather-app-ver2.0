import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import SelectLanguage from './SelectLanguage';

class Headers extends React.Component {
    render() {
        return (
            <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: 'none' }}>
                <Toolbar>
                    <Typography component="div" sx={{ flexGrow: 1, color: 'rgba(0,0,0,.87)', fontSize: '1.25rem' }} >
                        WeatherApp
                    </Typography>
                    <SelectLanguage color="primary" />
                </Toolbar>
            </AppBar>
        );
    }
}

export default Headers;
