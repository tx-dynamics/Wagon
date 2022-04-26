import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    innerContainer: {
        marginHorizontal: 20,
        flex: 1
    },
    cameraContainer: {
        height: 78,
        width: 78,
        backgroundColor: Colors.lightgrey,
        borderRadius: 78 / 2,
        marginVertical: 30,
        justifyContent: "center",
        alignSelf: "center"
    },
    cameraIcon: {
        height: 27,
        width: 27,
        alignSelf: "center"
    },
    logoImage: {
        width: 120,
        height: 67,
        alignSelf: "center",
        marginTop: 30
    },
    btnCustomStyle: {
        marginTop: 100,
        width: "100%"
    },
    socialContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 30
    },
    googleContainer: {
        height: 46,
        width: 46,
        borderRadius: 23,
        borderWidth: 0.3,
        borderColor: Colors.black,
        justifyContent: "center",
        alignItems: "center"
    },
    googleImg: { height: 27, width: 27 },
    facebookImage: {
        width: 46,
        height: 46,
        marginRight: 10
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
        fontWeight: "600",
        fontFamily: Fonts.SemiBold,
        color: Colors.red
    },
    welcomeWagon: {
        textAlign: "left",
        fontSize: 16,
        fontFamily: Fonts.Medium,
        fontWeight: "500"
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