import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    upComingContainer: {
        flex: 1,
        backgroundColor: Colors.white
    },
    pastContainer: {
        flex: 1,
        backgroundColor: Colors.black
    },

    headingTxt: {
        fontSize: 12,
        color: Colors.red,
        fontFamily: Fonts.Medium,
        fontWeight: "500",
        flex:1,
        textAlign:"left"
    },
    listMainContainer:{
        paddingVertical: 15,
        backgroundColor: Colors.lightgrey,
        marginHorizontal: 20,
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical:5
    },
    visibleContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingStart: 20,
        paddingEnd: 20,
    },
    desTxt: {
        fontSize: 10,
        color: Colors.red,
        fontFamily: Fonts.Regular,
        fontWeight: "400",
        textAlign:"left",
        marginHorizontal:20,
        paddingTop:10,
        paddingBottom:20,
        lineHeight:18
    },
    listHeadingTxt: {
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.5)",
        fontFamily: Fonts.Medium,
        fontWeight: "500",
        textAlign:"left",
        marginStart:10
    },
    listDesTxt: {
        fontSize: 10,
        color: Colors.black,
        fontFamily: Fonts.Medium,
        fontWeight: "500",
        textAlign:"left",
    },
    btnContainer: {
        height: 54,
        width: "35%",
        borderRadius: 10,
        justifyContent: "center",
        borderRadius:25
    },
    flatListContainer: {
        paddingBottom: 10,
        marginTop: 0,
    },
    btnLogin: {
        marginTop: 30,
        width: "85%",
        position:"absolute",
        bottom:20,
        backgroundColor:"rgba(174, 0, 1, 0.5)"
    },
    
  


})

export default styles