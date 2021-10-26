import React, { useEffect } from 'react'
import { Alert, StyleSheet, useWindowDimensions, View } from 'react-native';
import { USER_LIST} from '../api/data/user_data';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, TextInput } from 'react-native-paper';


interface Props extends StackScreenProps<any, any>{
    
};

export const ProfileScreen = ( {navigation}:Props) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { width } = useWindowDimensions();

    useEffect(() => {
        navigation.setOptions({
            headerStyle:{elevation:10},
            cardStyle:{backgroundColor:'red'},
            headerShown: true,
            title: 'Login',
            headerTitleAlign:'center',
            headerLeft: () => (
               

                    <Button icon="chevron-left" contentStyle={{left:7,}}  mode="contained" color='#1D1D1F' onPress={() => navigation.goBack()}>
                   
                  </Button>
                   
            )
        })
    }, [width])

    const login = async () => {
        if(username && password){

            USER_LIST.map((data) => {
                if (data.userName === username && data.password === password) {
                    const user = data
                    console.log(user);
                    console.log(username)
                    console.log(data.userName);
                    
                    
                    return (user)
                    
                }

            })
    
        } else {    
            Alert.alert(`Missing Fields`)
        }
    }

    return (
        <View  style={styles.container}>
            <TextInput 
      style={styles.styleInput}
      label="Username"
      value={username}
      onChangeText={text => setUsername(text)}
    />
           <TextInput
           style={styles.styleInput}
      label="Password"
      value={password}
      onChangeText={text => setPassword(text)}
    />
              <View style={{ marginHorizontal:40, margin:2, marginBottom:20}}>
        <Button  mode="contained" onPress={() => login !== {} ? navigation.goBack() : null } 
        contentStyle={{backgroundColor:'#1D1D1F'}}>
        Continue
    </Button>
    </View>
    
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      marginVertical: 20,
      marginHorizontal: 24,
      borderRadius: 16,
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
    },
    styleInput: {
        backgroundColor:'white',
        margin:12
    }
})