import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Images, Colors } from 'src/utils'
import styles from './styles'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { setUser } from 'src/redux/actions/authActions'
import { useDispatch, } from "react-redux"
import AppText from 'src/components/AppText'


const Drawer = () => {
    let navigation = useNavigation()
    let dispatch = useDispatch()

    return (
        <View style={{ flex: 1, backgroundColor:Colors.white, borderTopEndRadius:15, borderBottomEndRadius:15 }}>
            <View style={styles.drawerSection}>
                <View style={{ alignItems: "center" }}>
                    <Image source={Images.User} style={{ height: 72, width: 72 }} resizeMode={"contain"} />
                    <AppText txtStyle={styles.headingName}>Leaving Now</AppText>

                </View>
                <View style={{ marginTop: 40, }}>
                    <TouchableOpacity onPress={() => navigation.navigate("YourTrips")}
                        style={styles.listContiner}>
                        <View style={styles.innerContainer}>
                            <View style={{ backgroundColor: Colors.red, height: 40, width: 40, justifyContent: "center", alignItems: "center", borderRadius: 4 }}>
                                <Image source={Images.Location} style={{ height: 17, width: 16, tintColor: Colors.white }} resizeMode={"contain"} />
                            </View>
                            <View style={styles.userNameContainer}>
                                <AppText txtStyle={styles.headingDes}>Your Trips</AppText>
                            </View>
                            <Image source={Images.ArrowRight} style={{ width: 20, height: 21, marginRight: 10 }} resizeMode={"contain"} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("SelectLanguage")}
                        style={styles.listContiner}>
                        <View style={styles.innerContainer}>
                            <View style={{ backgroundColor: Colors.red, height: 40, width: 40, justifyContent: "center", alignItems: "center", borderRadius: 4 }}>
                                <Image source={Images.Language} style={{ height: 17, width: 16, tintColor: Colors.white }} resizeMode={"contain"} />
                            </View>
                            <View style={styles.userNameContainer}>
                                <AppText txtStyle={styles.headingDes}>Language</AppText>
                            </View>
                            <Image source={Images.ArrowRight} style={{ width: 20, height: 21, marginRight: 10 }} resizeMode={"contain"} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Faqs")}
                        style={styles.listContiner}>
                        <View style={styles.innerContainer}>
                            <View style={{ backgroundColor: Colors.red, height: 40, width: 40, justifyContent: "center", alignItems: "center", borderRadius: 4 }}>
                                <Image source={Images.Faqs} style={{ height: 17, width: 16, tintColor: Colors.white }} resizeMode={"contain"} />
                            </View>
                            <View style={styles.userNameContainer}>
                                <AppText txtStyle={styles.headingDes}>FAQS</AppText>
                            </View>
                            <Image source={Images.ArrowRight} style={{ width: 20, height: 21, marginRight: 10 }} resizeMode={"contain"} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Setting")}
                        style={styles.listContiner}>
                        <View style={styles.innerContainer}>
                            <View style={{ backgroundColor: Colors.red, height: 40, width: 40, justifyContent: "center", alignItems: "center", borderRadius: 4 }}>
                                <Image source={Images.Setting} style={{ height: 17, width: 16, tintColor: Colors.white }} resizeMode={"contain"} />
                            </View>
                            <View style={styles.userNameContainer}>
                                <AppText txtStyle={styles.headingDes}>Settings</AppText>
                            </View>
                            <Image source={Images.ArrowRight} style={{ width: 20, height: 21, marginRight: 10 }} resizeMode={"contain"} />
                        </View>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => navigation.navigate("MyBooking")}
                        style={styles.listContiner}>
                        <View style={styles.innerContainer}>
                            <View style={{ backgroundColor: Colors.red, height: 40, width: 40, justifyContent: "center", alignItems: "center", borderRadius: 4 }}>
                                <Image source={Images.Help} style={{ height: 17, width: 16, tintColor: Colors.white }} resizeMode={"contain"} />
                            </View>
                            <View style={styles.userNameContainer}>
                                <AppText txtStyle={styles.headingDes}>Help Centre</AppText>
                            </View>
                            <Image source={Images.ArrowRight} style={{ width: 20, height: 21, marginRight: 10 }} resizeMode={"contain"} />
                        </View>
                    </TouchableOpacity> */}
                </View>

            </View>
            <View style={{ flex: 1, marginHorizontal: 20, marginTop: 10 }}>
                <AppText txtStyle={styles.switchTxt}>Switch to Wagon Business</AppText>

                <TouchableOpacity style={{ height: 48, width: 147, backgroundColor: Colors.lightgrey, borderRadius: 10, flexDirection: "row", alignItems: "center" , marginTop:15}}>
                    <Image source={Images.LogoutIcon} style={{ height: 21, width: 21, tintColor: Colors.black, marginHorizontal: 10 }} />
                    <AppText txtStyle={styles.logoutTxt}>LOGOUT</AppText>

                </TouchableOpacity>
            </View>



        </View>
    )
}


export default Drawer;

// const styles = StyleSheet.create({



//   firstDrawerSection: {
//     backgroundColor: Colors.white,
//     marginHorizontal: '5%',
//     marginTop: '3%',
//   },
//   logoutDrawerSection: {
//     backgroundColor: Colors.white,
//     marginHorizontal: '5%',
//     width: '90%',
//     position: 'absolute',
//     bottom: 30,
//   },
//   drawerSection2: {
//     backgroundColor: Colors.white,
//     marginHorizontal: '5%',
//     marginVertical: '5%',
//   },
//   drawerSection3: {
//     backgroundColor: Colors.white,
//     marginHorizontal: '5%',
//   },
//   drawerSection4: {
//     backgroundColor: Colors.white,
//     marginHorizontal: '5%',
//     paddingBottom: '2%',
//   },
//   logoCircleDesign: {
//     backgroundColor: Colors.white,
//     borderRadius:
//       Math.round(
//         Dimensions.get('window').width + Dimensions.get('window').height,
//       ) / 2,
//     width: Dimensions.get('window').width * 0.12,
//     height: Dimensions.get('window').width * 0.12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: '5%',
//   },
//   appNameView: {
//     margin: '5%',
//   },
//   appNameText: {
//     color: Colors.white,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   appNameDes: {
//     color: Colors.white,
//     fontSize: 12,
//     textDecorationLine: 'underline',
//   },
//   barView: {
//     borderBottomColor: '#f9f5f2',
//     borderBottomWidth: 2,
//   },
// });
