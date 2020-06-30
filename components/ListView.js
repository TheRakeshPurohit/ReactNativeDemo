import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

function ListView() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb')
      .then((res) => {
        // console.warn(res.data.results);
        setPosts(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.warn(err);
      });
  }, []);

  const RenderItem = ({item}) => {
    // console.log(item.first);
    return (
      <TouchableHighlight>
        <View>
          <Text>{item.first}</Text>
          <Text>{item.last}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={posts}
          renderItem={({item}) => <RenderItem item={item} />}
          keyExtractor={(item) => item.first}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'red',
  },
});

export default ListView;
