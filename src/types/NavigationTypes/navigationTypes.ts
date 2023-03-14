import { NavigatorScreenParams } from "@react-navigation/native";
export type AuthStackParamList = {
  AuthScreen: undefined;
  MobileNumberScreen: undefined;
  OTPCodeScreen: { number: string };
  EmailScreen: undefined;
  FirstNameScreen: undefined;
  BirthdayScreen: undefined;
  GenderScreen: undefined;
  WelcomeScreen: undefined
};

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>,
  HomeScreen: undefined,
  ProfileScreen: undefined,
  InboxScreen: undefined
};

