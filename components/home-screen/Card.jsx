import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity>
        <Image
          style={[styles.image]}
          source={{
            uri: 'https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg',
          }}
        />
        <Text style={[styles.heading]}>Passin' Me By</Text>
        <View>
          <Text style={[styles.description]}>
            When a rising high school football player from South Central L.A. is
            recruited to play for Beverly Hills High, the wins, losses and
            struggles of two families from vastly different worlds — Compton and
            Beverly Hills — begin to collide. Inspired by the life of pro
            football player Spencer Paysinger.
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
