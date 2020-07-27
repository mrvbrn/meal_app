import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategorysScreen from "../screens/CategorysScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";


const MealsNavigator = createStackNavigator({
    Categories:CategorysScreen,
    CategoryMeals:{
        screen:CategoryMealsScreen
    },
    MealDetail:MealDetailsScreen
});


export default createAppContainer(MealsNavigator);