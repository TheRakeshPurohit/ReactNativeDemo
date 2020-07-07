import React from 'react';
import {StyleSheet, Text, Image, View, TextInput} from 'react-native';

function EditMiddle() {
  return (
    <View style={styles.EditMiddle}>
      <View style={styles.wrapper}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
          style={styles.avatarimg}
        />
      </View>
      <View style={styles.wrapper1}>
        <Text style={{textAlign: 'center'}}>TODAY'S TIME IN</Text>
        <View style={styles.timing}>
          <View>
            <Text>TIME IN</Text>
            <TextInput value="7:00" style={styles.inputbox} />
          </View>
          <View>
            <Text>TIME OUT</Text>
            <TextInput value="15:00" style={styles.inputbox} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  EditMiddle: {
    width: '100%',
    height: '20%',
    //backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: '6%',
  },
  wrapper: {
    width: '25%',
    height: '70%',
    margin: '4%',
  },
  wrapper1: {
    width: '50%',
    height: '70%',
    margin: '4%',
    textAlign: 'center',
    //backgroundColor: 'red',
    marginLeft: '10%',
  },
  timing: {
    alignContent: 'center',
    //backgroundColor: 'blue',
    justifyContent: 'space-around',
    marginTop: '5%',
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  avatarimg: {
    width: '85%',
    height: '85%',
    resizeMode: 'contain',
    borderRadius: 100,
  },
  inputbox: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    fontSize: 27,
    color: '#6a097d',
    fontWeight: 'bold',
  },
});

export default EditMiddle;
