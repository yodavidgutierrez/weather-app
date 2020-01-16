import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';
import {connect} from 'react-redux';
import {getWeatherCities, getCity} from './../reducers';
import * as actions from '../actions';


class LocationListContainer extends Component {
    componentDidMount() {
        const {setWeather, setSelectedCity, cities, city} = this.props
        setWeather(cities);
        setSelectedCity(city);
    }
    
    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
      }
    render() {
        return (
            <LocationList cities={this.props.citiesWeather}
           onSelectedLocation={this.handleSelectedLocation}></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
}
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
/* const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
  }); */

const mapStateToPrps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state),
})
export default connect(mapStateToPrps, mapDispatchToProps)(LocationListContainer);