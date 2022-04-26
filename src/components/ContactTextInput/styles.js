import {Colors, Fonts} from 'src/utils'
import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.lightgrey,
        marginTop:3,
        borderRadius:10,
        height:53,
        justifyContent:"center",
        paddingStart:10
    },
    headerTxt: {
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 24,
        color: Colors.black,
        fontFamily: Fonts.Regular
    },
    inputField:{ 
        flex:1, 
        fontFamily:Fonts.Regular , 
        fontSize:16 , 
        fontWeight:"400",
        padding:0,
        color:Colors.black
    },
    iconContainer:{padding:10},
    // eyeIcon:{height:14, width:14},
    eyeOpenIcon:{height:20, width:20, marginRight:10},
    editPencilIcon:{height:16, width:16, marginRight:20},

    calendarIcon:{height:16, width:14},
    mainContianer:{marginTop:15}
  
 

    
    

})

export default styles