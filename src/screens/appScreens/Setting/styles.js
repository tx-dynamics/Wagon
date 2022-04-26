import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },

    headingTxt: {
        fontSize: 13,
        color: Colors.black,
        fontFamily: Fonts.SemiBold,
        fontWeight: "600",
    },
    mainListContainer: {
        paddingVertical: 15,
        backgroundColor: Colors.lightgrey,
        marginHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 10
    },
    settingIcons: {
        width: 24,
        height: 24,
        tintColor: Colors.red,
        marginHorizontal: 10
    },
   



})

export default styles