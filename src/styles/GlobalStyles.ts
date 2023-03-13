import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

export const GlobalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.white,
    // padding: wp(5),
  },
  headerContainer: {
    // flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(5),
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: wp(8),
  },
  primaryBtn: {
    //   flex:1,
    borderRadius: wp(20),
    //   borderWidth:1,
    width: wp(90),
    padding: wp(5),
    margin: wp(2),
  },
  primaryBtnText: {
    fontSize: RFValue(16),
    fontWeight: '500',
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    color: Colors.white,
  },
  btn: {
    // flex:1,
    borderRadius: wp(20),
    borderWidth: 0.5,
    width: wp(90),
    padding: wp(5),
    margin: wp(2),
    alignSelf: 'center',
  },
  btnText: {
    fontSize: RFValue(16),
    fontWeight: '500',
    fontFamily: 'PublicSans-Regular',
    textAlign: 'center',
    color: Colors.black,
  },
  underlinetxt: {textDecorationLine: 'underline'},
  floatingBtnContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: wp(10),
  },
  formHeaderContainer:{paddingHorizontal: wp(10),paddingVertical:wp(5)}
});