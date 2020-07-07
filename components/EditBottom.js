import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function EditBottom({navigation}) {
  return (
    <View>
      <Text>{navigation.getParam('first')}</Text>
      <Text>{navigation.getParam('last')}</Text>
      <Text>{navigation.getParam('email')}</Text>
      <Text>{navigation.getParam('address')}</Text>
      <Text>{navigation.getParam('created')}</Text>
      <Text>{navigation.getParam('balance')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default EditBottom;
