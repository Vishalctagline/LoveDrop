import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { useCustomAuthNavigation } from '../../navigation/hooks/useCustomNavigation';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { FontSizes } from '../../utils/Fontsizes';
import { AppStrings } from '../../utils/AppStrings';
import { Colors } from '../../styles/Colors';
import CustomTextInput from '../../components/CustomTextInput';
import CustomSecondarybutton from '../../components/CustomSecondarybutton';
import CustomDateInput from '../../components/CustomDateInput';

const BirthdayScreen = () => {

  const { navigation, route } = useCustomAuthNavigation('BirthdayScreen');
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
          <Text style={GlobalStyles.formHeader}>{AppStrings.birthDate}</Text>
          <CustomDateInput />
          {/* <Text style={GlobalStyles.errorText}>{nameError}</Text> */}
        </View>
        <View style={GlobalStyles.floatingBtnContainer}>
          <CustomSecondarybutton
            title={AppStrings.continue}
            onPress={() => {
              navigation.navigate('GenderScreen')
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default BirthdayScreen

const styles = StyleSheet.create({})