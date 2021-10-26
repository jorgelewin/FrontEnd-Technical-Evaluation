import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/AppTheme';
import { USER_LIST } from '../api/data/user_data';

interface Props extends StackScreenProps<any, any> {

};


export const LoginScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>

            <Text>Login</Text>
            
            <Button

                title="Login"
                onPress={() => navigation.navigate('Profile', USER_LIST[1])}

            />
        </View>
    )
}
