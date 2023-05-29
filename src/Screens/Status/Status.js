import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { Colors } from '../../constants/color';

export default function Status({ route }) {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.border_Container}>
        <Text style={styles.title}>Information</Text>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.name}>{item.info.Sexo}</Text>
          <Text style={styles.Aniversário}>{item.info.Aniversário}</Text>
          <Text style={styles.Idade}>{item.info.Idade}</Text>
        </View>
        <View>
          <View style={styles.weight_Container}>
            <Text style={{ fontSize: 17, color: '#454545', fontFamily: 'acme' }}>Weight :</Text>
            <Text style={{ fontSize: 17, color: 'grey', left: 11, fontFamily: 'acme' }}>
              {item.info.Altura}
            </Text>
            <View
              style={{ width: '35%', height: 5, backgroundColor: Colors.yellow, borderRadius: 10 }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              top: 30,
              bottom: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 17, color: '#454545', fontFamily: 'acme' }}>Height :</Text>
            <Text style={{ fontSize: 17, color: 'grey', left: 14, fontFamily: 'acme' }}>
              {item.info.Peso}
            </Text>
            <View
              style={{ width: '35%', height: 5, backgroundColor: Colors.yellow, borderRadius: 10 }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.yellow,
    marginTop: 10,
    fontFamily: 'acme',
  },
  name: {
    fontSize: 18,
    color: Colors.grey,
    fontWeight: '600',
    fontFamily: 'acme',
  },
  Aniversário: {
    fontSize: 18,
    color: Colors.grey,
    fontWeight: '600',
    fontFamily: 'acme',
  },
  Idade: {
    fontSize: 18,
    color: Colors.grey,
    fontWeight: '600',
    fontFamily: 'acme',
  },
  border_Container: {
    alignSelf: 'center',
    width: '95%',
    marginTop: 10,
  },
  weight_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 20,
    bottom: 10,
    justifyContent: 'space-between',
  },
});
