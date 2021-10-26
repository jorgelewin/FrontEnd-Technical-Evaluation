import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/ProfileScreen';
import { StackNavigator } from './StackNavigator';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ComponentModal from '../components/modal/Modal';
import { DrawerContent } from './DrawerContent';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

export const DrawerNavigator = () => {

  const { width, height } = useWindowDimensions();
  
  const isLargeScreen = width >= 500;

  
  return (
    <Drawer.Navigator
    
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#5cbbff',
        drawerType:isLargeScreen ? 'permanent' : 'back',
        overlayColor:'transparent',
        
        drawerStyle: {
          width:isLargeScreen ? width * 0.40 : width * 0.75,
          backgroundColor: '#FFFEFEFE',
          elevation:isLargeScreen ? 5: 0
        }
      }}

      //aqui hago la condicional para mostrar el boton de login o las opciones del usuario logeado.
      drawerContent={(props) => width > 100 ? <ComponentModal {...props} /> : <DrawerContent {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="SignIn"  component={SignInScreen} />
      <Drawer.Screen name="SignUp" component={SignUpScreen} />
    </Drawer.Navigator>
  );
}

