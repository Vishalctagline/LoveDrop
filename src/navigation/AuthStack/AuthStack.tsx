import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../types/NavigationTypes/navigationTypes'
import AuthScreen from '../../screens/AuthScreens/AuthScreen'
import SignInScreen from '../../screens/AuthScreens/SignInScreen'
import MobileNumberScreen from '../../screens/AuthScreens/MobileNumberScreen'
import OTPCodeScreen from '../../screens/AuthScreens/OTPCodeScreen'

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
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack