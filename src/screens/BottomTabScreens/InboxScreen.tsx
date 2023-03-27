import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import GradiantHeader from '../../components/GradiantHeader'
import { useGlobalStyles } from '../../styles/GlobalStyles'
import CustomHeader from '../../components/CustomHeader'
import { AppStrings } from '../../utils/AppStrings'
import { useCustomNavigation } from '../../navigation/hooks/useCustomNavigation'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useAppSelector } from '../../redux/Store'
import { ChatColRef, MessageColRef } from '../../utils/Firebase/constants'

export type InboxMessageType = {
  msg: string,
  day: string
}

const inboxData: InboxMessageType[] = [
  {
    msg: AppStrings.anonymousGirlLikedyou,
    day: '2d'
  },
  {
    msg: AppStrings.anonymousBoySentNote,
    day: '4d'
  },
  {
    msg: AppStrings.youSentNote,
    day: '4d'
  },
]

const InboxScreen = () => {
  // const { navigation } = useCustomNavigation('InboxScreen')
  const GlobalStyles = useGlobalStyles()
  const styles = useStyles()

  useEffect(() => {
    getInboxList()
  }, []);

  const getInboxList = () => {

    // ChatColRef
    //   .doc('PH3QcAQaReeO1lfBjsAqPBI4uA33-2xw9SlmyrAeOjLZNqq1gJzDDfgQ2')
    //   .get().then((val) => {
    //     console.log(val)
    //   })
    // .collection('messages')

    // MessageColRef('PH3QcAQaReeO1lfBjsAqPBI4uA33-2xw9SlmyrAeOjLZNqq1gJzDDfgQ2').get().then((val) => {
    //   console.log(val)
    // })

  }



  return (
    <View style={GlobalStyles.mainContainer}>

      <GradiantHeader
      // leftTitle={AppStrings.inbox}
      // rightTitle={AppStrings.profile}
      // onRightTitlePress={() => {
      //   // navigation.goBack()
      //   // navigation.navigate('ProfileScreen')
      // }}
      // isLeft={true}
      />

      <FlatList
        data={inboxData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            // navigation.navigate('ChatScreen', {
            //   day: item.day,
            //   msg: item.msg
            // })
          }}>
            <View style={styles.container}>
              <Text>{item.msg}</Text>
              <Text>{item.day}</Text>
            </View>
          </TouchableOpacity>
        )}
      />


    </View>
  )
}

const useStyles = () => {

  const { colors } = useAppSelector(state => state.CommonSlice)

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: wp(5),
      backgroundColor: colors.INBOX_BG,
      margin: wp(2),
      marginHorizontal: wp(5),
      borderRadius: wp(3)
    }
  })
}

export default InboxScreen