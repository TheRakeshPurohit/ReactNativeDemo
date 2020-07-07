import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import {PostsContext} from './HomeScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

function ListView({navigation}) {
  const postsContext = useContext(PostsContext);
  //const [loading, setLoading] = useState(false);
  const [id] = useState(1);

  const RenderItem = ({item}) => {
    //setLoading(false);
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Details', item)}>
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
          rightIcon={{type: 'Feather', name: 'edit', size: 30}}
        />
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => {
    return <View style={styles.renderSeparator} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.list}>
        {/* {loading ? (
        <ActivityIndicator />
      ) : ( */}
        <FlatList
          data={postsContext.postObj}
          renderItem={({item}) => <RenderItem item={item} />}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    //backgroundColor: 'blue',
  },
  renderSeparator: {
    height: 1,
    backgroundColor: 'black',
    width: '100%',
  },
  item: {
    width: '100%',
    //backgroundColor: 'pink',
  },
  card: {
    flexDirection: 'column',
  },
  leftAvatar: {
    width: '5%',
    //height: '5%',
    //backgroundColor: 'blue',
    resizeMode: 'contain',
  },
});

export default ListView;
