import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Title() {
  return (
    <SafeAreaView>
      <View style={styles.title}>
        <Text style={styles.h1}> Today's Schedule</Text>
        <Text style={styles.h2}>
          {new Date(Date.now()).toLocaleDateString()}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  h2: {
    marginLeft: 15,
    fontSize: 15,
  },
  title: {
    //flex: 1,
    //backgroundColor: 'red',
  },
});

export default Title;
