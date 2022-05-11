import React, { useState, useEffect } from 'react'
import { StatusBar, PermissionsAndroid, View, Image, TouchableOpacity, Text } from "react-native"
import { useIsFocused, useNavigation } from '@react-navigation/native'
import styles from './styles'
import { Images, Colors } from 'src/utils'
import AppText from 'src/components/AppText'
import Geolocation from 'react-native-geolocation-service';
import { useSelector } from 'react-redux'
import Header from 'src/components/Header'
import AppButton from 'src/components/AppButton'
import PaymentBookedView  from 'src/components/Modal/PaymentBooked'



import MapView, {
    Marker,
    PROVIDER_GOOGLE,
} from 'react-native-maps';

const DriverHome = () => {
    let granted;
    let isFocused = useIsFocused()
    let navigation = useNavigation()


    const homeModalRoute = useSelector((state) => state.app.homeModalRoute)


    const [paymentBookedModal, setPaymentBookedModal] = useState(false)
    const [scheduleModal, setScheduleModal] = useState(false)
    const [seatNumbers, setSeatsNumber] = useState(1);
    const [fares, setFares] = useState(5);


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

    const increaseSeatsNumber = () => {
        let number = seatNumbers + 1;
        setSeatsNumber(number)
    }
    const decreaseSeatsNumber = () => {
        if (seatNumbers > 1) {
            let number = seatNumbers - 1;
            setSeatsNumber(number)
        }

    }

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
                    LeftImage={Images.LeftArrow}
                    headerNameShow
                    headerContainer={{ backgroundColor: "#0000", marginTop: 20 }}
                    leftArrowIcon={() => navigation.goBack(null)} />
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
                <AppText txtStyle={styles.headingTxt}>Cash On Hand</AppText>
                <View style={{ paddingTop: 30, flexDirection: "row", marginHorizontal: 20, justifyContent: "space-between", alignItems: "center" }}>
                    <AppText txtStyle={styles.seatTxt}>Seats</AppText>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => decreaseSeatsNumber()} style={{ height: 48, width: 50, backgroundColor: Colors.lightgrey, borderRadius: 10, justifyContent: "center" }}>
                            <AppText txtStyle={styles.incrementIcon}>-</AppText>

                        </TouchableOpacity>
                        <AppText txtStyle={styles.NumberTxt}>{seatNumbers}</AppText>
                        <TouchableOpacity onPress={() => increaseSeatsNumber()} style={{ height: 48, width: 50, backgroundColor: Colors.lightgrey, borderRadius: 10, justifyContent: "center" }}>
                            <AppText txtStyle={styles.incrementIcon}>+</AppText>

                        </TouchableOpacity>


                    </View>


                </View>
                <View style={{ paddingVertical: 20, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, marginTop:10 }}>
                    <AppText txtStyle={styles.seatTxt}>Fare</AppText>
                    <AppText txtStyle={styles.amountTxt}>$5</AppText>

                </View>
                <View style={{ alignSelf: "flex-end", marginRight: 20 }}>
                    <AppButton
                        btnTxt={"Book"}
                        onPress={() => setPaymentBookedModal(!paymentBookedModal)}
                        customButtonStyle={styles.btnLogin}
                    />
                </View>


            </View>
       
            <PaymentBookedView
            setPaymentBookedModal={setPaymentBookedModal}
            paymentBookedModal={paymentBookedModal}
            />
        </View>
    )
}

export default DriverHome
