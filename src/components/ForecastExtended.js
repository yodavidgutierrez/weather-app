import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import {url_base_forecast, api_key} from './../constants/api_url';
import WeatherData from './WeatherLocation/WeatherData';
import trasnformForecast from './../services/TransformForecast';
import './styles.css';
import transformForecast from './../services/TransformForecast';
import { weekdays } from 'moment';

class ForecastExtended extends Component {
    constructor(){
        super();
        this.state= {forecastData: null}
    }
    componentDidMount(){
        this.updateCity(this.props.city);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null})
            this.updateCity(nextProps.city);
        }
    }
    
    updateCity = city => {
        const forecast_key = `${url_base_forecast}?q=${city}&APPID=${api_key}`;
        fetch(forecast_key).then(
            data => ( data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData})
            }
        )
    }
    redenerForecastItem(forecastData) {
         return forecastData.map( forecast =>(
         <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour= {forecast.hour} 
            data={forecast.data}>
         </ForecastItem>) ); 
    }
    renderProgress = () => {
        return <h3>Cargando Pronostico Extendido...</h3>;
    }
    render() {
        const {city} = this.props;
        const {forecastData} = this.state
    return (
            <div>
                <h2 className="foreCast-title">Pronostico Extendido para {city}</h2>
                { forecastData ? this.redenerForecastItem(forecastData) : this.renderProgress()}
                </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;