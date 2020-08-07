import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const catID = props.navigation.getParam('categoryId');
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catID) >= 0)
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


export default CategoryMealsScreen;