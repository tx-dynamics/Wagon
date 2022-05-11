import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'
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
        height: 450,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingVertical: 0,
        paddingHorizontal: 20
    },
    btnContainer: {
        height: 54,
        width: "35%",
        justifyContent: "center",
    },
    btnListContainer: {
        // height: 25,
        // width: 51,
        backgroundColor:  Colors.red ,
        // marginHorizontal:15,
        marginLeft:15,
        alignSelf:"center",
        borderRadius:4,
        paddingHorizontal:10
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
    btnListTxt: {
        fontFamily: Fonts.Medium,
        fontSize: 7,
        fontWeight: "500",
        color:Colors.white,
    },
    headingTxt: {
        fontFamily: Fonts.SemiBold,
        fontSize: 18,
        fontWeight: "600",

    },
    headingListTxt: {
        fontFamily: Fonts.Medium,
        fontSize: 12,
        fontWeight: "500",
        textAlign:"left"
    },
    desListTxt: {
        fontFamily: Fonts.Medium,
        fontSize: 8,
        fontWeight: "500",
        textAlign:"left",
        color:"rgba(0, 0, 0, 0.36)",
        marginTop:-10
    },
    
    priceTxt: {
        fontFamily: Fonts.SemiBold,
        fontSize: 20,
        fontWeight: "600",
        color: Colors.black,
        textAlign: "left",
        paddingStart:5
    },
    dateTxt: {
        fontFamily: Fonts.Medium,
        fontSize: 9,
        fontWeight: "500",
        color: "rgba(0, 0, 0, 0.51)",
        marginHorizontal:15,
        alignSelf:"center"
    },
    modalHeadingContainer: {
        flexDirection: "row",
    },
    dropDownImg: {
        height: 12,
        width: 12,
        tintColor: Colors.white,
        alignSelf:"center"

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
    listContiner: {
        paddingRight: 0,
        paddingTop: 0,
        borderRadius: 10,
        justifyContent:"center",

    },

})

export default styles