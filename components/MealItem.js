import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import DefaultText from "./DefaultText";


const MealItem = props =>{
  return(
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri:props.imageUrl}} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numOfLines={1} >{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
    mealItem:{
      height:200,
      width:400,
      backgroundColor:'#f5f5f5',
      borderRadius:10,
      overflow:'hidden',
      marginVertical:10,
    },
    bgImage:{
      width:'100%',
      height:'100%',
      justifyContent:'flex-end'
    },
    titleContainer:{
      backgroundColor:'rgba(0,0,0,0.5)',
      paddingHorizontal:12,
      paddingVertical:5,
      
    },
    title:{
      fontFamily:'rubik-medium',
      fontSize:20,
      color:'white',
      textAlign:'center'
    },
    mealRow:{
      flexDirection:'row',
    },
    mealDetail:{
      justifyContent:'space-between',
      paddingHorizontal:10,
      alignItems:'center',
      height:'15%'

    },
    mealHeader:{
      height:'85%'
    }
})

export default MealItem;