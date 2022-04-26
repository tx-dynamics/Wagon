import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },

    aboutDesTxt: {
        fontSize: 14,
        color: Colors.black,
        fontFamily: Fonts.Regular,
        fontWeight: "400",
        textAlign:"justify"
    },
    aboutContainer: {
        marginTop: 20,
        backgroundColor: Colors.lightgrey,
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 20
    }





})

export default styles