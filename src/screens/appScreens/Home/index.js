import React, { useState, useEffect } from 'react'
import { StatusBar, PermissionsAndroid, View, Image, TouchableOpacity, Text } from "react-native"
import { useIsFocused, useNavigation } from '@react-navigation/native'
import styles from './styles'
import { Images, Colors } from 'src/utils'
import AppText from 'src/components/AppText'
import Geolocation from 'react-native-geolocation-service';
import HomeModalView from 'src/components/Modal/HomeModal'
import ScheduleModalView from 'src/components/Modal/ScheduleModal'
import { useSelector } from 'react-redux'
import Header from 'src/components/Header'



import MapView, {
    Marker,
    PROVIDER_GOOGLE,
} from 'react-native-maps';

const Home = () => {
    let granted;
    let isFocused = useIsFocused()
    let navigation = useNavigation()


    const homeModalRoute = useSelector((state) => state.app.homeModalRoute)


    const [homeModal, setHomeModal] = useState(false)
    const [scheduleModal, setScheduleModal] = useState(false)
    const [date, setDate] = useState('');


    const [currentLongitude, setCurrentLongitude] = useState('');
    const [currentLatitude, setCurrentLatitude] = useState('');
    const [locationStatus, setLocationStatus] = useState('');
    const [region, setregion] = useState({
        latitude: 49.2827, //Vancouver lat
        longitude: 123.1207, //Vancouver long
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        if (isFocused) {
            requestLocationPermission();
        }
    }, [isFocused]);
    const requestLocationPermission = async () => {
        if (Platform.OS === 'ios') {
            getOneTimeLocation();
        } else {
            try {
                granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Location Access Required',
                        message: 'This App needs to Access your location',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    getOneTimeLocation();
                } else {
                    setLocationStatus('Permission Denied');
                    console.log("Permison Denied")
                    setregion({
                        latitude: 49.2827, //Vancouver lat
                        longitude: 123.1207, //Vancouver long
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    })
                }
            } catch (err) {
                console.warn(err);
            }
        }
    };
    const getOneTimeLocation = () => {
        console.log("In Get One Time Location")
        setLocationStatus('Getting Location ...');
        Geolocation.getCurrentPosition(
            (position) => {
                console.log("positon",)
                setLocationStatus('You are Here');
                const currentLongitude =
                    position.coords.longitude
                const currentLatitude =
                    position.coords.latitude

                setCurrentLongitude(currentLongitude);
                console.log("here Logging", position)
                setregion({
                    latitude: position?.coords?.latitude,
                    longitude: position?.coords?.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                })
                setCurrentLatitude(currentLatitude);
            },
            (error) => {
                setLocationStatus(error.message);
                console.log("Error is :", error.message)
            },
            {
                enableHighAccuracy: false,
                timeout: 20000,
                maximumAge: 1000
            },
        );
    };
   
    return (
        <View
            style={styles.container}>
            <StatusBar
                translucent={true}
                hidden={false}
                barStyle={"dark-content"}
                backgroundColor={"#0000"} />




            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation
                showsMyLocationButton={false}
                region={region}
                maxZoomLevel={24}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
            </MapView>
            <View style={{ position: "absolute", top: 0, justifyContent: "center", }}>
                <Header
                    LeftImage={Images.Menu}
                    headerNameShow
                    headerContainer={{ backgroundColor: "#0000", marginTop: 20 }}
                    leftArrowIcon={() => navigation.openDrawer()} />


            </View>


            {/*  <View style={{height:330,backgroundColor: "#0000", position:"absolute", top:310, right:-30}}>
                <TouchableOpacity style={{backgroundColor:"rgba(174, 0, 1, 0.44)", height:69 , width:50, borderRadius:21,justifyContent:"center"}}>
                    <Image source={Images.RightIcon} style={{height:32, width:21, tintColor:Colors.white, }}/>
                </TouchableOpacity>
            </View>
               <View style={{height:330,backgroundColor: "#0000", position:"absolute", top:510, right:0}}>
                <TouchableOpacity style={{backgroundColor:Colors.red, height:31 , width:31, borderRadius:31, justifyContent:"center", alignSelf:"flex-end", marginRight:15}}>
                    <Image source={Images.PickupLocation} style={{height:17, width:17, tintColor:Colors.white, alignSelf:"center",}}/>
                </TouchableOpacity>
            </View> */}



            <View style={styles.mapModalContainer}>
              
                <TouchableOpacity onPress={() => setHomeModal(true)}
                    activeOpacity={0.8} style={styles.modalHeader}>
                    <AppText txtStyle={styles.headingName}>{homeModalRoute ? "Leaving now" : "Schedule"}</AppText>
                    <Image source={Images.DropDown} style={styles.dropDownImg} resizeMode={"contain"} />
                </TouchableOpacity>
                <View style={styles.modalInnerContainer}>
                    <View style={styles.modalHeadingContainer}>
                        <Image source={Images.PickupLocation} style={styles.dropDownImg} resizeMode={"contain"} />
                        <AppText txtStyle={[styles.headingName, { color: Colors.black, paddingStart: 0 }]}>Pickup location</AppText>
                    </View>
                    <View style={styles.fromMainContainer}>
                        <TouchableOpacity onPress={() => homeModalRoute ? navigation.navigate("SearchYourTrip") : setScheduleModal(!scheduleModal)}
                            style={styles.fromContainer}>
                            <AppText txtStyle={styles.fromTxt}>From</AppText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modalHeadingContainer}>
                        <Image source={Images.Location} style={styles.dropDownImg} resizeMode={"contain"} />
                        <AppText txtStyle={[styles.headingName, { color: Colors.black, paddingStart: 0 }]}>Drop location</AppText>
                    </View>
                    <View style={styles.toMainContainer}>
                        <TouchableOpacity onPress={() => homeModalRoute ? navigation.navigate("SearchYourTrip") : setScheduleModal(!scheduleModal)}
                            style={styles.fromContainer}>
                            <AppText txtStyle={styles.fromTxt}>To</AppText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <HomeModalView setHomeModal={setHomeModal} homeModal={homeModal} />
            <ScheduleModalView setScheduleModal={setScheduleModal}
                scheduleModal={scheduleModal} />
        </View>
    )
}

export default Home
