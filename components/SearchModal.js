import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {PostsContext} from './HomeScreen';
import {ListItem} from 'react-native-elements';

function SearchModal() {
  const [searchedFor, setSearchedFor] = useState('');
  const postsContext = useContext(PostsContext);
  const [loading, setLoading] = useState(false);
  const [id] = useState(1);
  const [arrayholder] = useState([]);

  const RenderItem = ({item}) => {
    setLoading(false);
    return (
      <TouchableOpacity style={styles.item}>
        <ListItem
          style={styles.card}
          leftAvatar={{
            source: {uri: `https://randomuser.me/api/portraits/men/${id}.jpg`},
          }}
          title={`${item.first} ${item.last}`}
          subtitle={
            <View>
              <Text>{item.address}</Text>
              <Text>{item.created}</Text>
            </View>
          }
        />
      </TouchableOpacity>
    );
  };

  const searchFilterFunction = (text) => {
    setSearchedFor(text);
    const newData = arrayholder.filter((item) => {
      const itemData = `${item.first.toUpperCase()} ${item.last.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) >= 0;
    });
    postsContext.postfunc(newData);
  };

  const renderHeader = () => {
    return (
      <View style={styles.searchbox}>
        <TextInput
          autoFocus={true}
          style={styles.searchinputbox}
          placeholder="Search"
          value={searchedFor}
          onChangeText={(text) => searchFilterFunction(text)}
        />
      </View>
    );
  };

  const renderSeparator = () => {
    return <View style={styles.renderSeparator} />;
  };

  return (
    <View style={styles.modal}>
      <View style={styles.list}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={postsContext.postObj}
            renderItem={({item}) => <RenderItem item={item} />}
            extraData={postsContext.postObj}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={renderHeader}
            ItemSeparatorComponent={renderSeparator}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  renderSeparator: {
    height: 1,
    backgroundColor: 'black',
    width: '100%',
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
    color: '#6a097d',
    fontWeight: 'bold',
    //margin: '5%',
  },
  renderFooter: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE',
  },
  list: {
    marginLeft: 15,
  },
});

export default SearchModal;
