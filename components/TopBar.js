import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

function TopBar() {
  return (
    <View style={styles.TopBar}>
      <Image
        style={styles.profile}
        source={{uri: 'https://randomuser.me/api/portraits/men/2.jpg'}}
      />

      <Image
        style={styles.profile}
        source={require('../assets/images/search.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    width: '15%',
    height: '100%',
    //backgroundColor: 'blue',
    resizeMode: 'contain',
    borderRadius: 100,
  },
  TopBar: {
    width: '100%',
    height: '30%',
    alignContent: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    //backgroundColor: 'red',
    //flex: 1,
  },
});

export default TopBar;
