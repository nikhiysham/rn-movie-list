/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  FlatList
} from 'react-native';
import Main from 'src/Main';

export default class App extends Component {

  render() {
    console.log('JSON:', json)
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Main />
        </SafeAreaView>
      </View >
    );
  }
};

