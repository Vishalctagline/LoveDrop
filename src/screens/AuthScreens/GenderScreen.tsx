import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../styles/GlobalStyles';
import CustomHeader from '../../components/CustomHeader';
import { useCustomAuthNavigation } from '../../navigation/hooks/useCustomNavigation';
import { AppStrings } from '../../utils/AppStrings';
import CustomSecondarybutton from '../../components/CustomSecondarybutton';

const GenderScreen = () => {
    const { navigation, route } = useCustomAuthNavigation('GenderScreen');
    return (
        <View style={GlobalStyles.mainContainer}>
            <CustomHeader
                back
                onPress={() => {
                    navigation.goBack();
                }}
            />

            <View style={GlobalStyles.formHeaderContainer}>
                <Text style={GlobalStyles.formHeader}>{AppStrings.iam}</Text>

                {/* <Text style={GlobalStyles.errorText}>{nameError}</Text> */}
            </View>
            <View style={GlobalStyles.floatingBtnContainer}>
                <CustomSecondarybutton
                    title={AppStrings.getStared}
                    onPress={() => {
                        navigation.navigate('WelcomeScreen')
                    }}
                />
            </View>
        </View>
    )
}

export default GenderScreen

const styles = StyleSheet.create({})