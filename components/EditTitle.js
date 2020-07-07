import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function EditTitle() {
  return (
    <View>
      <Text style={styles.title}>Edit Record</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#6a097d',
    fontSize: 35,
    fontWeight: 'bold',
    //backgroundColor: 'blue',
  },
});

export default EditTitle;
