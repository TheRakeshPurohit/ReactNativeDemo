import React from 'react';
import {StyleSheet, View} from 'react-native';
import TopBar from './TopBar';
import Title from './Title';
import ListView from './ListView';

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <TopBar style={styles.TopBar} />
      <Title style={styles.Title} />
      <ListView style={styles.ListView} />
    </View>
  );
}

const styles = StyleSheet.create({
  TopBar: {
    backgroundColor: 'blue',
  },
  Title: {
    backgroundColor: 'pink',
  },
  ListView: {
    backgroundColor: 'yellow',
  },
  screen: {
    //backgroundColor: 'orange',
    //flex: 1,
  },
});

export default HomeScreen;
