import React from 'react'
import { Actions } from 'react-native-router-flux'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import style from './style'

const Home = () => (
  <View style={style.container}>
    <Text style={style.title}>This is the React Native Base App</Text>
    <Button title="About Base App" onPress={() => Actions.push('About')}/>
  </View>
)

export default Home
