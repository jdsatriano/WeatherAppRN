import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { OPEN_WEATHER_API_KEY } from '@env'

export default class WeatherView extends React.Component {

  componentDidMount() {
    // Construct the API url to call
		let url = 'https://api.openweathermap.org/data/2.5/weather?q=Houston' + '&appid=' + OPEN_WEATHER_API_KEY;

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
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});
