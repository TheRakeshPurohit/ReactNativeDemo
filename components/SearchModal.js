import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, TextInput} from 'react-native';

function SearchModal() {
  const [searchedFor, setSearchedFor] = useState('');

  //const textModified = () => {};

  return (
    <View style={styles.modal}>
      <View style={styles.searchbox}>
        <TextInput
          //autoFocus={true}
          style={styles.searchinputbox}
          placeholder="Search"
          value={searchedFor}
          onChange={(e) => {
            setSearchedFor(e.target.value);
          }}
        />
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
    width: '84%',
    marginLeft: 9,
  },
  searchinputbox: {
    //backgroundColor: 'red',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    fontSize: 35,
    fontWeight: 'bold',
    //margin: '5%',
  },
});

export default SearchModal;
