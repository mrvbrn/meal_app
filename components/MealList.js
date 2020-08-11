import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { useSelector } from "react-redux";


const MealList = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)
  const renderMealItem = itemData =>{
    const isFavorite = favMeals.some(meal => meal.id === itemData.item.id)
    return <MealItem title={itemData.item.title}
                         duration={itemData.item.duration}
                         complexity={itemData.item.complexity}
                         affordability={itemData.item.affordability}
                         imageUrl={itemData.item.imageUrl}
                         onSelect={()=>{props.navigation.navigate({
                                                         routeName:'MealDetail',
                                                         params:{
                                                            mealId:itemData.item.id,
                                                            mealTitle:itemData.item.title,
                                                            isFav:isFavorite
                                                         }
                                                     }); 
                         }}
            /> 
    }
    return(
      <View style={styles.list}>
        <FlatList
          data={props.listData}
          keyExtractor={(item,index) => item.id}
          renderItem={renderMealItem}
        />  
      </View>
    );
};

const styles = StyleSheet.create({
  list:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default MealList;