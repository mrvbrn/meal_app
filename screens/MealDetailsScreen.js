import React, { useEffect, useCallback } from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch} from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = props => {
  return(
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  )
}

const MealDetailsScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals)
  const mealId = props.navigation.getParam('mealId')
  const isMealFav = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId)) 
  const selectedMeal = availableMeals.find(meal => meal.id === mealId)


  const dispatch = useDispatch()
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
  },[dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav : toggleFavoriteHandler})
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({isFav:isMealFav})
  },[isMealFav])

  return(
    <ScrollView>
      <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
        <View style={styles.details}>
          <DefaultText>{selectedMeal.duration}m</DefaultText>
          <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
          {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
        <Text style={styles.title}>Steps</Text>
          {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
    </ScrollView>
       
  );
};

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    details:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    title:{
        fontFamily:'rubik-medium',
        fontSize:22,
        textAlign:'center'
    },
    listItem:{
        marginHorizontal:20,
        marginVertical:10,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10
    }

   

});

MealDetailsScreen.navigationOptions = navigationData => {
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const mealTitle = navigationData.navigation.getParam('mealTitle')
    const isFavorite = navigationData.navigation.getParam('isFav')

    return{
        headerTitle:mealTitle,
        headerRight:<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName={ isFavorite ? "ios-star" : "ios-star-outline"}
            onPress={toggleFavorite}
          />
        </HeaderButtons>
    };
};

export default MealDetailsScreen;