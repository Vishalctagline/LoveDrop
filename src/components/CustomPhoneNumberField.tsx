import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PhoneInput from 'react-native-phone-number-input';
import { Colors } from '../styles/Colors';
import { GlobalStyles } from '../styles/GlobalStyles';

interface Props {
    onChangeText: (val: string) => void,
    value: string
}

const CustomPhoneNumberField: React.FC<Props> = ({ onChangeText, value }) => {
    return (
        <PhoneInput
            textContainerStyle={{ backgroundColor: Colors.PRIMARY_BG }}
            textInputStyle={{ ...GlobalStyles.inputText, borderBottomWidth: 1 }}
            // placeholder={' '}
            // containerStyle={{marginVertical: wp(5)}}
            onChangeText={onChangeText}
            value={value}
        />
    )
}

export default CustomPhoneNumberField

const styles = StyleSheet.create({})