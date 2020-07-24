import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { OPEN_WEATHER_API_KEY } from '@env'
import Geolocation from '@react-native-community/geolocation';

export default class WeatherView extends React.Component {
  state = {
    location: '',
    icon: '',
    temperature: null,
    feelsLike: null,
    lat: null,
    long: null
  }

  componentDidMount() {
    // load with geolocation weather data
    this.getLocation()
  }

  componentDidUpdate() {
    // run only if the parent needs update
    if (this.props.update) {
      const city = this.props.citySearch
  		let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + OPEN_WEATHER_API_KEY + '&units=imperial';
      this.getWeather(url)
    }
  }

  getWeather(url) {
    // Call the API, and set the state of the weather forecast
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let isDay = data.sys.sunset > data.dt && data.sys.sunrise < data.dt;
      let name = data.name + ', ' + data.sys.country
      let temp = data.main.temp.toString() + 'F'
      let feels = data.main.feels_like.toString() + 'F'
      let description = data.weather[0].description

      this.setState({
        location: name,
        icon: data.weather[0].icon,
        temperature: data.main.temp + ' F',
        feelsLike: data.main.feels_like + ' F',
        description: description
      });
      this.props.updateImage(isDay);
    })
    .catch(error => {
      console.log(error);
    })
  }

  getLocation() {
    navigator.geolocation.watchPosition((position) => {
      this.setState({lat: position.coords.latitude, long: position.coords.longitude})
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      let url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + this.state.lat + '&lon=' + this.state.long + '&appid=' + OPEN_WEATHER_API_KEY + '&units=imperial';
      console.log(url)
      this.getWeather(url)
    }, (error)=>console.log(error));

    /*Geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position);
        console.log(initialPosition)
        this.setState({lat: initialPosition.coords.latitude, long: initialPosition.coords.longitude})
        let url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + this.state.lat + '&lon=' + this.state.long + '&appid=' + OPEN_WEATHER_API_KEY + '&units=imperial';
        this.getWeather(url)
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );*/
	}

  render() {

    return (
      <View style={styles.weatherViewStyle}>
        <Text style={styles.locationStyle}>{this.state.location}</Text>
        <Image
          source={imageMap[this.state.icon]}
        />
        <Text style={styles.dataStyle}>{this.state.description}</Text>
        <Text style={styles.locationStyle}>Temperature</Text>
        <Text style={styles.dataStyle}>{this.state.temperature}</Text>
        <Text style={styles.locationStyle}>Feels Like</Text>
        <Text style={styles.dataStyle}>{this.state.feelsLike}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weatherViewStyle: {
    width: '80%',
    height: '46%',
    backgroundColor: 'white',
    borderRadius: 20,
    opacity: 0.95,
    marginTop: '30%',
    alignItems: 'center',
  },
  locationStyle: {
    fontSize: 30,
    marginTop: '7%',
    fontFamily: 'Arial Rounded MT Bold',
  },
  dataStyle: {
    fontSize: 15
  }
});

const imageMap = {
  '01d': require('../assets/icons/01d.png'),
  '01n': require('../assets/icons/01n.png'),
  '02d': require('../assets/icons/02d.png'),
  '02n': require('../assets/icons/02n.png'),
  '03d': require('../assets/icons/03d.png'),
  '03n': require('../assets/icons/03n.png'),
  '04d': require('../assets/icons/04d.png'),
  '04n': require('../assets/icons/04n.png'),
  '09d': require('../assets/icons/09d.png'),
  '09n': require('../assets/icons/09n.png'),
  '10d': require('../assets/icons/10d.png'),
  '10n': require('../assets/icons/10n.png'),
  '11d': require('../assets/icons/11d.png'),
  '11n': require('../assets/icons/11n.png'),
  '13d': require('../assets/icons/13d.png'),
  '13n': require('../assets/icons/13n.png'),
  '50d': require('../assets/icons/50d.png'),
  '50n': require('../assets/icons/10n.png'),
}
