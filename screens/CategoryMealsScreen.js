import React from "react";
import { View, Text, Button, Platform, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = props => {
    return(
        <View style={styles.screen}>
          <Text> The Category Meals Screen</Text>
          <Button title="Go to Details" onPress={()=>props.navigation.navigate('MealDetail')}/>
          <Button title="Go Back" onPress={()=>props.navigation.goBack()}/>
        </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const catID = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);
    return{
      headerTitle : selectedCategory.title,
      headerStyle:{
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
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