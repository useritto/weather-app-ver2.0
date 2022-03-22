import React from "react";
import Headers from './components/Header';
import SearchField from './components/SearchField';

class WeatherPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { city: '' };

        this.storeLastCity = this.storeLastCity.bind(this);
    }

    storeLastCity(event) {
        this.setState({ city: event.target.value });
    };

    render() {  
        return (
            <div>
                <Headers />
                <SearchField onSearchSubmit={this.storeLastCity} value={'' || this.state.city}/>
            </div>
        )
    };
}

export default WeatherPage;