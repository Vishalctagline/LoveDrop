import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Images} from '../../utils/ImagePaths';
import {AppStrings} from '../../utils/AppStrings';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Colors} from '../../styles/Colors';
import {GlobalStyles} from '../../styles/GlobalStyles';
import {FontSizes} from '../../utils/Fontsizes';
import CustomPrimaryButton from '../../components/CustomPrimaryButton';
import CustomSecondarybutton from '../../components/CustomSecondarybutton';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {AuthStackParamList} from '../../types/NavigationTypes/navigationTypes';
import {useNavigation} from '@react-navigation/native';
import { useCustomAuthNavigation, useCustomNavigation } from '../../navigation/hooks/useCustomNavigation';

// type NavigationProps=NativeStackNavigationProp<AuthStackParamList,'AuthScreen'>

// type Props = NativeStackScreenProps<AuthStackParamList, 'AuthScreen'>;

const AuthScreen = () => {
    type NavigationProps = NativeStackNavigationProp<
      AuthStackParamList,
      'AuthScreen'
    >;
    
    // const navigation = useNavigation<NavigationProps>();
    const {navigation} = useCustomAuthNavigation('MobileNumberScreen');

  return (
    <View style={GlobalStyles.centerContainer}>
      <Image source={Images.appLogo} resizeMode="contain" style={styles.img} />
      <View style={{marginVertical: wp(10)}}>
        <Text style={{...FontSizes.infoText,textAlign:'center'}}>
          {AppStrings.byTapping}
          <Text style={GlobalStyles.underlinetxt}>{AppStrings.terms}</Text>
          <Text>{AppStrings.learnHow}</Text>
          <Text style={GlobalStyles.underlinetxt}>
            {AppStrings.privacypolicy}
          </Text>
          <Text>{AppStrings.and}</Text>
          <Text style={GlobalStyles.underlinetxt}>
            {AppStrings.cokkiesPolicy}
          </Text>
        </Text>
      </View>
      <CustomPrimaryButton
        title={AppStrings.createAccount}
        onPress={() => {
          console.log('create ac');
          navigation.navigate('MobileNumberScreen')
          //  navigation.navigate('MobileNumber');
        }}
      />
      <CustomSecondarybutton
        title={AppStrings.signIn}
        onPress={() => {
          console.log('signin');
        navigation.navigate('SignInScreen');
       
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {height: wp(70), width: wp(70)},
});

export default AuthScreen;
