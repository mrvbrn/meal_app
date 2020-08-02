import { Platform } from "react-native";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import CategorysScreen from "../screens/CategorysScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";


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

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals : {
        screen: MealsNavigator,
        navigationOptions:{
            tabBarIcon:(tabInfo)=> {
                return(
                    <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
                )
            }
        }
    },
    Favorites : {
        screen:FavoritesScreen,
        navigationOptions:{
            tabBarLabel:'Favorites!',
            tabBarIcon:(tabInfo)=> {
                return(
                    <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
                )
            }
        }
    },
},{
    tabBarOptions:{
        activeTintColor:Colors.accentColor
    }
});


export default createAppContainer(MealsFavTabNavigator);