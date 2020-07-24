import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import WeatherView from './components/WeatherView.js'
import SearchBar from 'react-native-search-bar';


export default class App extends React.Component {
  state = {
    search: '',
    isDay: true,
    needUpdate: false
  };

  searchSubmit = (search) => {
    this.setState({search: search, needUpdate: true});
    this.refs.searchBar.clearText();
  };

  updateImage = (isDay) => {
    this.setState({isDay: isDay, needUpdate: false});
  }

  render() {
    const search = this.state.search;
    const isDay = this.state.isDay;

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
            <WeatherView citySearch={search} updateImage={this.updateImage} update={this.state.needUpdate}/>
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
  }
});
