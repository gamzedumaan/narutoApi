import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import About from './src/Screens/About/About';
import Detail from './src/Screens/Detail/Detail';
import Evolution from './src/Screens/Evolution/Evolution';
import SearchBar from './src/Screens/Search/SearchBar.js';
import Status from './src/Screens/Status/Status';
const Stack = createNativeStackNavigator();
const Tabs = createMaterialTopTabNavigator();

export const MyTabs = ({ detail }) => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen initialParams={{ item: detail }} name="About" component={About} />
      <Tabs.Screen initialParams={{ item: detail }} name="Status" component={Status} />
      <Tabs.Screen initialParams={{ item: detail }} name="Evolution" component={Evolution} />
    </Tabs.Navigator>
  );
};

export default function App() {
  const [isLoaded] = useFonts({
    'acme': require('./assets/Fonts/Acme-Regular.ttf'),
  });
  if (!isLoaded) {
   null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SearchBar" component={SearchBar} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
