import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = props => {
    const renderMealItem = itemData =>{
        return(<View><Text>{itemData.item.title}</Text></View>)
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