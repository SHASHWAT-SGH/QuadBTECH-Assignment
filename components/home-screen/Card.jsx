import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Card = ({name, description, image, data}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={() => navigation.navigate('details', data)}>
        <Image
          style={[styles.image]}
          source={{
            uri: image,
          }}
        />
        <Text style={[styles.heading]}>{name}</Text>
        <View>
          <Text style={[styles.description]} numberOfLines={5}>
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    width: 150,
  },
  image: {
    height: 180,
    objectFit: 'contain',
  },
  heading: {
    fontWeight: '600',
    fontSize: 18,
    marginTop: 3,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
});
