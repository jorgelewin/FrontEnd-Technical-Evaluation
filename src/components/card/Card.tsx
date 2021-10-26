import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, ListRenderItemInfo, Text, useWindowDimensions, View } from 'react-native';
import { CourseTypeList } from '../../api/data/course_list_data';
import { styles, imageStyle, enrolltextStyle } from './Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';
import { Button } from 'react-native-paper';

interface Props {
    course: ListRenderItemInfo<CourseTypeList>,
    isLogged: boolean
}

export const Card = ({ course, isLogged }: Props) => {
    const { item, index } = course;
    const [size, setsize] = useState(useWindowDimensions())
    const translateY = useRef<Animated.Value>(new Animated.Value(50)).current;
    const opacity = useRef<Animated.Value>(new Animated.Value(0)).current;


    useEffect(() => {
        Animated.parallel([
            Animated.timing(translateY, {
                toValue: 0,
                duration: 400,
                delay: index * (400 / 3),
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 400,
                delay: index * (400 / 3),
                useNativeDriver: true,
            }),
        ]).start();
    });

    return (
        <Animated.View
            style={[styles.container, { opacity, transform: [{ translateY }], width: size.width >= 100 ? size.width * 0.85 : size.width * 0.50 }]}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={imageStyle}
                    source={item.imagePath}
                    resizeMode="stretch"
                />
                <Icon
                    style={{ position: 'absolute', right: 0, padding: 16 }}
                    name="favorite-border"
                    size={24}
                    color="#1D1D1F"
                />
            </View>
            <View style={{ padding: 8, paddingHorizontal: 16 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.title}>{item.titleTxt}</Text>
                    <Text style={{ fontSize: 22, fontFamily: 'WorkSans-SemiBold' }}>
                        ${item.price}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.subText} numberOfLines={8}>
                        {item.subTxt}
                    </Text>

                </View>
                <View style={{ flexDirection: 'row', top: 4 }}>
                    <Rating
                        type="custom"
                        ratingCount={5}
                        imageSize={16}
                        ratingColor="#1D1D1F"
                        fractions={1}
                        startingValue={item.rating}
                        onFinishRating={() => { }}
                        readonly
                        ratingBackgroundColor="white"
                        tintColor="white"
                    />
                    <Text style={styles.rating}>{item.rating}</Text>
                    <Text style={styles.review}>({item.reviews})</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.totalHours}>
                        <View style={{ width: 4 }} />
                        <Icon name="access-time" size={12} color="#001432" />
                        {item.hourTotal}hs
                    </Text>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        bottom: 5,
                    }}>
                        {isLogged ? <Button color='#1D1D1F' style={{
                            borderRadius: 20

                        }} mode="contained" onPress={() => console.log('Pressed')}>
                            <Text style={enrolltextStyle}>Enroll</Text>
                        </Button> : <></>}
                    </View>

                </View>


            </View>
        </Animated.View>
    )
}
