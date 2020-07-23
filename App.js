import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import WeatherView from './components/WeatherView.js'


export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
    console.log(search);
  };

  render() {
    const { search } = this.state;

    return (
        <View style={styles.container}>
          <ImageBackground
            source={require('./assets/nighttime.jpg')}
            style={styles.weatherViewStyle}
          >
            <View style={styles.searchBarStyle}>
              <SearchBar
                placeholder="Search a city.."
                onChangeText={this.updateSearch}
                value={search}
                style={styles.test}
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
    backgroundColor: 'white',
    marginTop: '10%'
  },
  weatherViewStyle: {
    width:'100%',
    height: '100%'
  },
  test: {
    backgroundColor: 'white',
  }
});
