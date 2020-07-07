import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


//Activity
import HomeScreen from './components/HomeScreen';
import DetailsPage from './components/DetailsPage';

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsPage,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: HomeScreen,
      Details: DetailsPage,
      //AppStack,
    },
    {
      initialRouteName: 'Home',
    },
  ),
);
