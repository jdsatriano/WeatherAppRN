import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class WeatherView extends React.Component {
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
