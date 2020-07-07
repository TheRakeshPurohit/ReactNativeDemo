import React, {useState, useContext, useEffect} from 'react';
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
import {SafeAreaView} from 'react-native-safe-area-context';

function SearchModal({navigation}) {
  const [searchedFor, setSearchedFor] = useState('');
  const postsContext = useContext(PostsContext);
  const [loading, setLoading] = useState(false);
  let id = 1;
  const [searchlist, setSearchlist] = useState([]);

  const RenderItem = ({item}) => {
    setLoading(false);
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', item)}>
        <ListItem
          style={styles.card}
          leftAvatar={{
            source: {
              uri: `https://randomuser.me/api/portraits/men/${id}.jpg`,
            },
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
    console.log(text); //prints input text on changetext
    const newData = searchlist.filter((item) => {
      const itemData = `${item.first.toUpperCase()} ${item.last.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) >= 0;
    });

    setSearchlist(newData);
    setSearchedFor(text);
  };

  const renderSeparator = () => {
    return <View style={styles.renderSeparator} />;
  };

  useEffect(() => {
    setSearchlist(postsContext.postObj);
  }, [postsContext.postObj]);
  return (
    <SafeAreaView>
      <View style={styles.modal}>
        <View style={styles.searchbox}>
          <TextInput
            autoFocus={true}
            style={styles.searchinputbox}
            placeholder="Search"
            value={searchedFor}
            onChangeText={(text) => searchFilterFunction(text)}
          />
        </View>
        <View style={styles.list}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={searchlist}
              renderItem={({item}) => <RenderItem item={item} />}
              //renderItem={RenderItem}
              //extraData={searchlist}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={renderSeparator}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
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
    borderBottomColor: '#6a097d',
    borderBottomWidth: 2,
    marginHorizontal: 15,
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
