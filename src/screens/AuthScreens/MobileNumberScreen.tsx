import { View, Text, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import CustomHeader from '../../components/CustomHeader';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { AppStrings } from '../../utils/AppStrings';
import { FontSizes } from '../../utils/Fontsizes';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';
import CustomSecondarybutton from '../../components/CustomSecondarybutton';
import PhoneInput from 'react-native-phone-number-input';
import { useCustomAuthNavigation } from '../../navigation/hooks/useCustomNavigation';
import { Colors } from '../../styles/Colors';
import CustomPhoneNumberField from '../../components/CustomPhoneNumberField';

const MobileNumberScreen = () => {

  const [phoneNum, setphoneNum] = useState('');
  const [phoneNumError, setphoneNumError] = useState('');

  const { navigation } = useCustomAuthNavigation('MobileNumberScreen');

  useEffect(() => {
    navigation.addListener('focus', () => {
      // setphoneNum('')
      setphoneNumError('')
    })
    // setphoneNum('');
    setphoneNumError('');
  }, []);

  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader
        back
        onPress={() => {
          navigation.goBack();
        }}
      />
      <KeyboardAvoidingView behavior={'height'} style={{ flex: 1 }}>
        <View style={GlobalStyles.formHeaderContainer}>
          <Text style={GlobalStyles.formHeader}>{AppStrings.myNumber}</Text>
          {/* <PhoneInput
            ref={phone}
            textContainerStyle={{backgroundColor: Colors.PRIMARY_BG}}
            textInputStyle={{borderBottomWidth: 1}}
            // placeholder={' '}
            // containerStyle={{marginVertical: wp(5)}}
            onChangeText={val => {
              setphoneNum(val);
            }}
            value={phoneNum}
          /> */}
          <CustomPhoneNumberField
            value={phoneNum}
            onChangeText={(val) => {
              setphoneNum(val)
            }}
          />
          <Text style={GlobalStyles.errorText}>{phoneNumError}</Text>
          <Text style={GlobalStyles.infoText}>{AppStrings.weWillSendCode}</Text>
        </View>
        <View style={GlobalStyles.floatingBtnContainer}>
          <CustomSecondarybutton
            title={AppStrings.continue}
            onPress={() => {
              console.log(phoneNum);
              if (phoneNum.length != 10) {
                setphoneNumError(AppStrings.phoneNumError);
              } else {
                setphoneNumError('');
                navigation.navigate('OTPCodeScreen', {
                  number: phoneNum,
                });
              }
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   floatingBtnContainer: {alignSelf: 'center', position: 'absolute', bottom: wp(10)},
// });

export default MobileNumberScreen;
