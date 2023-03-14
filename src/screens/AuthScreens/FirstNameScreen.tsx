import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomSecondarybutton from '../../components/CustomSecondarybutton';
import { AppStrings } from '../../utils/AppStrings';
import CustomTextInput from '../../components/CustomTextInput';
import { useCustomAuthNavigation } from '../../navigation/hooks/useCustomNavigation';
import { GlobalStyles } from '../../styles/GlobalStyles';
import CustomHeader from '../../components/CustomHeader';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { FontSizes } from '../../utils/Fontsizes';
import { Colors } from '../../styles/Colors';


const FirstNameScreen = () => {

  const [name, setname] = useState('');
  const [nameError, setnameError] = useState('');
  const { navigation, route } = useCustomAuthNavigation('FirstNameScreen');

  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader
        back
        onPress={() => {
          navigation.goBack();
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'height' : 'padding'}
        style={{ flex: 1 }}>
        <View style={GlobalStyles.formHeaderContainer}>
          <Text style={GlobalStyles.formHeader}>{AppStrings.myFirstName}</Text>
          <CustomTextInput
            placeholder={AppStrings.firstName}
            value={name}
            onChangeText={val => {
              setname(val);
            }}
          />
          <Text style={GlobalStyles.errorText}>{nameError}</Text>
          <Text style={{ ...GlobalStyles.infoText, color: Colors.grey }}>
            {AppStrings.youWillNotable}
          </Text>
        </View>
        <View style={GlobalStyles.floatingBtnContainer}>
          <CustomSecondarybutton
            title={AppStrings.continue}
            onPress={() => {
              if (!name) {
                setnameError(AppStrings.nameError)
              } else {
                navigation.navigate('BirthdayScreen')
              }
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default FirstNameScreen

const styles = StyleSheet.create({})