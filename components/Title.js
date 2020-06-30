import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Title() {
  return (
    <View style={styles.title}>
      <Text style={styles.h1}> Today's Schedule</Text>
      <Text style={styles.h2}>{new Date(Date.now()).toLocaleDateString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 25,
  },
  title: {
    //flex: 2,
  },
});

export default Title;
