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
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        height:"80%"


    },
    listContiner: {
        marginVertical: 6,
        paddingVertical: 10,
        backgroundColor: Colors.lightgrey,
        borderRadius: 10,

    },
    flatListContainer: {
        paddingBottom: 20,
        marginTop: 10,
    },
    headingTxt: {
        fontSize: 16,
        color: Colors.red,
        fontFamily: Fonts.SemiBold,
        fontWeight: "600"
    },
    listItemName: {
        fontSize: 12,
        color: Colors.black,
        fontFamily: Fonts.Medium,
        fontWeight: "500",
        textAlign:"left",
        paddingHorizontal:10
    },

    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 21
    },

});
export default styles;
