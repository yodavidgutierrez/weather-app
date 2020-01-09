import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from './../../services/tranformWeather';
import Location from './Location';
import WeatherData  from './WeatherData';
import './styles.css';



class WeatherLocation extends Component {
    constructor(props ) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.hadleUpdateClic();
    }
    
    componentDidUpdate(prevProps, prevState) {
        
    }
    

    hadleUpdateClic =() => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {
            return resolve.json()
        }).then( data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            this.setState( {
                city: data.name,
                data: newWeather,
            });
        });
        
    }
    render(){
        const {onWeatherlocationClick} = this.props;
        const {city, data} = this.state;
        return (<div className="weatherLocationCont" onClick={onWeatherlocationClick}>
        <Location city={city}></Location>
       {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size="50px"></CircularProgress> }
        
    </div>);
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherlocationClick: PropTypes.func,
}

export default WeatherLocation;