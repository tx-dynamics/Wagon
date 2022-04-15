import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    codeFieldRoot: {
        marginTop: 80,
        marginHorizontal: 30
    },
    cell: {
        width: 54,
        height: 62,
        lineHeight: 27,
        textAlign: 'center',
        textAlignVertical: "center",
        backgroundColor: Colors.lightgrey,
        borderRadius: 10,
        color: Colors.black,
        fontWeight: "500",
        fontSize: 18,
        letterSpacing: 0.75,
        fontFamily: Fonts.Regular,
    },
    focusCell: {
        borderColor: Colors.darkGrey,
    },

})

export default styles