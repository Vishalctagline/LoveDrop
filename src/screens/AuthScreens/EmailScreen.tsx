import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {GlobalStyles} from '../../styles/GlobalStyles';
import CustomHeader from '../../components/CustomHeader';
import {useCustomAuthNavigation} from '../../navigation/hooks/useCustomNavigation';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {FontSizes} from '../../utils/Fontsizes';
import {AppStrings} from '../../utils/AppStrings';
import CustomSecondarybutton from '../../components/CustomSecondarybutton';
import {Colors} from '../../styles/Colors';
import CustomTextInput from '../../components/CustomTextInput';

const EmailScreen = () => {
  const [email, setemail] = useState('');
  const [emailError, setemailError] = useState('');
  const {navigation, route} = useCustomAuthNavigation('EmailScreen');

  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader
        onPress={() => {
          navigation.goBack();
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'height' : 'padding'}
        style={{flex: 1}}>
        <View style={{paddingHorizontal: wp(10)}}>
          <Text style={FontSizes.formHeader}>{AppStrings.whatsYourEmail}</Text>
          <Text style={{...FontSizes.infoText, color: Colors.grey}}>
            {AppStrings.dontLose}
          </Text>
          <CustomTextInput
            placeholder={AppStrings.enterEmail}
            value={email}
            onChangeText={val => {
              setemail(val);
            }}
          />
          <Text style={FontSizes.errorText}>{emailError}</Text>
        </View>
        <View style={GlobalStyles.floatingBtnContainer}>
          <CustomSecondarybutton
            title={AppStrings.continue}
            onPress={() => {
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
              if (!reg.test(email)) {
                  setemailError(AppStrings.emailError)
              }else{
                  navigation.navigate('FirstNameScreen')
              }
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({});
