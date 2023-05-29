import React from 'react';
import { StyleSheet, View, SafeAreaView, Image } from 'react-native';
import { Colors } from '../../constants/color';

export default function Evolution({ route }) {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.images} source={{ uri: item.images[0] }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  images: {
    height: '100%',
    width: '100%',
  },
});
