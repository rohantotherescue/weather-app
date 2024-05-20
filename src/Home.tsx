import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

const Home= ()=>  {
  return (
    <View>
      <ImageBackground source={require('../assets/images/background.png')} style= {styles.bgImg} imageStyle= {styles.bgImg}>

      </ImageBackground>
    </View>
  )
}

const styles= StyleSheet.create(
    {
        bgImg: {
            height: deviceHeight,
            width: deviceWidth,
            opacity: 0.6,
            backgroundColor: 'black'
        }
    }
)

export default Home;