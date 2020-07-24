import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { OPEN_WEATHER_API_KEY } from '@env'

export default class WeatherView extends React.Component {
  state = {
    time: '',
    location: ''
  }

  componentDidMount() {
    // load with geolocation weather data
  }

  componentDidUpdate() {
    // run only if the parent needs update
    if (this.props.update) {
      const city = this.props.citySearch

      // Construct the API url to call
  		let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + OPEN_WEATHER_API_KEY;

      console.log(url);

  		// Call the API, and set the state of the weather forecast
  		fetch(url)
  		.then(response => response.json())
  		.then(data => {
        let isDay = data.sys.sunset > data.dt && data.sys.sunrise < data.dt;
        let newtime = data.dt + data.timezone
        let date = new Date(newtime * 1000);
        let name = data.name + ', ' + data.sys.country

        this.setState({location: name});
        this.props.updateImage(isDay);
  		});
    }
  }

  render() {
    return (
      <View style={styles.weatherViewStyle}>
        <Text style={styles.locationStyle}>{this.state.location}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weatherViewStyle: {
    width: '80%',
    height: '65%',
    backgroundColor: 'white',
    borderRadius: 20,
    opacity: 0.95,
    marginTop: '10%'
  },
  locationStyle: {
    fontSize: 30,
    fontFamily: 'Arial, Helvetica, sans-serif',
  }
});
