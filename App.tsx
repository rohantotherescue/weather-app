import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home'
import Details from './src/Details'
import { Provider } from 'react-redux'
import {store} from './src/Store'

const stack=  createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <stack.Navigator screenOptions= {{headerShown: false}}>
        <stack.Screen name= 'Home' component={Home}/>
        <stack.Screen name= 'Details' component={Details}/>
      </stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}