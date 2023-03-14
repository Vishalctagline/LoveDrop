import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontSizes } from '../utils/Fontsizes';

export const GlobalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.PRIMARY_BG,
    // padding: wp(5),
  },
  headerContainer: {
    // flex: 1,
    backgroundColor: Colors.PRIMARY_BG,
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(5),
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_BG,
    padding: wp(8),
  },
  primaryBtn: {
    //   flex:1,
    borderRadius: wp(20),
    //   borderWidth:1,
    width: wp(90),
    padding: wp(5),
    margin: wp(2),
    alignSelf: 'center',
  },
  primaryBtnText: {
    fontSize: RFValue(16),
    fontWeight: '500',
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    color: Colors.PRIMARY_BUTTON_TEXT,
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
    color: Colors.PRIMART_TEXT,
  },
  underlinetxt: {
    textDecorationLine: 'underline'
  },
  floatingBtnContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: wp(10),
  },
  formHeaderContainer: {
    paddingHorizontal: wp(10),
    paddingVertical: wp(5),
  },
  infoText: {
    fontSize: FontSizes.FontSize_12,
    fontFamily: 'Inter-Regular',
    // textAlign: 'center',
    color: Colors.PRIMART_TEXT,
    fontWeight: '500',
    marginVertical: wp(2)
  },
  formHeader: {
    fontSize: FontSizes.FontSize_30,
    fontFamily: 'PublicSans-Regular',
    color: Colors.PRIMART_TEXT,
    fontWeight: '700',
  },
  errorText: {
    fontSize: FontSizes.FontSize_12,
    fontFamily: 'Inter-Regular',
    // textAlign: 'center',
    color: Colors.ERROR_TEXT,
    fontWeight: '400',
  },
  inputText: {
    fontSize: FontSizes.FontSize_16,
    fontFamily: 'PublicSans-Regular',
    color: Colors.PRIMART_TEXT,
    fontWeight: '400',
  },
  welcomeText: {
    fontSize: FontSizes.FontSize_24,
    fontFamily: 'PublicSans-Regular',
    color: Colors.PRIMART_TEXT,
    fontWeight: '700',
  },
  infoTitle: {
    fontSize: FontSizes.FontSize_20,
    fontFamily: 'Inter-Regular',
    color: Colors.PRIMART_TEXT,
    fontWeight: '500',
  },
  infoSubTitle: {
    fontSize: FontSizes.FontSize_12,
    fontFamily: 'Inter-Regular',
    color: Colors.grey,
    fontWeight: '500',
  }
});
