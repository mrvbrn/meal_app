import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategorysScreen = props => {
    return(
        <View style={styles.screen}>
          <Text> The Categorys Screen</Text>
          <Button title="go meals app!" onPress={()=> props.navigation.navigate('CategoryMeals')}/>
        </View>
    );

};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

});

export default CategorysScreen;