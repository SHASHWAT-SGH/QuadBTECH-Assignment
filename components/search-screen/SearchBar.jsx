import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {colorScheme1} from '../../constants/colors';

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
          <Ionicons name={'search'} size={25} color={'white'} />
        </View>
        <View style={[styles.middle]}>
          <TextInput
            value={text}
            onChangeText={handleTextChange}
            style={[styles.searchInput]}
            placeholder="Search..."
            autoFocus={true}
            fontSize={15}
          />
        </View>

        <View style={[styles.right]}>
          <TouchableOpacity
            onPress={() => handleTextChange('')}
            style={text.length === 0 ? {display: 'none'} : {display: 'flex'}}>
            <Entypo name="cross" size={25} color={'white'} />
          </TouchableOpacity>
        </View>
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
});
