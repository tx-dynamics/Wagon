import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    continueUs: {
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 24,
        color: Colors.black,
        fontFamily: Fonts.Regular,
        textAlign: "center"
    },
    waganTxt: {
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 24,
        color: Colors.red,
        fontFamily: Fonts.Regular,
        textAlign: "center"
    },
    logoImage: {
        width: 118,
        height: 73,
        alignSelf: "center",
    }

})

export default styles