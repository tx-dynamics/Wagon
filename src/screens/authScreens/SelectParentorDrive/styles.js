import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    logoImage: {
        width: 118,
        height: 73,
        alignSelf: "center",
    },
    containerOne: {
        height: "50%",
        backgroundColor: "white",
        justifyContent: "center"
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 45
    },
    continueTxt: {
        fontSize: 18,
        fontWeight: "400"
    },
    btnTxt: {
        color: "white",
        marginStart: 10,
        fontSize: 14,
        fontWeight: "600",
        textAlign: "left"
    },
    btnStyle: {
        marginTop: 21,
        width: "85%"
    },
    welcomeTxt:{
        fontSize:20
    }

})

export default styles