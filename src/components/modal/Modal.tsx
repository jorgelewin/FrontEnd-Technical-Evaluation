import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import * as React from 'react';
import {  useWindowDimensions, View } from 'react-native';
import { Button} from 'react-native-paper';




const ComponentModal = ({state,navigation,descriptors}: DrawerContentComponentProps) => {
 
    const { height } = useWindowDimensions();

    return (
      <DrawerContentScrollView >
        <View style={{ marginHorizontal:30, marginVertical:height*0.88}}>
        <Button icon="login" mode="contained" onPress={() => navigation.navigate('SignIn')}
        contentStyle={{backgroundColor:'#BD3C4B'}}>
        Register or Login
    </Button>
    </View>
      </DrawerContentScrollView>
    )};

export default ComponentModal;
