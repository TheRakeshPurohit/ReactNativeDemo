import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {ListItem} from 'react-native-elements';

function ListView() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id] = useState(1);

  useEffect(() => {
    axios
      .get('https://www.randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb')
      .then((res) => {
        //console.log(res.data.results[0]);
        setPosts(res.data.results[0]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.warn(err);
      });
  }, []);

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.item}>
        <ListItem
          style={styles.card}
          leftAvatar={{
            source: {uri: `https://randomuser.me/api/portraits/men/${id}.jpg`},
          }}
          title={`${item.first} ${item.last}`}
          subtitle={'7 AM'}
          rightIcon={{type: 'Feather', name: 'edit', size: 30}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.list}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={posts}
          renderItem={({item}) => <RenderItem item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    //backgroundColor: 'red',
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
