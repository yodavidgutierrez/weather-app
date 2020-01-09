import React from 'react';
import {PropTypes} from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({cities}) => (
    <div>
        <WeatherLocation city="Bogota,col"></WeatherLocation>
        <WeatherLocation city="Buenos Aires,ar"></WeatherLocation>
        <WeatherLocation city="New York,US"></WeatherLocation>
    </div>
);

LocationList.protoTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;