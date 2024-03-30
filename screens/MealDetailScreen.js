import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { IconButton } from '../components';

function MealDetailScreen() {
  const route = useRoute();
  const mealID = route.params.mealID;
  const selectedMeal = MEALS.find((meal) => meal.id == mealID);
  const selectedMealTile = selectedMeal.title;
  const navigation = useNavigation();
  const [isFavorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMealTile,
      headerRight: () => (
        <IconButton
          iconName="star"
          customIconStyle={[mealDetailsStyle.iconStyle, { color: isFavorite ? 'yellow' : 'white' }]}
          onPress={handleFavorite}
        />
      ),
    });
  }, [selectedMealTile, mealID, isFavorite]);

  return (
    <View style={mealDetailsStyle.detailContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={mealDetailsStyle.detailImage} />
      <ScrollView style={mealDetailsStyle.detailHeader}>
        <Text style={mealDetailsStyle.mainHeader}>{selectedMeal.title}</Text>
        <View style={mealDetailsStyle.subHeader}>
          <Text style={mealDetailsStyle.subText}>{selectedMeal.affordability},</Text>
          <Text style={mealDetailsStyle.subText}>{selectedMeal.complexity},</Text>
          <Text style={mealDetailsStyle.subText}>{selectedMeal.duration} minutes prep time</Text>
        </View>
        {/* output ingredients */}
        <View style={mealDetailsStyle.listContainer}>
          <Text style={mealDetailsStyle.listHeader}>Ingredients</Text>
          <View style={mealDetailsStyle.ingredientContainer}>
            {selectedMeal.ingredients.map((ingredient) => (
              <Text style={mealDetailsStyle.listItem}>{ingredient}.</Text>
            ))}
          </View>
        </View>
        <View style={mealDetailsStyle.listContainer}>
          <Text style={mealDetailsStyle.listHeader}>Steps</Text>

          {selectedMeal.steps.map((step) => (
            <Text style={mealDetailsStyle.listItem}>{step}.</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default MealDetailScreen;

const mealDetailsStyle = StyleSheet.create({
  detailImage: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailContainer: {
    margin: 20,
    elevation: 4,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: Platform.OS === 'ios' ? 'hidden' : 'visible',
    flex: 1,

    // shadow for IOS
    shadowColor: '#cccc',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  detailHeader: {
    padding: 10,
    marginVertical: 10,
    flex: 1,
  },
  subHeader: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subText: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  mainHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  listContainer: {
    marginVertical: 10,
  },
  listHeader: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  listItem: {
    fontSize: 13,
    paddingHorizontal: 5,
  },

  ingredientContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconStyle: {
    fontSize: 20,
  },
});
