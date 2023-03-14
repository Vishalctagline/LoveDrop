import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { GlobalStyles } from '../styles/GlobalStyles';

interface Props {
  value: string;
  onChangeText: (val: string) => void;
  placeholder: string;
}

const CustomTextInput: React.FC<Props> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <View style={{marginTop: wp(8)}}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType='email-address'
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    ...GlobalStyles.inputText
  },
});
