import {View, Text, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import CustomHeader from '../../components/CustomHeader';
import {GlobalStyles} from '../../styles/GlobalStyles';
import {AppStrings} from '../../utils/AppStrings';
import {FontSizes} from '../../utils/Fontsizes';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';
import CustomSecondarybutton from '../../components/CustomSecondarybutton';
import PhoneInput from 'react-native-phone-number-input';
import {useCustomAuthNavigation} from '../../navigation/hooks/useCustomNavigation';
import { Colors } from '../../styles/Colors';

const MobileNumberScreen = () => {

  const phone = useRef<PhoneInput>(null);
  const [phoneNum, setphoneNum] = useState('');
  const [phoneNumError, setphoneNumError] = useState('');

  const {navigation} = useCustomAuthNavigation('MobileNumberScreen');

  

  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader
        onPress={() => {
          navigation.goBack();
        }}
      />
      <KeyboardAvoidingView behavior={'height'} style={{flex: 1}}>
        <View style={{paddingHorizontal: wp(10)}}>
          <Text style={FontSizes.formHeader}>{AppStrings.myNumber}</Text>
          <PhoneInput
            ref={phone}
            textContainerStyle={{backgroundColor: Colors.white}}
            textInputStyle={{borderBottomWidth: 1}}
            placeholder={' '}
            // containerStyle={{marginVertical: wp(5)}}
            onChangeText={val => {
              setphoneNum(val);
            }}
            value={phoneNum}
          />
          <Text style={FontSizes.errorText}>{phoneNumError}</Text>
          <Text style={FontSizes.infoText}>{AppStrings.weWillSendCode}</Text>
        </View>
        <View style={GlobalStyles.floatingBtnContainer}>
          <CustomSecondarybutton
            title={AppStrings.continue}
            onPress={() => {
              console.log(phone.current?.isValidNumber(phoneNum));
              if (!phone.current?.isValidNumber(phoneNum)) {
                setphoneNumError(AppStrings.phoneNumError);
              }else{
                navigation.navigate ('OTPCodeScreen',{
                  number:phoneNum
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
