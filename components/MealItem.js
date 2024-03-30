import { Text, View, StyleSheet, Image, Pressable, Platform } from 'react-native';

function MealItem({ title, imageUrl, complexity, affordable, navigateToDetailScreen, id }) {
  // const ingredientsText = ingredients.join(', ');

  return (
    <View style={MealItemStyles.mealContainer}>
      <Pressable
        style={MealItemStyles.mealInnerContainer}
        android_ripple={{ color: '#351401' }}
        onPress={navigateToDetailScreen}
      >
        <Image source={{ uri: imageUrl }} style={MealItemStyles.imageStye} />
        <View>
          <Text style={MealItemStyles.mealHeader}>{title}</Text>
          <View style={MealItemStyles.tagContainer}>
            <Text style={MealItemStyles.mealTag}>{affordable}</Text>
            <Text style={MealItemStyles.mealTag}>{complexity}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const MealItemStyles = StyleSheet.create({
  mealContainer: {
    margin: 10,
    elevation: 4,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: Platform.OS === 'ios' ? 'hidden' : 'visible',

    // shadow for IOS
    shadowColor: '#cccc',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },

  imageStye: {
    width: 100,
    borderRadius: 15,
    height: 100,
  },
  mealInnerContainer: {
    flexDirection: 'row',
    flex: 1,
    gap: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  mealHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    maxWidth: 200,
  },
  mealTag: {
    fontSize: 14,
    borderRadius: 15,
    padding: 5,
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#cccc',
    maxWidth: 100,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
});
