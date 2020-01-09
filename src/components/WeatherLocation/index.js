import React, {Component} from 'react';
import Location from './Location';
import WeatherData  from './WeatherData';
import transformWeather from './../../services/tranformWeather';
import './styles.css';
import {
    SUN,
    RAIN,
} from '../../constants/weathers';

const location= "Ibague,co";
const api_key= "a36f055c9329953d91fd83aeb3281158"
const url_base_weather= "http://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

class WeatherLocation extends Component {
    constructor( ) {
        super();
        this.state = {
            city: 'Medellin',
            data: data,
        };
    }

    hadleUpdateClic =() => {
        fetch(api_weather).then( resolve => {
            return resolve.json()
        }).then( data => {
            const newWeather = transformWeather(data);
            this.setState( {
                city: data.name,
                data: newWeather,
            });
        });
        
    }
    render(){
        const {city, data} = this.state;
        return (<div className="weatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.hadleUpdateClic}>Actualizar</button>
    </div>);
    }
};

export default WeatherLocation;