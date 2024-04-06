import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';
/*
you can use the useNavigation hook in components like this that are not registered 
in the Stack. to do  this, see example below

import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation

<View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={()=>{
        navigation.navigate('screen name here')
        }}
      >
      ....
      </Pressable>
  </View>




*/

const CategoryGridTitile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
          {/* <Text>{color}</Text> */}
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    // IOS Shadow
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },

  buttonPressed: {
    opacity: 0.5,
  },

  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
