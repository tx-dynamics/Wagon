import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    logoImage: {
        width: 120,
        height: 67,
        alignSelf: "center",
        marginTop: 30
    },
    facebookImage: {
        width: 46,
        height: 46,
    },
    forgotPassword: {
        textAlign: "right",
        marginTop: 7,
        fontSize: 10,
        fontWeight: "Bold"
    },
    loginTxt: {
        textAlign: "left",
        marginTop: 20,
        fontSize: 18,
        fontWeight: "Bold",
        color: Colors.red
    },
    welcomeWagon: {
        textAlign: "left",
        fontSize: 16,
    },
    orWithTxt: {
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.26)",
        marginVertical: 40
    },
    signupContainer: {
        flexDirection: "row",
        alignSelf: "center",
    }

})

export default styles