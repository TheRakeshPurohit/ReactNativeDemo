import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

function EditTopBar({navigation}) {
  return (
    <View style={styles.EditTopBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View>
          <Icon name="close" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View>
          <Text style={styles.SaveButton}>Save</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  EditTopBar: {
    width: '100%',
    height: '4%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    //marginTop: '3%',
    //backgroundColor: 'red',
  },
  SaveButton: {
    color: 'black',
    fontSize: 24,
    fontWeight: '200',
    marginRight: 15,
    //backgroundColor: 'blue',
  },
});

export default EditTopBar;
