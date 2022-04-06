import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import * as React from 'react';

class CitySearchHistory extends React.Component {
    constructor(props) {
        super(props);

        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick(city) {
        this.props.onSearchSubmit(city);
    }

    render() {
        let citySearchRecord = JSON.parse(localStorage.getItem('searchHistory'));
        return(
            <Container maxWidth='xl' sx={{ display: 'flex', gap: '10px', mb: "10px", mx: 'auto', justifyContent: 'flex-start', alignItems: "center" }}>
                {citySearchRecord.map( (city, index) => 
                    <Button onClick={() => this.buttonClick(city[this.props.language])} 
                        key={city[this.props.language]} size="small" variant="contained" sx={{ borderRadius: 4, backgroundColor: "rgba(0,0,0,.05)", color: "rgba(0,0,0,.87)",  }}
                    >
                        {city[this.props.language]}
                    </Button>
                )}
            </Container>
        )
    }
}

export default CitySearchHistory;