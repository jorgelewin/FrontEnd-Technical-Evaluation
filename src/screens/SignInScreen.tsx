import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useState } from 'react'
import { Image, StyleSheet, View, useWindowDimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { AppImages } from '../../assets';
import { CustomButton, CustomButtonSignUp } from '../components/customButton/CustomButton';
import CustomInput from '../components/customInput/CustomInput';


const SignInScreen = ({ navigation }: DrawerContentComponentProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");

    }

    const onSignUpPress = () => {
        navigation.navigate('SignUp')

    }

    return (
        <>

            <View style={styles.root}>
                <View style={styles.backButton}>

                    <Button icon="chevron-left" contentStyle={{ left: 7, }} mode="contained" color='#1D1D1F' onPress={() => navigation.goBack()}>
                    </Button>
                </View>
                <Image source={AppImages.programmingLanguages}
                    style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
                <CustomButton text="Continue" onPress={onSignInPressed} />
                <CustomButtonSignUp text="Don't have a account? Create one" onPress={onSignUpPress} />
            </View>
        </>
    )
}
export default SignInScreen;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginBottom: 25,
        borderRadius: 40,
    },
    backButton: {
        top: 10,
        marginRight: 200,
        alignSelf: 'flex-start',
        marginBottom: 25,
    }

})