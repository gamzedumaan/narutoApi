import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';

import { Colors } from '../../constants/color';

export default function About({ route }) {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.about}>{item.about}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  about: {
    fontSize: 15,
    letterSpacing: 1,
    margin: 5,
    padding: 5,
    color: 'black',
    fontFamily:'acme'
  },
});
