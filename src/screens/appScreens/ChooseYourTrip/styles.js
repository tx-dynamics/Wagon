import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    modalHeadingContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        alignItems: "center"
    },
    leftViewContainer: {
        width: "30%",
        marginVertical: 20,
        alignItems: "center",
        flexDirection: "row",
    },
    leftWhiteView: {
        height: 34,
        width: 34,
        backgroundColor: "white",
        alignSelf: "center",
        borderRadius: 17,
        right: 15
    },
    priceContainer: {
        height: 30,
        backgroundColor: Colors.red,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    rightViewContainer: {
        width: "70%",
        marginVertical: 20,
        borderLeftWidth: 1.5,
        borderStyle: "dashed",
        paddingStart: 20,
        flexDirection: "row",
        alignItems: "center"
        ,
    },
    rightWhiteView: {
        height: 34,
        width: 34,
        backgroundColor: Colors.white,
        alignSelf: "center",
        borderRadius: 17,
        right: -15
    }
    ,
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
        width: "90%",
        alignSelf: "center",
        marginStart: 20,
        justifyContent: "center"
    },
    toMainContainer: {
        flexDirection: "row",
        marginHorizontal: 29,
        height: 60,
        marginVertical: 0
    },
    dropDownImg: {
        height: 21,
        width: 20,
        marginRight: 20,
    },
    headingName: {
        fontSize: 13,
        color: Colors.white,
        textAlign: "left",
        paddingStart: 25,
        fontFamily: Fonts.SemiBold,
        fontWeight: "600"
    },
    listHeadingTxt: {
        fontSize: 11,
        color: Colors.txtgrey,
        textAlign: "left",
        fontFamily: Fonts.Medium,
        fontWeight: "500"
    },
    listDesTxt: {
        fontSize: 13,
        color: Colors.txtgrey,
        textAlign: "left",
        fontFamily: Fonts.Medium,
        fontWeight: "500",
    },

    weekDayTxt: {
        fontSize: 18,
        color: Colors.black,
        textAlign: "left",
        fontFamily: Fonts.Medium,
        fontWeight: "500"
    },
    fromTxt: {
        fontSize: 12,
        color: Colors.black,
        textAlign: "left",
        fontWeight: "400",
        paddingStart: 20
    },
    flatListContainer: {
        paddingBottom: 10,
        marginTop: 0,
    },
    listContiner: {
        paddingRight: 0,
        marginVertical: 6,
        paddingTop: 0,
        backgroundColor: Colors.lightgrey,
        borderRadius: 10,
        marginHorizontal: 20

    },
    innerContainer: { flexDirection: "row", },
    listIcon: {
        height: 21,
        width: 20,
        marginRight: 20,
        tintColor: Colors.black
    },
    dropDownIcon: {
        height: 21,
        width: 20,
        marginLeft: 10,
        tintColor: Colors.black
    },

})

export default styles