import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },

    aboutDesTxt: {
        fontSize: 13,
        color: Colors.black,
        fontFamily: Fonts.Regular,
        fontWeight: "400",
    },
    btnTxt: {
        fontSize: 16,
        color: Colors.white,
        fontFamily: Fonts.Medium,
        fontWeight: "500",
    },
    privacyContainer: {
        marginTop: 54,
        backgroundColor: Colors.lightgrey,
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10
    },
    privacyInnerContainer: {
        backgroundColor: Colors.white,
        padding: 20,
        borderRadius: 10,
        marginTop:0,
        marginHorizontal:-6
    },
    btnContainer: {
        marginVertical: 40,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    btnPrivacy: {
        height: 37,
        width: 104
    }





})

export default styles