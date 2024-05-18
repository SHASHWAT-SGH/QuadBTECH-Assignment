import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Card from '../components/home-screen/Card';
import {colorScheme1} from '../constants/colors';
import SearchBar from '../components/home-screen/SearchBar';

const HomeScreen = () => {
  return (
    <View style={[styles.container]}>
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.scrollviewContainer]}>
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorScheme1.color1,
    padding: 5,
    paddingHorizontal: 12,
  },
  scrollviewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 30,
    justifyContent: 'space-between',
  },
});
