import React from 'react';
import {StyleSheet, View} from 'react-native';
import TopBar from './TopBar';
import Title from './Title';
import ListView from './ListView';

function HomeScreen() {
  return (
    <View>
      <TopBar />
      <Title />
      <ListView />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
