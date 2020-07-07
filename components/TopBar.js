import React, {useState} from 'react';
import {StyleSheet, Modal, View, Image, TouchableOpacity} from 'react-native';
import SearchModal from './SearchModal';

function TopBar({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={styles.TopBar}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalOpen}
        onRequestClose={() => {
          setModalOpen(!modalOpen);
        }}>
        <SearchModal navigation={navigation} />
      </Modal>
      <Image
        style={styles.profile}
        source={{uri: 'https://randomuser.me/api/portraits/men/2.jpg'}}
      />
      <TouchableOpacity
        style={styles.btnsearch}
        onPress={() => setModalOpen(!modalOpen)}>
        <Image
          style={styles.btnimg}
          source={require('../assets/images/search.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    width: '10%',
    height: '100%',
    //backgroundColor: 'blue',
    resizeMode: 'contain',
    borderRadius: 100,
  },
  btnimg: {
    width: '60%',
    height: '100%',
    resizeMode: 'contain',
  },
  btnsearch: {
    width: '9%',
    height: '100%',
    //backgroundColor: 'blue',
    resizeMode: 'contain',
    borderRadius: 100,
  },
  TopBar: {
    width: '100%',
    height: '5%',
    alignContent: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    //backgroundColor: 'red',
    //flex: 1,
  },
});

export default TopBar;
