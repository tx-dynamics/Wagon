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
    desName: {
        fontSize: 13,
        color: Colors.txtgrey,
        textAlign: "left",
        fontFamily: Fonts.Regular,
        fontWeight: "400",
        
    },
    fromTxt: {
        fontSize: 12,
        color: Colors.black,
        textAlign: "left",
        fontWeight: "400",
        paddingStart: 20
    },
    flatListContainer: {
        paddingBottom: 20,
        marginTop: 10,
        marginHorizontal: 20,
    },
    listContiner: {
        paddingRight: 0,
        marginVertical: 7,
        paddingVertical: 5,
        backgroundColor:Colors.lightgrey,
        borderRadius:10,
        paddingStart:15,

    },
    innerContainer: { flexDirection: "row", alignItems:"center"},
    listIcon: {
        height: 21,
        width: 20,
        marginRight: 20,
        tintColor: Colors.red
    },
    locationIcon: {
        height: 21,
        width: 17,
        marginRight: 5,
        tintColor: Colors.red
    },
    savedPlaceContainer: {
        marginHorizontal: 20,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        alignSelf:"center",
    }

})

export default styles