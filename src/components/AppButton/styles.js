import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "space-between",
        alignItems: 'center',
        borderRadius: 8,
        alignSelf: 'center',
        height: 48,
        backgroundColor: Colors.red,
        width: "80%",
        flexDirection: "row",
    },
    buttonTextWithImage: {
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 21,
        color: Colors.white,
        fontFamily: Fonts.SemiBold,
        textAlign: "center",
        marginStart: 20
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 21,
        color: Colors.white,
        fontFamily: Fonts.SemiBold,
        textAlign: "center",
    },
    leftArrowIcon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
        marginEnd: 15
    },
    txt: {
        fontSize: 16,
        fontWeight: "600",
        fontFamily: Fonts.SemiBold,
        flex:1,
        color:Colors.white
    }
});

export default styles