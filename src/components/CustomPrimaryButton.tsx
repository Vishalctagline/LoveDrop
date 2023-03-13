import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../styles/GlobalStyles'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../styles/Colors'

interface Props{
    title:string,
    onPress:()=>void
}

const CustomPrimaryButton: React.FC<Props> = ({title,onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        colors={[Colors.primary_color, Colors.secondary_color]}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
        style={GlobalStyles.primaryBtn}>
        <Text style={GlobalStyles.primaryBtnText}>{title}</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

export default CustomPrimaryButton

