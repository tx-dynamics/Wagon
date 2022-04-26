import {Platform, Dimensions , StyleSheet} from 'react-native'
import {Colors, Fonts} from 'src/utils'
const {height , width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        backgroundColor:Colors.white,
      },
      userInfoSection: {
        paddingLeft: 20,
        backgroundColor: Colors.white,
        
        marginTop: 0,
        flexDirection: 'row',
      },
      headingName: {
        fontSize: 18,
        color: Colors.black,
        fontFamily: Fonts.SemiBold,
        fontWeight: "600"
    },
      headingDes: {
        fontSize: 16,
        color: Colors.black,
        fontFamily: Fonts.Medium,
        fontWeight: "500",
        textAlign:"left"
    },
    switchTxt: {
        fontSize: 12,
        color: Colors.red,
        fontFamily: Fonts.SemiBold,
        fontWeight: "600",
        textAlign:"left"
    },
      drawerSection: {
        marginHorizontal: 20,
        height:"75%",
        marginTop:80,
      },
      profileTxt:{
        color:Colors.black,
        fontSize:18,
        fontFamily:Fonts.Bold,
        alignSelf:"center",
        marginStart:12
     },
     logoutTxt:{
        color:Colors.black,
        fontSize:18,
        fontFamily:Fonts.SemiBold,
        fontWeight:"600"

     },
     listContiner:{
        paddingRight:0, 
        marginTop:10, 
        backgroundColor:Colors.lightgrey,
        // paddingVertical:8,
        borderRadius:10

   },
    innerContainer:{flexDirection:"row",  alignItems:"center"},
    userNameContainer:{flex:1, marginStart:10,alignSelf:"center"},
    userTxt:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:14,
        fontWeight:"400",
        fontFamily:Fonts.Regular,
    },

})

export default styles