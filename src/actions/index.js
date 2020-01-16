import {url_base_forecast, api_key} from './../constants/api_url';
import transformForecast from './../services/TransformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

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