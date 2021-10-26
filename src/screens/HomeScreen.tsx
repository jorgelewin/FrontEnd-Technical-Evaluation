import React, { useEffect } from 'react'
import { useWindowDimensions, View } from 'react-native'
import CourseScreen from './CourseScreen'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button } from 'react-native-paper'

interface Props extends DrawerScreenProps<any, any> {

};


const HomeScreen = ({ navigation }: Props) => {

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        navigation.setOptions({

            headerLeft: () => (

                width < height ?

                    <Button icon="menu" contentStyle={{ left: 7 }} mode="contained" color='#1D1D1F' onPress={() => navigation.openDrawer()}>

                    </Button> : null
            )
        })
    }, [width])


    return (
        <>
            <CourseScreen isLogged={true} />
        </>
    )
}

export default HomeScreen