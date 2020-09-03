import React from "react";
import MealList from "../components/MealList";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = props => {
    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const catID = props.navigation.getParam('categoryId');
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catID) >= 0)

    if (displayedMeals.length === 0){
      return (
        <View style={styles.content}>
          <DefaultText>No meals found, maybe check your filters!</DefaultText>
        </View>
      )
    }
    return(
        <MealList listData={displayedMeals} navigation={props.navigation}/>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catID = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID)
    return{
      headerTitle : selectedCategory.title,
    }
};

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});


export default CategoryMealsScreen;