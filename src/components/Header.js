import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

class Headers extends React.Component {
    render() {
        return (
            <Box sx={{ background: 'primary' }}>
            <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: 'none' }}>
                <Toolbar>
                <Typography component="div" sx={{ flexGrow: 1, color: 'rgba(0,0,0,.87)', fontSize: '1.25rem' }} >
                    WeatherApp
                </Typography>
                </Toolbar>
            </AppBar>
            </Box>
        );
    }
}

export default Headers;
