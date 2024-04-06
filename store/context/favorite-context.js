import { createContext, useState } from 'react';

export const FavoriteContext = createContext({
  // values are passed here for auto completion on other files
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

// we will have a favoritte context provider. the favorite context provider should wrap arround our app
function FavoriteContextProvider({ children }) {
  // create a state whee you can update the id
  const [favoriteMealIds, setFavoriteMealId] = useState([]);

  // add favorite method
  const addFavorite = (id) => {
    // update the array of favorite ID
    setFavoriteMealId((currentMealID) => [...currentMealID, id]);
  };

  // remove favorite method
  const removeFavorite = (id) => {
    // here we get the existing meal ids in the variable current meal id  and  filter it, if the array does not ontain the id, we are good to go, if it does, then we remove the item
    setFavoriteMealId((currentMealID) => currentMealID.filter((mealID) => mealID !== id));
  };

  // pass a value object
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
}
export default FavoriteContextProvider;
