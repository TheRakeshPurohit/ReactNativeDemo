import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import axios from 'axios';

function ListView() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb')
      .then((res) => {
        console.warn(res.data.results);
        setPosts(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  }, []);

  const renderItem = ({item}) => {
    <View key={item.first}>
      <TouchableHighlight>
        <View>
          <Text>{item.first}</Text>
          <Text>{item.last}</Text>
        </View>
      </TouchableHighlight>
    </View>;
  };

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={posts}
          keyExtractor={(item, index) => item.key}
          renderItem={(item) => {
            renderItem(item);
          }}
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
