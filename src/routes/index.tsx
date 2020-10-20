import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '@src/screens/LoginScreen';
import RegisterScreen from '@src/screens/RegisterScreen';
import HomeScreen from '@src/screens/HomeScreen';

const Stack = createStackNavigator();

const Routes: React.FC<{}> = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740fe',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: 'Register' }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
