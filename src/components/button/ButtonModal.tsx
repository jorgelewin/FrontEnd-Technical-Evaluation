import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'


interface Props extends StackScreenProps<any, any> {

};

export const ButtonModal = ({ navigation }: Props) => {
    return (
        <>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'flex-end',
                bottom: 5,
            }}>
                <Button color='#1D1D1F' style={{
                    borderRadius: 20
                }} mode="contained" onPress={() => navigation.navigate('')}>
                    <Text style={enrolltextStyle}>Enroll</Text>
                </Button>
            </View>
        </>
    )
}

export const enrolltextStyle = {
    color: 'white',
    fontFamily: 'WorkSans-Regular',
};