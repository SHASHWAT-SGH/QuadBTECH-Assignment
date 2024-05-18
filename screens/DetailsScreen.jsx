import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colorScheme1} from '../constants/colors';

const DetailsScreen = ({route}) => {
  const data = route.params;

  const removeHtmlTags = str => {
    const regex = /<\/?[^>]+>/g;
    str = str?.replace(regex, '');
    return str;
  };

  return (
    <View style={[styles.container]}>
      <Image
        source={{
          uri: data.show.image
            ? data.show.image.original
            : 'https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg',
        }}
        style={[styles.image]}
      />
      <View
        style={{
          paddingHorizontal: 8,
          marginTop: 4,
        }}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            marginTop: 8,
            justifyContent: 'space-between',
          }}>
          <Text>Language: {data.show.language}</Text>
          <Text>
            Rating: {data.show.rating.average ? data.show.rating.average : 0}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            marginTop: 8,
            gap: 4,
          }}>
          {data.show.genres.map((item, index) => {
            return <Text key={index}>{item}</Text>;
          })}
          <Text>Drama</Text>
          <Text>Sports</Text>
        </View>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 20,
            color: 'white',
            marginTop: 4,
          }}>
          {data.show.name}
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 16,
            color: 'white',
            // marginTop: 4,
          }}>
          {removeHtmlTags(data.show.summary)}
        </Text>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorScheme1.color1,
  },
  image: {
    objectFit: 'cover',
    height: 300,
  },
});
