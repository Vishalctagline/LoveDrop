import { View, Text, KeyboardAvoidingView, Platform, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GradiantHeader from '../components/GradiantHeader'
import { useGlobalStyles } from '../styles/GlobalStyles'
import CustomTextInput from '../components/CustomTextInput'
import { userType } from '../types/UserTypes/usertype'
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useAppSelector } from '../redux/Store'
import { MainRouteProps } from '../types/NavigationTypes/navigationTypes'
import { useRoute } from '@react-navigation/native'
import { getUserData } from '../utils/CommonFunctions'
import { MessageColRef } from '../utils/Firebase/constants'
import LinearGradient from 'react-native-linear-gradient'
import moment from 'moment'
import ContactCard from '../components/ContactCard'

type Message = {
    msg: string,
    createdAt: number,
    from: string | undefined
}

const ChatRoomScreen = () => {
    const [text, settext] = useState('');
    const [user, setuser] = useState<userType>({});
    const [chatList, setchatList] = useState<FirebaseFirestoreTypes.DocumentData[]>([]);
    const GlobalStyles = useGlobalStyles()
    const styles = useStyles()
    const { colors } = useAppSelector(state => state.CommonSlice)
    const route = useRoute<MainRouteProps<'ChatRoomScreen'>>()

    console.log(route.params)

    useEffect(() => {
        getChat()
    }, []);

    const getChat = async () => {
        const usr = await getUserData()
        // console.log(usr)
        setuser(usr)
        // ChatColRef
        //     .doc(route.params.chatId)
        //     .collection('messages')

        MessageColRef(route.params.chatId, false)
            .orderBy('createdAt', 'desc')
            .onSnapshot((qeurySnapshot) => {
                let list: FirebaseFirestoreTypes.DocumentData[] = []
                // console.log("qeurySnapshot.docs : ", qeurySnapshot.docs)
                qeurySnapshot.forEach(documentSnapshot => {
                    console.log("documentSnapshot : ", documentSnapshot.data())
                    list.push(documentSnapshot.data())
                })
                console.log(list)
                setchatList(list)
            })
    }

    const sendMessage = () => {
        let msgData: Message = {
            msg: text,
            createdAt: Date.now(),
            from: user.id
        }
        // ChatColRef
        //     .doc(route.params.chatId)
        //     .collection('messages')
        MessageColRef(route.params.chatId, true)
            .add(msgData)
            .then(() => {
                settext('')
                // let time = new Date(Date.now()).toLocaleString()
                // console.log(Date.now().toLocaleString())
            })
    }


    return (
        // <View style={GlobalStyles.mainContainer}>
        <LinearGradient
            colors={[colors.PRIMARY_COLOR, colors.SECONDARY_COLOR]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={GlobalStyles.mainContainer}
        >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <GradiantHeader
                    // title={
                    //     <View style={{ marginHorizontal: widthPercentageToDP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    //         <Text style={{ ...GlobalStyles.inboxHeaderTitle, flex: 1, }} numberOfLines={2} >{route.params.msg}</Text>
                    //         <Text style={{ ...GlobalStyles.inboxHeaderTitle, marginHorizontal: 15 }}>{route.params.day}</Text>
                    //         <Text style={GlobalStyles.inboxSubHeaderTitle}>100🪙</Text>
                    //     </View>
                    // }
                    title={
                        <View>
                            <ContactCard item={route.params.user} />
                        </View>
                    }
                    back={true}
                />

                <FlatList
                    inverted={true}
                    style={{ marginHorizontal: wp(5) }}
                    data={chatList}
                    renderItem={({ item }) => {
                        // console.log("item : ", item)
                        return (
                            <View style={{
                                ...styles.chatContainer,
                                alignSelf: item.from == user.id ? 'flex-end' : 'flex-start',
                                borderBottomLeftRadius: item.from == user.id ? wp(5) : 0,
                                borderBottomRightRadius: item.from == user.id ? 0 : wp(5),
                            }}>
                                <Text >{item.msg}</Text>
                                {/* <Text>{item.createdAt?.toDate().toLocaleString()}</Text> */}
                                <Text>{moment(item.createdAt).format('hh:mm a')}</Text>
                            </View>
                        )
                    }
                    }
                />
                <View style={styles.msgBox}>
                    <View style={{ flex: 1 }}>

                        <CustomTextInput
                            placeholder={'Enter message..'}
                            onChangeText={(val) => {
                                settext(val)
                            }}
                            value={text}
                        />

                    </View>
                    <Text style={GlobalStyles.btnText} onPress={() => {
                        if (text !== '') {
                            sendMessage()
                        }
                    }}>Send</Text>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
        // </View>
    )
}

export default ChatRoomScreen

const useStyles = () => {

    const { colors } = useAppSelector(state => state.CommonSlice)

    return StyleSheet.create({
        chatContainer: {
            backgroundColor: colors.INBOX_BG,
            padding: wp(3),
            borderRadius: wp(5),
            margin: wp(3)
        },
        msgBox: {
            // position: 'absolute',
            // bottom: wp(8),
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginHorizontal: 20
        }
    })

}