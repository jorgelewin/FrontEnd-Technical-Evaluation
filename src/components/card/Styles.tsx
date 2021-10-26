import React from "react";
import { StyleSheet } from "react-native";

export const textStyle = {
    color: 'rgba(128,128,128, 0.46)',
    fontFamily: 'WorkSans-Regular',
  };

  export const enrolltextStyle = {
    color: 'white',
    fontFamily: 'WorkSans-Regular',
  };

export const imageStyle = {
    height: 170, 
    width: undefined,
}
 export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      marginVertical: 12,
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
    imageContainer: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      overflow: 'hidden',
    },
    title: { flex: 1, fontSize: 22, fontFamily: 'WorkSans-SemiBold'},
    subText: {
      ...textStyle,
      flex: 1,
      paddingRight: 4,
      textAlign: "justify",
    },
    perNightText: { ...textStyle },
    review: {
      ...textStyle,
      marginLeft: 8,
    },
    rating: {
      color: '#001432',
      fontFamily: 'WorkSans-Medium',
      marginLeft: 5,
    },
    totalHours: {
      color: '#001432',
      fontFamily: 'WorkSans-Medium',
      marginLeft: -12,
      top: 4,
      padding: 10,
    },
  });