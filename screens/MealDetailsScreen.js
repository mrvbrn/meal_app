import React from "react";
import { ScrollView, Image, View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";

const ListItem = props => {
  return(
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  )
}

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id === mealId)
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
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id  === mealId);
    return{
        headerTitle:selectedMeal.title,
        headerRight:<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => console.log('mark as favorite!')}
          />
        </HeaderButtons>
    };
};

export default MealDetailsScreen;