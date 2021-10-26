import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { StatusBar } from 'react-native';
import SignInScreen from '../screens/SignInScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (

    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            elevation: 7
          },
          cardStyle: {
            backgroundColor: 'white'
          },
          animationEnabled: true

        }}
      >
        <Stack.Screen name="Home"
          options={{
            title: 'Courses', headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 22, fontFamily: 'WorkSans-SemiBold' }
          }}
          component={HomeScreen} />

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />

      </Stack.Navigator>
    </>
  );
}