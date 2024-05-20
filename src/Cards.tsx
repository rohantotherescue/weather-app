import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react'
import {deviceHeight, deviceWidth} from './Dimensions';

type CitiesProp= PropsWithChildren<{
    name: string;
    image: any;
}>

const Cards= ({name, image}: CitiesProp) => {
  return (
        <TouchableOpacity style= {{marginHorizontal: 10}}>
      <ImageBackground source={image} style= {styles.Img} imageStyle={{borderRadius: 16}}>
      </ImageBackground>
      <View style={{position: 'absolute', height: '100%', width: '100%'}}>
        <Text style={styles.text}>
            {name}
        </Text>
      </View>
      </TouchableOpacity>
  )
}

const styles= StyleSheet.create(
    {
        Img: {height: deviceHeight / 5, width: deviceWidth / 2 - 50},
        text: {
            fontSize: 28,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
            color: 'white',
            textShadowColor: 'black',
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 1,
          }
    }

)

export default Cards;