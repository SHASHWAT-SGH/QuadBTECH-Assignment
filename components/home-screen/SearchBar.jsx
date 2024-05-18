import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {colorScheme1} from '../../constants/colors';

const SearchBar = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.wrapper]}>
        <View style={[styles.left]}>
          <Ionicons name={'search'} size={25} color={'white'} />
        </View>
        <View style={[styles.middle]}>
          <Text style={styles.search}>Search...</Text>
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
    backgroundColor: colorScheme1.color3,
    borderRadius: 100,
    overflow: 'hidden',
    flexDirection: 'row',
    width: '100%',
  },
  left: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  middle: {
    // backgroundColor: 'white',
    flex: 5.5,
    paddingLeft: 3.2,
  },
  right: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // marginRight: 3,
  },
  searchInput: {
    color: 'white',
    fontSize: 13,
  },
  search: {
    fontSize: 15,
    paddingVertical: 15,
  },
});
