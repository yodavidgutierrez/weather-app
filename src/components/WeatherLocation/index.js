import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData  from './WeatherData';
import './styles.css';


/* hadleUpdateClic =() => {
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
    
} */
const  WeatherLocation =  ({onWeatherLocationClick,city, data}) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? <WeatherData data={data}>
        </WeatherData> : <CircularProgress size="50px"></CircularProgress>}   
    </div>
);


WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
    data: PropTypes.shape({
        humidity: PropTypes.number.isRequired,
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        wind: PropTypes.string.isRequired,
    }),
    children: PropTypes.node.isRequired,
}

export default WeatherLocation;