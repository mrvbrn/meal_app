import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform, TouchableNativeFeedback } from "react-native";


let TouchableCmp = TouchableOpacity;
if(Platform === 'android' && Platform.Version >= 21){
    TouchableCmp = TouchableNativeFeedback
}


const CategoryGridTile = props =>{
    return(
      <View style={styles.gridItem} >
        <TouchableCmp 
          style={{flex:1}}
          onPress={props.onSelect}>
          <View style = {{...styles.container, ...{backgroundColor:props.color}}}>
            <Text style={styles.title} numOfLines={2}>{props.title}</Text>
          </View>
        </TouchableCmp>
      </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
      flex:1,
      margin:15,
      height:150,
      borderRadius:10,
      overflow:'hidden'
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0, height:2},
        shadowRadius:10,
        elevation:3,
        padding:15,
        alignItems:'flex-end',
        justifyContent:'flex-end',

    },
    title:{
        fontFamily:'rubik-medium',
        fontSize:22,
        textAlign:'right',
    }

})


export default CategoryGridTile;