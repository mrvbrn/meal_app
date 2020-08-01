import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = props => {
    const renderMealItem = itemData =>{
        return <MealItem title={itemData.item.title}
                         duration={itemData.item.duration}
                         complexity={itemData.item.complexity}
                         affordability={itemData.item.affordability}
                         imageUrl={itemData.item.imageUrl}
                         onSelect={()=>{props.navigation.navigate({
                                                         routeName:'MealDetail',
                                                         params:{
                                                            mealId:itemData.item.id
                                                         }
                                                     }); 
                         }}
               /> 
    }
    const catID = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catID) >= 0)
    return(
        <View style={styles.screen}>
          <FlatList
            data={displayedMeals}
            keyExtractor={(item,index) => item.id}
            renderItem={renderMealItem}
          />  
        </View>
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
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

});

export default CategoryMealsScreen;