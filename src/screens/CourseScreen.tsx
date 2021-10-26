import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from '../components/card/Card';
import { COURSE_LIST } from '../api/data/course_list_data';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
  
  isLogged: boolean;
}

const CourseScreen = ({ isLogged }: Props) => {
  const numberCourses = COURSE_LIST.length - 1;

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.stickyHeaderContainer}>
        <Text style={styles.CoursesCountText}>{numberCourses} courses available</Text>

      </View>

      <FlatList

        contentContainerStyle={flatStyle}
        data={COURSE_LIST}
        renderItem={(data) => data.index > 0 ? (<Card course={data} isLogged={isLogged} />) : (

          null

        )}
      />

    </SafeAreaView>

  )
}

export default CourseScreen;


export const flatStyle = { flexGrow: 1, backgroundColor: 'white' }

const styles = StyleSheet.create({

  headerSectionContainer: { flex: 1, paddingHorizontal: 8, paddingVertical: 4 },
  stickyHeaderContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 8,
    elevation: 1,
  },
  CoursesCountText: {
    flex: 1,
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'WorkSans-Regular',
  },
});