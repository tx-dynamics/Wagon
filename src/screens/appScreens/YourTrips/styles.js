import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    upComingContainer: {
        flex: 1,
        backgroundColor: Colors.white
    },
    pastContainer: {
        flex: 1,
        backgroundColor: Colors.black
    },

    headingTxt: {
        fontSize: 18,
        color: Colors.white,
        fontFamily: Fonts.SemiBold,
        fontWeight: "600"
    },
    listHeadingTxt: {
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.5)",
        fontFamily: Fonts.Medium,
        fontWeight: "500",
        textAlign:"left",
    },
    listDesTxt: {
        fontSize: 10,
        color: Colors.black,
        fontFamily: Fonts.Medium,
        fontWeight: "500",
        textAlign:"left",
    },
    btnContainer: {
        height: 45,
        width: "45%",
        borderRadius: 10,
        justifyContent: "center"
    },
    flatListContainer: {
        paddingBottom: 10,
        marginTop: 0,
    },
    listContiner: {
        paddingRight: 0,
        marginVertical: 6,
        paddingTop: 0,
        borderRadius: 10,

    },
    listIcon: {
        height: 21,
        width: 20,
        marginRight: 20,
        tintColor: Colors.black
    },
  


})

export default styles