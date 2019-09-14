import MapView from './components/map-view';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  MapView: {
    screen: MapView,
  },
});

export default createAppContainer(AppNavigator);