import { StyleSheet } from "react-native";
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(97, 97, 97, 0.59)",
    },
    homeModalCard: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingVertical: 40,
        paddingHorizontal: 20,
        paddingBottom: 25,


    },
    btnStyle: {
        marginTop: 21,
        width: "95%",
        backgroundColor:Colors.lightgrey
    },
    btnTxt: {
        color: Colors.black,
        marginStart: 20,
        fontSize: 14,
        fontWeight: "400",
        textAlign: "left",
        fontFamily:Fonts.Regular
    },
    headingTxt: {
        fontSize: 20,
        color: Colors.black,
        fontFamily: Fonts.Medium,
        fontWeight: "500"
    },

    itemContainer: {
        marginTop: 21
    },
    btnContainer:{
        paddingVertical:25
    }

});
export default styles;
