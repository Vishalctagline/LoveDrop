import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../types/NavigationTypes/navigationTypes'
import AuthScreen from '../../screens/AuthScreens/AuthScreen'
import SignInScreen from '../../screens/AuthScreens/SignInScreen'
import MobileNumberScreen from '../../screens/AuthScreens/MobileNumberScreen'
import OTPCodeScreen from '../../screens/AuthScreens/OTPCodeScreen'
import EmailScreen from '../../screens/AuthScreens/EmailScreen'
import FirstNameScreen from '../../screens/AuthScreens/FirstNameScreen'
import BirthdayScreen from '../../screens/AuthScreens/BirthdayScreen'

const Stack=createNativeStackNavigator<AuthStackParamList>()

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="MobileNumberScreen" component={MobileNumberScreen} />
      <Stack.Screen name="OTPCodeScreen" component={OTPCodeScreen} />
      <Stack.Screen name="EmailScreen" component={EmailScreen} />
      <Stack.Screen name="FirstNameScreen" component={FirstNameScreen} />
      <Stack.Screen name="BirthdayScreen" component={BirthdayScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack