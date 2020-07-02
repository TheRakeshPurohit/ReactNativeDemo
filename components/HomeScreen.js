import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import TopBar from './TopBar';
import Title from './Title';
import ListView from './ListView';
import axios from 'axios';

export const PostsContext = React.createContext();

function HomeScreen() {
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
    <View>
      <PostsContext.Provider value={{postObj: posts, postfunc: setPosts}}>
        <TopBar />
        <Title />
        <ListView />
      </PostsContext.Provider>
    </View>
  );
}

export default HomeScreen;
