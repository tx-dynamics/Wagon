import { StyleSheet,} from "react-native";
import { Colors,Fonts } from "src/utils";

const styles = StyleSheet.create({
    forgotPasswordTxt: {
        textAlign: "left",
        fontSize: 18,
        fontWeight: "Bold",
        color: Colors.red
    },
    forgotPasswordTxtDes:{
        textAlign:"left",
        marginTop:8,
        color:"rgba(0, 0, 0, 0.49)",
    },
    codeFieldRoot: {
        marginTop: 50,
        marginHorizontal: 30
    },
    cell: {
        width: 54,
        height: 62,
        lineHeight: 27,
        textAlign: 'center',
        textAlignVertical: "center",
        backgroundColor: Colors.white,
        borderWidth:1,
        borderColor:Colors.lightgrey,
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
});

export default styles;
