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
        fontWeight:"600"
    },
    dropDownImg: {
        height: 21,
        width: 20,
        marginRight: 20
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
    }
})

export default styles