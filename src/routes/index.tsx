import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '@src/screens/LoginScreen';
import RegisterScreen from '@src/screens/RegisterScreen';
import HomeScreen from '@src/screens/HomeScreen';

import colors from '@src/utils/colors';

const Stack = createStackNavigator();

const Routes: React.FC<{}> = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
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
        options={{
          title: 'Login',
          headerLeft: () => null,
          headerRight: () => null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => null,
          headerRight: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
