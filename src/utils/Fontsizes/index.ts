import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet} from 'react-native';
import { Colors } from "../../styles/Colors";


export const FontSizes = StyleSheet.create({
  infoText: {
    fontSize: RFValue(12),
    fontFamily: 'Inter-Regular',
    // textAlign: 'center',
    color: Colors.black,
    fontWeight: '400',
  },
  formHeader: {
    fontSize: RFValue(25),
    fontFamily: 'Inter-Regular',
    color: Colors.black,
    fontWeight: '700',
  },
  errorText: {
    fontSize: RFValue(12),
    fontFamily: 'Inter-Regular',
    // textAlign: 'center',
    color: Colors.red,
    fontWeight: '400',
  },
});
