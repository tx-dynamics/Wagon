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
        resizeMode: "contain",
        marginStart: 10
    },
    headerTxtContainer:{ 
        flex: 1, 
        alignItems: "center" 
    },
    headerTxt: {
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
        color: Colors.black,
        fontFamily: Fonts.Regular
    },
    viewShow:{
        width:"15%"
    }


})

export default styles