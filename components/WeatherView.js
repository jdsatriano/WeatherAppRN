import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { OPEN_WEATHER_API_KEY } from '@env'

export default class WeatherView extends React.Component {

  componentDidUpdate() {
    const city = this.props.citySearch
    
    // Construct the API url to call
		let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + OPEN_WEATHER_API_KEY;

		// Call the API, and set the state of the weather forecast
		fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log(data);
		})
  }

  render() {
    return (
      <View style={styles.weatherViewStyle}>
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
  }
});
