import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({setSearchText}) => {
  const [text, setText] = useState('');
  const handleTextChange = newText => {
    setText(newText);
    setSearchText(newText);
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.wrapper]}>
        <View style={[styles.left]}>
          <Icon name="search" size={38} color="#ffffff" />
        </View>
        <View style={[styles.middle]}>
          <TextInput
            value={text}
            onChangeText={handleTextChange}
            style={[styles.searchInput]}
            placeholder="Search..."
            autoFocus={true}
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
