import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData'


const ForecastItem = ({weekDay, hour, data}) => (
    <div>
        <div><h3>{weekDay} - {hour} hs</h3></div>
        <WeatherData data={data}></WeatherData>
    </div>
    );

ForecastItem.protoTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        humidity: PropTypes.number.isRequired,
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};


export default ForecastItem;