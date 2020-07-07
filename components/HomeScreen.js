import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import TopBar from './TopBar';
import Title from './Title';
import ListView from './ListView';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';

export const PostsContext = React.createContext();

function HomeScreen(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb')
      .then((res) => {
        //console.warn(res.data.results[0]);
        setPosts(res.data.results[0]);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <SafeAreaView>
      <View>
        <PostsContext.Provider
          value={{
            postObj: posts,
            postfunc: setPosts,
          }}>
          <TopBar navigation={props.navigation} />

          <Title />
          <ListView navigation={props.navigation} />
        </PostsContext.Provider>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
