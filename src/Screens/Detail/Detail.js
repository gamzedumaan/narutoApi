import { Ionicons, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Animated, Easing, Share } from 'react-native';

import { MyTabs } from '../../../App';
import { SIZES } from '../../constants';
import { Colors, Fonts } from '../../constants/color';

export default function Detail({ route }) {
  const { customColor } = route.params;
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);
  /* Animated */
  const rotateVal = useRef(new Animated.Value(0)).current;
  const spin = rotateVal.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  useEffect(() => {
    Animated.timing(rotateVal, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {}
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: customColor }]}>
      <View style={styles.tab_Container}>
        <Ionicons
          style={{}}
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={30}
          color={Colors.primary}
        />
        <Text
          onPress={() => {
            bottomSheetRef.current.expand();
          }}
          style={styles.id}>
          #{route.params.item.id}
        </Text>
        <Fontisto onPress={onShare} name="share-a" size={24} color={Colors.primary} />
      </View>
      <Text style={styles.name}>{route.params.item.name}</Text>
      <View style={styles.bottomSheet}>
        <View style={styles.Images_Container}>
          {route.params.item.images.map((s) => {
            return (
              <Animated.Image
                source={{ uri: s }}
                style={[styles.images, { transform: [{ rotate: spin }] }]}
              />
            );
          })}
        </View>
        <View style={{ flex: 1 }}>
          <MyTabs detail={route.params.item} />
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
  tab_Container:{ 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    padding: 5,
  },
  id: {
    color: Fonts.h1,
    fontSize: 26,
    fontWeight: '600',
  },
  name: {
    color: Fonts.h1,
    fontSize: 30,
    fontWeight: '800',
    left:15,
    fontFamily:'acme'
  },
  images: {
    height: 80,
    width: 80,
    margin: 5,
    borderRadius: 10,
    transform: [{ rotate: '30deg' }],
    bottom: '53%',
  },
  bottomSheet: {
    width: '100%',
    height: SIZES.height / 2,
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  Images_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: -40,
  },
});
