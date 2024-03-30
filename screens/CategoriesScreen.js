import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { CategoryGridTitile } from '../components';

// Category screen receives a special prop called navigation since it is registered as part of the navigation stack in App.js
function CategoriesScreen({ navigation }) {
  const RenderCategoy = (itemData) => {
    const handlePress = () => {
      // the navigate method receives tha name  of the page we wish to navigate to
      /* the navigation method also carries the route params, which allows you to pass parameters to your navigated routes */
      navigation.navigate('MealsOverview', { categoryId: itemData.item.id, categoryTitle: itemData.item.title });
    };
    return <CategoryGridTitile title={itemData.item.title} color={itemData.item.color} onPress={handlePress} />;
  };
  return <FlatList data={CATEGORIES} renderItem={RenderCategoy} keyExtractor={(item) => item.id} numColumns={2} />;
}

export default CategoriesScreen;
