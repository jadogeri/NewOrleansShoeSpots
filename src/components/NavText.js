import React from 'react'
import { StyleSheet, Text, Pressable, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/core'


const NavText = (props) => {
    const navigation = useNavigation();

  return (
    <Pressable onPress={()=>{navigation.navigate(props.routeName)}}>
    <Text style={props.buttonStyle}>
    {props.title}
  </Text>
  </Pressable>
  )
}

export default NavText

const styles = StyleSheet.create({})