import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.white
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
    fromTxt: {
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.31)",
        textAlign: "left",
        fontWeight: "400",
        paddingStart: 20
    },
    dropDownImg: {
        height: 21,
        width: 20,
        marginRight:20,
    },
    mapModalContainer: {
        backgroundColor: Colors.white,
        height: 310,
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
        alignItems:"center"
    },
    fromMainContainer: {
        flexDirection: "row",
        marginHorizontal: 29,
        height: 60,
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
        marginVertical: 10
    },
    btnAdd: {
        position:"absolute",
        bottom:10
    },
})

export default styles