import { StyleSheet, Text,  } from 'react-native'
import { TextInput } from 'react-native-paper'
import React from 'react'

const InputField = (props) => {
  return (
        <TextInput placeholder={props.placeholder} style={props.inputFieldStyle} display='none'
    autoCapitalize="none" secureTextEntry={props.secureTextEntry} 
    //onChangeText={(value) => { props.passwordChangeHandler(value) }}
    onChangeText={props.onChangeText} activeOutlineColor='purple'

    left={<TextInput.Icon icon={props.leftIcon} color={props.leftIconColor} size={20}  style={props.leftIconStyle} />}
    right={<TextInput.Icon icon={props.rightIcon} color={props.rightIconColor} size={20}  style={props.righttIconStyle}/>}

/>
  )
}

export default InputField

const styles = StyleSheet.create({})