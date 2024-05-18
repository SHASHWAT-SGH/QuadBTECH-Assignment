import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../components/home-screen/Card';
import {colorScheme1} from '../constants/colors';
import SearchBar from '../components/home-screen/SearchBar';
import axios from 'react-native-axios';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const currentRouteName = route.name;
  useEffect(() => {
    console.log(currentRouteName);
    axios
      .get('https://api.tvmaze.com/search/shows?q=all')
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  }, [currentRouteName]);

  const removeHtmlTags = str => {
    const regex = /<\/?[^>]+>/g;
    return str.replace(regex, '');
  };

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Search', {
            enableEdit: true,
            showKeyboard: true,
          })
        }>
        <SearchBar currentRouteName={currentRouteName} />
      </TouchableOpacity>
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
    paddingBottom: 25,
  },
});
