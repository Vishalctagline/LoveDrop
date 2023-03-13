import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'

interface Props{
    title:string,
    onPress:()=>void
}

const CustomSecondarybutton:React.FC<Props> = ({title,onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={GlobalStyles.btn}>
        <Text style={GlobalStyles.btnText}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CustomSecondarybutton