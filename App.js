import { StatusBar } from 'expo-status-bar';
import { CategoriesScreen, FavoriteScreen, MealDetailScreen, MealsOverview } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import FavoriteContextProvider from './store/context/favorite-context';
import { Provider } from 'react-redux';
import store from './store/redux/store';

// create a stack object
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// drawer navigator function
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: '#fff',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#000',
        drawerStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Drawer.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: 'All Meal Categories',
          drawerIcon: ({ color, size }) => <Ionicons name="pizza" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="favorites"
        component={FavoriteScreen}
        options={{
          title: 'Your Favorites',
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShadowVisible: false,
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: '#fff',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <Stack.Screen name="DrawerMealsCategories" component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="MealsOverview" component={MealsOverview} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
