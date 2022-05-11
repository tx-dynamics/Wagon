import { StyleSheet } from "react-native";
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(97, 97, 97, 0.59)",
    },
    homeModalCard: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        paddingVertical: 40,
        paddingHorizontal: 20,
        marginHorizontal: 20,


    },
    listContiner: {
        marginVertical: 8,
        paddingVertical: 10,
        backgroundColor: Colors.lightgrey,
        borderRadius: 10,

    },
    flatListContainer: {
        paddingBottom: 20,
        marginTop: 10,
    },
    btnLogin: {
        marginTop: 30,
        width:"100%"
    },
    headingTxt: {
        fontSize: 22,
        color: Colors.black,
        fontFamily: Fonts.SemiBold,
        fontWeight: "600",
        marginTop:20
    },
    desTxt: {
        fontSize: 16,
        color: Colors.black,
        fontFamily: Fonts.Medium,
        fontWeight: "500",
        marginTop:4
    },
    btnTxt: {
        fontSize: 16,
        color: Colors.white,
        fontFamily: Fonts.Medium,
        fontWeight: "500",
    },

    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 21
    },

});
export default styles;
