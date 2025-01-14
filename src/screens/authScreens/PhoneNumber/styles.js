import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    innerContainer: {
        flex: 1,
        marginHorizontal: 20
    },
    numberContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },
    dropDownContainer: {
        width: "25%",
        paddingRight: 5,
        marginTop: 10,
        height: 53
    },
    inputContainer: {
        width: "75%",
        paddingLeft: 5
    },
    phoneNumberDes: {
        textAlign: "left",
        marginTop: 25,
        fontSize: 13,
        fontWeight: "400",
        color: "rgba(0, 0, 0, 0.44)"
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40
    },
    checkMarkContainer: {
        width: 20,
        height: 20,
        backgroundColor: Colors.white,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.black,
        borderWidth: 1
    },
    checkImage: {
        height: 13,
        width: 13,
        tintColor: Colors.black,
        resizeMode: "contain"
    },

    customBtnStyle: {
        marginTop: 15,
        width: "100%"
    },
    agreeTxt: {
        paddingLeft: 10,
        fontSize: 12,
        fontWeight: "500",
        fontFamily: Fonts.Medium
    }

})

export default styles