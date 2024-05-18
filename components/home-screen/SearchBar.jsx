import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const SearchBar = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.wrapper]}>
        <View style={[styles.left]}>
          {/* <Icon name="search" size={38} color="#ffffff" /> */}
        </View>
        <View style={[styles.middle]}>
          <TextInput
            editable={false}
            style={[styles.searchInput]}
            placeholder="Search..."
          />
        </View>
        <View style={[styles.right]}></View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  wrapper: {
    backgroundColor: 'green',
    minHeight: 30,
    borderRadius: 100,
    overflow: 'hidden',
    flexDirection: 'row',
    width: '100%',
  },
  left: {
    backgroundColor: 'red',
  },
  middle: {
    // backgroundColor: 'white',
  },
  searchInput: {
    color: 'black',
    fontSize: 13,
  },
});
