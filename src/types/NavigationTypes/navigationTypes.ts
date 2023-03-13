import { NavigatorScreenParams } from "@react-navigation/native";
export type AuthStackParamList={
    AuthScreen:undefined,
    SignInScreen:undefined,
    SignUpScreen:undefined,
    MobileNumberScreen:undefined,
    OTPCodeScreen:{number:string},
}

export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>,
  HomeScreen:undefined,
  ProfileScreen:undefined,
  InboxScreen:undefined
};

