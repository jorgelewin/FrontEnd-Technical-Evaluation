import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { CustomButton, CustomButtonSignUp } from '../components/customButton/CustomButton';
import CustomInput from '../components/customInput/CustomInput';


const SignUpScreen = ({ navigation }: DrawerContentComponentProps) => {

    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [country, setCountry] = useState('');


    const onRegistrerPressed = () => {
        console.warn("Register");

    }

    const onSignInPress = () => {

        navigation.navigate('SignIn')



    }

    const onTermsPress = () => {
        console.warn("terms");

    }

    const onPrivacyPress = () => {
        console.warn("privacy");

    }

    return (
        <View style={styles.root}>

            <Text style={styles.title}>Register as a new student</Text>
            <CustomInput placeholder="Full name" value={fullName} setValue={setFullName} />
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
            <CustomInput placeholder="Repeat Password" value={repeatPassword} setValue={setRepeatPassword} secureTextEntry={true} />
            <CustomInput placeholder="Country" value={country} setValue={setCountry} />
            <CustomButton text="Continue" onPress={onRegistrerPressed} />
            <Text style={styles.terms}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsPress}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPress}>Privacy Policy</Text></Text>
            <CustomButtonSignUp text="Have an account? Sign in" onPress={onSignInPress} />

        </View>
    )
}
export default SignUpScreen;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        margin: 10,
    },
    terms: {
        color: 'gray',
        marginVertical: 10,

    },
    link: {
        color: '#FDB075',
    }
})