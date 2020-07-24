import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { OPEN_WEATHER_API_KEY } from '@env'

export default class WeatherView extends React.Component {
  state = {
    time: '',
    location: '',
    icon: '',
    temperature: null,
    feelsLike: null
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

        this.setState({
          location: name,
          icon: data.weather[0].icon,
          temperature: data.main.temp,
          feelsLike: data.main.feels_like
        });
        this.props.updateImage(isDay);
  		});
    }
  }

  render() {
    return (
      <View style={styles.weatherViewStyle}>
        <Text style={styles.locationStyle}>{this.state.location}</Text>
        <Image
          source={imageMap[this.state.icon]}
        />
        <Text style={styles.locationStyle}>Temperature</Text>
        <Text>{this.state.temperature}</Text>
        <Text style={styles.locationStyle}>Feels Like</Text>
        <Text>{this.state.feelsLike}</Text>

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
    marginTop: '10%',
    alignItems: 'center',
  },
  locationStyle: {
    fontSize: 30,
    marginTop: '5%',
    fontFamily: 'Arial Rounded MT Bold',
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
