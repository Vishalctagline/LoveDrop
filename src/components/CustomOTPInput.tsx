import {StyleSheet,  TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface Props {
  onChangeText: (val:string)=>void;
}

const CustomOTPInput: React.FC<Props> = ({onChangeText}) => {

  const inpt1 = useRef<TextInput>(null);
  const inpt2 = useRef<TextInput>(null);
  const inpt3 = useRef<TextInput>(null);
  const inpt4 = useRef<TextInput>(null);
  const inpt5 = useRef<TextInput>(null);
  const inpt6 = useRef<TextInput>(null);


  const [inp1, setinp1] = useState('');
  const [inp2, setinp2] = useState('');
  const [inp3, setinp3] = useState('');
  const [inp4, setinp4] = useState('');
  const [inp5, setinp5] = useState('');
  const [inp6, setinp6] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        ref={inpt1}
        maxLength={1}
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={val => {
          if (val == '') {
            inpt1.current?.focus();
          } else {
            // onChangeText((prev: string) => prev + val);
            setinp1(val);
            inpt2.current?.focus();
          }
        }}
      />
      <TextInput
        ref={inpt2}
        maxLength={1}
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={val => {
          if (val == '') {
            inpt1.current?.focus();
          } else {
            // onChangeText((prev: string) => prev + val);
            setinp2(val);
            inpt3.current?.focus();
          }
        }}
      />
      <TextInput
        ref={inpt3}
        maxLength={1}
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={val => {
          if (val == '') {
            inpt2.current?.focus();
          } else {
            // onChangeText((prev: string) => prev + val);
            setinp3(val);
            inpt4.current?.focus();
          }
        }}
      />
      <TextInput
        ref={inpt4}
        maxLength={1}
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={val => {
          if (val == '') {
            inpt3.current?.focus();
          } else {
            // onChangeText((prev: string) => prev + val);
            setinp4(val);
            inpt5.current?.focus();
          }
        }}
      />
      <TextInput
        ref={inpt5}
        maxLength={1}
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={val => {
          if (val == '') {
            inpt4.current?.focus();
          } else {
            // onChangeText((prev: string) => prev + val);
            setinp5(val);
            inpt6.current?.focus();
          }
        }}
      />
      <TextInput
        ref={inpt6}
        maxLength={1}
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={val => {
          if (val == '') {
            inpt5.current?.focus();
          }
          setinp6(val);
          let otp = inp1 + inp2 + inp3 + inp4 + inp5 + val;
          onChangeText(otp);
        }}
      />
    </View>
  );
};

export default CustomOTPInput;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-evenly'},
  input: {
    borderBottomWidth: 1,
    width: wp(8),
    marginVertical: wp(8),
    textAlign: 'center',
  },
});
