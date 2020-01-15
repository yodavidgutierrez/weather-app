import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css'

const WeatherData = ( {data: {humidity, temperature, weatherState, wind}}) => (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        humidity: PropTypes.number.isRequired,
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherData;