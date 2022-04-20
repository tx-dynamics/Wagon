import { StyleSheet } from "react-native";
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "rgba(97, 97, 97, 0.59)",
    },
    homeModalCard: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        paddingVertical: 10,
        paddingHorizontal: 20,
        paddingBottom: 25,
        width: "50%",
        alignSelf:"center",
        top:140
     },
    calendarName: {
        fontSize: 18,
        color: Colors.black,
        textAlign: "left",
        fontFamily: Fonts.Medium,
        fontWeight: "500"
    },
    calendatListContiner: {
        paddingRight: 0,
        marginVertical: 3,
        paddingVertical: 10,
        alignSelf: "center",

    },
    innerContainer: { flexDirection: "row", },

});
export default styles;
