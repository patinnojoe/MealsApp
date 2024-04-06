import { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
// import { FavoriteContext } from '../store/context/favorite-context';
import { MEALS } from '../data/dummy-data';
import { MealItem } from '../components';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

function FavoriteScreen() {
  // const favoriteMeals = useContext(FavoriteContext);
  const favoriteMealIds = useSelector((state) => state.favoriteReducer.ids);
  // const favoriteMealIds = favoriteMeals.ids;

  const favoriteMealsData = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));
  const navigation = useNavigation();

  const RenderMealItem = (itemData) => {
    const handleNavigation = (id) => {
      navigation.navigate('MealDetail', { mealID: id });
    };

    if (favoriteMealsData.length === 0) {
      <View>
        <Text>No favorite meals yet</Text>
      </View>;
    }
    return (
      <MealItem
        key={itemData.item.id}
        id={itemData.item.id}
        title={itemData.item.title}
        affordable={itemData.item.affordability}
        navigateToDetailScreen={() => handleNavigation(itemData.item.id)}
        complexity={itemData.item.complexity}
        imageUrl={itemData.item.imageUrl}
      />
    );
  };

  // console.log(favoriteMealsData);

  return <FlatList data={favoriteMealsData} keyExtractor={(item) => item.id} renderItem={RenderMealItem}></FlatList>;
}

export default FavoriteScreen;
