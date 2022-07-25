import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/main/Home';
import Profile from '../../screens/main/Profile';

const Main = createBottomTabNavigator();

const MainNav = () => {
  return (
    <Main.Navigator initialRouteName='Home'>
        <Main.Screen name='Home' component={Home}/>
        <Main.Screen name='Profile' component={Profile}/>
    </Main.Navigator>
  )
}

export default MainNav