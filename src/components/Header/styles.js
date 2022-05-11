import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Colors.white
    },
    leftArrowIcon: {
        width: 24,
        height: 24,
        resizeMode: "cover",
        marginStart: 20,
    },
    leftUserImage: {
        width: 29,
        height: 29,
        marginRight: 10,
        marginLeft:-10
    },
    headerTxtContainer:{ 
        flex: 1, 
        alignItems: "center" 
    },
    headerTxtLeftContainer:{ 
        // flex: 1, 
        // alignItems: "center" 
    },
    headerTxt: {
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 24,
        color: Colors.black,
        fontFamily: Fonts.Medium
    },
    thirdTxt: {
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 24,
        color: Colors.black,
        fontFamily: Fonts.Medium
    },
    viewShow:{
        width:"15%"
    }


})

export default styles