import { StyleSheet,} from "react-native";
import { Colors } from "src/utils";

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
    }
});

export default styles;
