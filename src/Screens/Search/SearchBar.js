import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput } from 'react-native';

import InfoCrad from '../../components/InfoCrad';
import { Colors } from '../../constants/color';

export default function SearchBar() {
  const [narutoApi, setNarutoApi] = useState([]);
  const [filterNaruto, setfilterNaruto] = useState([]);
  const narutoData = () => {
    fetch('https://naruto-api.fly.dev/api/v1/characters')
      .then((res) => res.json())
      .then((data) => {
        setNarutoApi(data);
        setfilterNaruto(data);
      })
      .catch((error) => {
        console.log('An error has occurred :', error);
        setNarutoApi();
      });
  };
  useEffect(() => {
    narutoData();
  }, []);

  const handleSearch = (text) => {
    const filteredList = narutoApi.filter(({ name }) => {
      const searchText = text.toLowerCase();
      const currentTitle = name.toLowerCase();
      return currentTitle.indexOf(searchText) > -1;
    });
    setfilterNaruto(filteredList);
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 7, padding: 7 }}>
        <Text style={styles.header_Text}>NARUTO</Text>
        <Text style={styles.text}>
          Search for Naruto by name or using the National Naruta number.
        </Text>
        <View style={styles.search}>
          <View style={{ flexDirection: 'row' }}>
            <EvilIcons name="search" size={35} color={Colors.grey} />
            <TextInput
              style={{ fontSize: 17 }}
              placeholder="What Naruto are you looking ?"
              onChangeText={handleSearch}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={filterNaruto}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index, id, images }) => {
              return (
                <InfoCrad
                  imageUrl={item.images}
                  name={item.name}
                  id={item.id}
                  onPress={() =>
                    navigation.navigate('Detail', {
                      id,
                      item,
                      images,
                      customColor: index % 2 === 0 ? '#D5D41D' : '#E08440',
                    })
                  }
                />
              );
            }}
          />
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
  header_Text: {
    fontSize: 35,
    fontWeight: '700',
    fontFamily:'acme'
  },
  search: {
    padding: 20,
    margin: 10,
    borderRadius: 50,
    backgroundColor: Colors.search,
  },
  text: {
    fontSize: 17,
    fontWeight: '400',
    marginTop: 10,
    fontFamily:'acme'
  },
});
