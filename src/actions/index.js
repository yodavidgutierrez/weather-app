import {url_base_forecast, api_key, url_base_weather} from './../constants/api_url';
import transformForecast from './../services/TransformForecast';
import transformWeather from './../services/tranformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload})
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload})

export const setSelectedCity = payload => {
    return dispatch => {
        const forecast_key = `${url_base_forecast}?q=${payload}&APPID=${api_key}`;
        dispatch(setCity(payload));
        return fetch(forecast_key).then(
            data => ( data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                dispatch(setForecastData({city: payload, forecastData}));
            }
        );
    };
};


export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = `${url_base_weather}?q=${city}&APPID=${api_key}`;
            fetch(api_weather).then( data => {
                return data.json()
            }).then( weather_data => {
                const weather = transformWeather(weather_data);
                dispatch(setWeatherCity({city, weather}))
            });
        });

    }
}
