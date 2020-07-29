import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategorysScreen from "../screens/CategorysScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import Colors from "../constants/Colors";


const MealsNavigator = createStackNavigator({
    Categories:CategorysScreen,
    CategoryMeals:{
        screen:CategoryMealsScreen
    },
    MealDetail:MealDetailsScreen
    },
    {
    defaultNavigationOptions:{
        headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    }
);


export default createAppContainer(MealsNavigator);