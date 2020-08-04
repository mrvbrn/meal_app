import { Platform } from "react-native";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import CategorysScreen from "../screens/CategorysScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FiltersScreen from "../screens/FiltersScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const defaultTabScreen = {
    headerStyle:{
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}


const MealsNavigator = createStackNavigator({
    Categories:{
        screen:CategorysScreen
    },
    CategoryMeals:{
        screen:CategoryMealsScreen
    },
    MealDetail:MealDetailsScreen
    }, {
      defaultNavigationOptions:defaultTabScreen
    }
);

const FavNavigator = createStackNavigator({
    Favorites:FavoritesScreen,
    MealDetail:MealDetailsScreen,
    }, {
      defaultNavigationOptions:defaultTabScreen
    }
);

const FilterNavigator = createStackNavigator({
    Filters: FiltersScreen
})

const tabScreenConfig = {
  Meals : {
    screen: MealsNavigator,
    navigationOptions:{
      tabBarIcon:(tabInfo)=> {
        return(
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
        )
      },
      tabBarColor:Colors.primaryColor
    }
  },
  Favorites : {
    screen:FavNavigator,
    navigationOptions:{
      tabBarLabel:'Favorites!',
      tabBarColor:Colors.accentColor,
      tabBarIcon:(tabInfo)=> {
          return(
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
          )
        }
      }
  }
}

const MealsFavTabNavigator = 
  Platform.OS === 'android' 
    ? createMaterialBottomTabNavigator(tabScreenConfig,{
       activeTintColor:'white',
       shifting:true
    })
    : createBottomTabNavigator(tabScreenConfig,{
        tabBarOptions:{
          activeTintColor:Colors.accentColor
        }
    });



const MainNavigator = createDrawerNavigator({
    MealsFav : MealsFavTabNavigator,
    Filters : FilterNavigator
});


export default createAppContainer(MainNavigator);