import { FlatList, Text, View } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { MealItem } from '../components';
import { useLayoutEffect } from 'react';

/* 
   in the destination route, you recieve a navigation prop, becaue this route or screen has been registered, you thus can also get the route prop, the route prop 
   provides with a route.params.('whatever name given to the params from origin screen), which is set from the origin screen,

   you can also use the useRoute() hook like this

   const route = useRoute()
   route.params.('name from origin') or even route.name to get the name of the registered screen 


*/

function MealsOverview({ route, navigation }) {
  let categoryId = route.params.categoryId;
  const displayedMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    let catTitle = CATEGORIES.find((category) => category.id === categoryId).title;

    navigation.setOptions({
      title: catTitle,
    });
  }, [categoryId, navigation]);

  const RenderMealItem = (itemData) => {
    const navigateToDetailScreen = () => {
      navigation.navigate('MealDetail', { mealID: itemData.item.id });
    };

    const item = itemData.item;
    const arggObj = {
      title: item.title,
      affordable: item.affordability,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      id: item.id,
    };
    return <MealItem {...arggObj} navigateToDetailScreen={navigateToDetailScreen} />;
  };

  return (
    <View>
      <FlatList
        data={displayedMeal}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={RenderMealItem}
      />
    </View>
  );
}

export default MealsOverview;
