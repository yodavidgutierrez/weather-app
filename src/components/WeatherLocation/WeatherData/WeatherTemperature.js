import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weathers';
import './styles.css'

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [WINDY]: "windy",
    [RAIN]: "rain",
    [SUN]: "day-sunny",
    [SNOW]: "snow",
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon)
    return <WeatherIcons className="wicon" name={icon} size="2x"/>
    else
    return <WeatherIcons className="wicon" name="day-sunny" size="2x"/>
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;