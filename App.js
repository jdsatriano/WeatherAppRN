import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import WeatherView from './components/WeatherView.js'
import SearchBar from 'react-native-search-bar';


export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
    console.log(search);
  };

  searchSubmit = (search) => {
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
                ref="searchBar"
                placeholder="Search"
                onChangeText={this.updateSearch}
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
    height: '100%'
  },
  test: {
    backgroundColor: 'white',
  }
});
