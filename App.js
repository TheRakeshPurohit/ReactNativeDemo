import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Activity
import HomeScreen from './components/HomeScreen';
import DetailsPage from './components/DetailsPage';
import NewUser from './components/NewUser';

const AppStack = createStackNavigator({
  NewUser: NewUser,
  Home: HomeScreen,
  Details: DetailsPage,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      NewUser: NewUser,
      Home: HomeScreen,
      Details: DetailsPage,
      //AppStack,
    },
    {
      initialRouteName: 'NewUser',
    },
  ),
);
