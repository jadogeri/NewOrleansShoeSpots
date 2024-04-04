import { Text, View , Image, Pressable} from 'react-native'
import React from 'react'

const SocialAccountButton = (props) => {
  return (
    <Pressable onPress={()=>{alert("i pressed")}}>
    <View style={props.containerStyle}>
            <Image
              style={props.imageStyle}
              contentFit="cover"
              source={props.image}
            />
            <Text style={props.textStyle}>
              {props.title}
            </Text>
    </View>
    </Pressable>
  )
}

export default SocialAccountButton

