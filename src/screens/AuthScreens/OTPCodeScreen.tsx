import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomHeader from '../../components/CustomHeader';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { useCustomAuthNavigation } from '../../navigation/hooks/useCustomNavigation';
import CustomSecondarybutton from '../../components/CustomSecondarybutton';
import { AppStrings } from '../../utils/AppStrings';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { FontSizes } from '../../utils/Fontsizes';
import { Colors } from '../../styles/Colors';
import CustomOTPInput from '../../components/CustomOTPInput';

const OTPCodeScreen = () => {

  const [otp, setotp] = useState('');
  const [otpError, setotpError] = useState('');
  const { navigation, route } = useCustomAuthNavigation('OTPCodeScreen');

  // console.log(route.params?.number);
  let number = route.params?.number;

  useEffect(() => {
    setotp('')
    setotpError('')
  }, []);

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
          <Text style={GlobalStyles.formHeader}>{AppStrings.myCode}</Text>
          <Text
            style={{
              ...GlobalStyles.infoText,
              color: Colors.grey,
            }}>
            {number}{' '}
            <Text style={{ color: Colors.PRIMART_TEXT }}>{AppStrings.resend}</Text>
          </Text>
          <CustomOTPInput onChangeText={setotp} />
          <Text style={GlobalStyles.errorText}>{otpError}</Text>
        </View>
        <View style={GlobalStyles.floatingBtnContainer}>
          <CustomSecondarybutton
            title={AppStrings.continue}
            onPress={() => {
              console.log(otp);
              if (!otp) {
                setotpError(AppStrings.otpError);
              } else {
                setotpError('');
                navigation.navigate('EmailScreen');
              }
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default OTPCodeScreen

const styles = StyleSheet.create({})