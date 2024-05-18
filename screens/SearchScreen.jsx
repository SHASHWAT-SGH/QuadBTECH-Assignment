import {StyleSheet, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBar from '../components/search-screen/SearchBar';
import {colorScheme1} from '../constants/colors';
import axios from 'react-native-axios';
import Card from '../components/home-screen/Card';

const SearchScreen = ({route}) => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    if (searchText.length > 0) {
      axios
        .get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
        .then(res => setData(res.data))
        .catch(error => console.error(error));
    } else {
      setData([]);
    }
  }, [searchText]);

  const removeHtmlTags = str => {
    const regex = /<\/?[^>]+>/g;
    str = str?.replace(regex, '');
    return str;
  };

  return (
    <View style={styles.container}>
      <SearchBar
        enableEdit={route.params && route.params.enableEdit}
        showKeyboard={route.params && route.params.showKeyboard}
        setSearchText={setSearchText}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.scrollviewContainer]}>
          {data &&
            data.map((item, index) => {
              return (
                <Card
                  key={index}
                  data={item}
                  name={item.show.name}
                  description={removeHtmlTags(item.show.summary)}
                  image={
                    item.show.image
                      ? item.show.image.medium
                      : 'https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg'
                  }
                />
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

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
    paddingBottom: 25,
  },
});
