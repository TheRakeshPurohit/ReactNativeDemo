import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import EditTopBar from './EditTopBar';
import EditTitle from './EditTitle';
import EditMiddle from './EditMiddle';
//import EditBottom from './EditBottom';

const DetailsPage = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.DetailsPage}>
        <EditTopBar navigation={navigation} />
        <EditTitle />
        <EditMiddle />
        <View>
          <Text>
            Name: {navigation.getParam('first')} {navigation.getParam('last')}
          </Text>
          <Text>Email: {navigation.getParam('email')}</Text>
          <Text>Address: {navigation.getParam('address')}</Text>
          <Text>Created: {navigation.getParam('created')}</Text>
          <Text>Balance: {navigation.getParam('balance')}</Text>
        </View>
        {/* <EditBottom /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  DetailsPage: {
    width: '100%',
    height: '100%',
    margin: 5,
    flexDirection: 'column',
  },
});

export default DetailsPage;
