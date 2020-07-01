import React from 'react';
import {StyleSheet, View, Dimensions, TextInput} from 'react-native';

function SearchModal() {
  return (
    <View style={styles.modal}>
      <View style={styles.searchbox}>
        <TextInput style={styles.searchinputbox} placeholder="Search" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  searchbox: {
    marginTop: '20%',
  },
  searchinputbox: {
    //backgroundColor: 'red',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    margin: '5%',
  },
});

export default SearchModal;
