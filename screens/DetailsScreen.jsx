import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailsScreen = () => {
  return (
    <View style={[styles.container]}>
      <Image
        source={{
          uri: 'https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg',
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
          <Text>Language: English</Text>
          <Text>Rating: 6.4</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            marginTop: 8,
            gap: 4,
          }}>
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
          All American
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 16,
            color: 'white',
            // marginTop: 4,
          }}>
          When a rising high school football player from South Central L.A. is
          recruited to play for Beverly Hills High, the wins, losses and
          struggles of two families from vastly different worlds — Compton and
          Beverly Hills — begin to collide. Inspired by the life of pro football
          player Spencer Paysinger.
        </Text>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 12,
    // paddingTop: 3,
    // flex: 1,
    // backgroundColor: 'red',
  },
  image: {
    objectFit: 'cover',
    height: 300,
  },
});
