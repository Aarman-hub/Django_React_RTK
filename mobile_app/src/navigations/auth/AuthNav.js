import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '../../screens/auth/Signin';
import Signup from '../../screens/auth/Signup';
import Welcome from '../../screens/auth/Welcome';


const Auth = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Auth.Navigator initialRouteName='Welcome'>
        <Auth.Screen name='Welcome' component={Welcome} />
        <Auth.Screen name='Signin' component={Signin} />
        <Auth.Screen name='Signup' component={Signup} />
    </Auth.Navigator>
  )
}

export default AuthNav