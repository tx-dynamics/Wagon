import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    mapModalContainer: {
        backgroundColor: Colors.white,
        height: 350,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    modalHeader: {
        flexDirection: "row",
        alignItems: "center"
    },
    userImage: {
        height: 60,
        width: 60
    },
    phoneIcons: {
        height: 24,
        width: 24,
        marginHorizontal: 20
    },
    footerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    headingName: {
        fontFamily: Fonts.Medium,
        fontSize: 14,
        fontWeight: "500",
        textAlign: "left"
    },
    idTxt: {
        fontFamily: Fonts.Medium,
        fontSize: 12,
        fontWeight: "500",
        color: "rgba(0, 0, 0, 0.28)",
        textAlign: "left",
        marginTop: -6

    },
    dateTxt: {
        fontFamily: Fonts.SemiBold,
        fontSize: 12,
        fontWeight: "600",
        color: Colors.black,
        textAlign: "left",
        marginVertical: 10,
        paddingStart:5
    },
    priceTxt: {
        fontFamily: Fonts.SemiBold,
        fontSize: 20,
        fontWeight: "600",
        color: Colors.black,
        textAlign: "left",
        paddingStart:5
    },
    cancelTxt: {
        fontFamily: Fonts.Medium,
        fontSize: 16,
        fontWeight: "500",
        color: "rgba(0, 0, 0, 0.7)",
    },
    modalHeadingContainer: {
        flexDirection: "row",
    },
    dropDownImg: {
        height: 21,
        width: 20,
        marginRight: 10,
        tintColor: Colors.red,
        marginTop: 4
    },
    fromMainContainer: {
        flexDirection: "row",
        marginHorizontal: 10,
        height: 60,
        borderLeftColor: Colors.red,
        borderLeftWidth: 1,
        borderStyle: "dashed",
        marginTop: -10
    },
    btnLogin: {
        width: "65%",
        backgroundColor: "rgba(174, 0, 1, 0.4)"
    },

})

export default styles