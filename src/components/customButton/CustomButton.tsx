import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';


interface Props {
    onPress: any;
    text: any;
}

export const CustomButton = ({ onPress, text }: Props) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export const CustomButtonSignUp = ({ onPress, text }: Props) => {

    return (
        <Pressable onPress={onPress} style={styles.containerSignUp}>
            <Text style={styles.textSignUp}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    containerSignUp: {

        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    textSignUp: {
        fontWeight: 'bold',
        color: 'gray',
    },
})

