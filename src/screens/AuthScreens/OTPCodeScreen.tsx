import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { useCustomAuthNavigation } from '../../navigation/hooks/useCustomNavigation';
import CustomSecondarybutton from '../../components/CustomSecondarybutton';
import { AppStrings } from '../../utils/AppStrings';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { FontSizes } from '../../utils/Fontsizes';
import { Colors } from '../../styles/Colors';

const OTPCodeScreen = () => {
    const {navigation,route} = useCustomAuthNavigation('OTPCodeScreen');

    console.log(route.params?.number);
    let number = route.params?.number;

  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomHeader
        onPress={() => {
          navigation.goBack();
        }}
      />
      <KeyboardAvoidingView behavior={'height'} style={{flex: 1}}>
        <View style={{paddingHorizontal: wp(10)}}>
          <Text style={FontSizes.formHeader}>{AppStrings.myCode}</Text>
          <Text style={{...FontSizes.infoText,color:Colors.grey,marginVertical:wp(2)}}>{number} <Text style={{color:Colors.black}}>{AppStrings.resend}</Text></Text>
        </View>
        <View style={GlobalStyles.floatingBtnContainer}>
          <CustomSecondarybutton
            title={AppStrings.continue}
            onPress={() => {}}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default OTPCodeScreen

const styles = StyleSheet.create({})