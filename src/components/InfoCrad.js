import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { Colors } from '../constants/color';

export default function InfoCrad({ onPress, name, imageUrl, id }) {
  return (
    <>
      <Pressable style={{}} onPress={onPress}>
        <View style={styles.infoCrad_Detail}>
          <Text style={styles.id_Text}>#{id}</Text>
          <Text style={styles.name}>{name}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            {imageUrl.map((s) => {
              return <Image source={{ uri: s }} style={styles.Image} />;
            })}
          </View>
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  infoCrad_Detail: {
    backgroundColor: Colors.iceblue,
    marginBottom: 10,
    shadowColor: Colors.primary,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    borderRadius: 10,
    padding: 10,
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 5,
  },
  name:{
    fontFamily:'acme',
    fontSize:18
  },
  id_Text:{
    fontFamily:'acme',
    fontSize:16
  }
});
