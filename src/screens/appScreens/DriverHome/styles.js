import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    headingName: {
        fontSize: 16,
        color: Colors.white,
        textAlign: "left",
        paddingStart: 25,
        fontFamily: Fonts.SemiBold,
        fontWeight: "600"
    },
    DriverNameTxt: {
        fontSize: 14,
        color: Colors.black,
        textAlign: "left",
        fontWeight: "500",
        paddingStart: 15,
        fontFamily: Fonts.Medium,
    },
    btnNameTxt: {
        fontSize: 14,
        color: Colors.white,
        fontWeight: "500",
        fontFamily: Fonts.Medium,
    },
    btnContainer: {
        height: 45,
        width: "25%",
        borderRadius: 10,
        justifyContent: "center",
        backgroundColor:Colors.red
    },
    DriverDesTxt: {
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.28)",
        textAlign: "left",
        fontWeight: "500",
        paddingStart: 15,
        fontFamily: Fonts.Medium,
        marginTop:-2

    },

    dropDownImg: {
        height: 21,
        width: 20,
        marginRight:15,
    },
    mapModalContainer: {
        backgroundColor: Colors.white,
        height: 207,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
    modalHeader: {
        height: 61,
        backgroundColor: Colors.red,
        width: "100%",
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    modalInnerContainer: {
        flex: 1,
        justifyContent: "center",
    },
    modalHeadingContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        alignItems:"center",

    },
    fromMainContainer: {
        flexDirection: "row",
        marginHorizontal: 29,
        height: 50,
        borderLeftColor: Colors.black,
        borderLeftWidth: 1,
        borderStyle: "dashed",
        marginVertical: 10
    },
    fromContainer: {
        height: 48,
        backgroundColor: Colors.lightgrey,
        borderRadius: 10,
        width: "95%",
        alignSelf: "center",
        marginStart: 20,
        justifyContent: "center"
    },
    toMainContainer: {
        flexDirection: "row",
        marginHorizontal: 29,
        height: 50,
        marginVertical: 10
    }
})

export default styles