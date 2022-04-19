import { StyleSheet,} from "react-native";
import { Colors,Fonts } from "src/utils";

const styles = StyleSheet.create({
    forgotPasswordTxt: {
        textAlign: "left",
        fontSize: 18,
        fontWeight: "600",
        color: Colors.red,
        fontFamily:Fonts.SemiBold
    },
    forgotPasswordTxtDes:{
        textAlign:"left",
        marginTop:8,
        color:"rgba(0, 0, 0, 0.49)",
    }
});

export default styles;
