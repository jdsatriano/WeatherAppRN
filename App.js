import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, Button, Keyboard } from 'react-native';
import WeatherView from './components/WeatherView.js'
import SearchBar from 'react-native-search-bar';
navigator.geolocation = require('@react-native-community/geolocation');


export default class App extends React.Component {
  state = {
    search: '',
    isDay: true,
    needUpdate: false,
    getCurrent: false
  };

  searchSubmit = (search) => {
    this.refs.searchBar.clearText();
    this.refs.searchBar.unFocus();
    this.setState({search: search, needUpdate: true, getCurrent: false});
  };

  updateImage = (isDay) => {
    this.setState({isDay: isDay, needUpdate: false, getCurrent: false});
  }

  showCurrentLocation = () => {
    this.setState({getCurrent: true, needUpdate: false})
  }

  render() {
    const search = this.state.search;
    const isDay = this.state.isDay;

    //console.log("hola");

    return (
        <View style={styles.container}>
          <ImageBackground
            source={isDay ? require('./assets/daytime.jpg') : require('./assets/nighttime.jpg')}
            style={styles.weatherViewStyle}
          >
            <View style={styles.searchBarStyle}>
              <SearchBar
                ref="searchBar"
                placeholder='Search for city, state, or country'
                onSearchButtonPress={this.searchSubmit}
                barStyle='black'
              />
            </View>
            <WeatherView citySearch={search} updateImage={this.updateImage} update={this.state.needUpdate} getCurrent={this.state.getCurrent}/>
            <View style={styles.currentLocStyle}>
              <Button
                onPress={this.showCurrentLocation}
                title="Get for current location"
                color="white"
              />
            </View>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  searchBarStyle: {
    width: '100%',
    backgroundColor: 'black',
    marginTop: '10%'
  },
  weatherViewStyle: {
    width:'100%',
    height: '100%',
    alignItems: 'center'
  },
  test: {
    backgroundColor: 'white',
  },
  currentLocStyle: {
    marginTop: '20%',
    backgroundColor: 'blue',
    width: '60%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  }
});
