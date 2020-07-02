import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator, Button} from 'react-native';
import {ListItem, SearchBar} from 'react-native-elements';

var id = 0;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb';
    this.setState({loading: true});

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
        //console.warn(this.state.data);
        this.arrayholder = res.results;
      })
      .catch((error) => {
        this.setState({error, loading: false});
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: 'black',
          width: '100%',
        }}
      />
    );
  };

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.first.toUpperCase()} ${item.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Search"
        lightTheme
        round
        onChangeText={(text) => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      if (this.state.data === null) {
        return (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator />
          </View>
        );
      }
    }
    return (
      <View style={{flex: 1}}>
        <Button
          title="Add New Employee"
          //   onPress={() => this.props.navigation.navigate('NewUser')}
        />
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <ListItem
              leftAvatar={{
                source: {
                  uri: 'https://randomuser.me/api/portraits/men/' + id + '.jpg',
                },
              }}
              title={`${item.first} ${item.last}`}
              subtitle={item.email}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          extraData={this.state.data}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default Home;
