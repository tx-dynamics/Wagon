import React, { useState, useEffect } from 'react'
import { StatusBar, PermissionsAndroid, View, Image, Linking , TouchableOpacity} from "react-native"
import { useIsFocused, useNavigation } from '@react-navigation/native'
import styles from './styles'
import { Images, Colors } from 'src/utils'
import AppText from 'src/components/AppText'
import Geolocation from 'react-native-geolocation-service';
import Header from 'src/components/Header'
import AppButton from 'src/components/AppButton'
import CancelTripModalView from 'src/components/Modal/CancelTripModal'



import MapView, {
    Marker,
    PROVIDER_GOOGLE,
} from 'react-native-maps';

const Home = () => {
    let granted;
    let isFocused = useIsFocused()
    let navigation = useNavigation()

    const dialCall = () => {

        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = 'tel:+1234567890';
        }
        else {
            phoneNumber = 'telprompt:+1234567890';
        }

        Linking.openURL(phoneNumber);
    };


    const [cancelTripModal, setCancelTripModal] = useState(false);
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
                translucent={false}
                hidden={false}
                barStyle={"light-content"}
                backgroundColor={Colors.red} />
            <Header
                LeftImage={Images.LeftArrow}
                headerName={"Trip Details"}
                headerNameShow
                headerCustomTxt={{ color: Colors.white }}
                headerContainer={{ backgroundColor: Colors.red }}
                customLeftImage={{ tintColor: Colors.white }}
                leftArrowIcon={() => navigation.goBack(null)} />
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
            <View style={styles.mapModalContainer}>
                <View style={styles.modalHeader}>
                    <Image source={Images.User} style={styles.userImage} resizeMode={"contain"} />
                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                        <AppText txtStyle={styles.headingName}>John smith </AppText>
                        <AppText txtStyle={styles.idTxt}>ID: 9876532</AppText>
                    </View>
                    <TouchableOpacity onPress={() => dialCall()}>
                        <Image source={Images.PhoneIcon} style={styles.phoneIcons} resizeMode={"contain"} />
                    </TouchableOpacity>
                </View>
                <AppText txtStyle={styles.dateTxt}>ID: 9876532</AppText>

                <View style={styles.modalHeadingContainer}>
                    <Image source={Images.PickupLocation} style={styles.dropDownImg} resizeMode={"contain"} />
                    <View style={{ flex: 1 }}>
                        <AppText txtStyle={[styles.idTxt, { color: Colors.black, paddingStart: 0 }]}>Jack House</AppText>
                        <AppText txtStyle={[styles.idTxt, { marginTop: -8 }]}>09:35</AppText>
                    </View>
                </View>
                <View style={styles.fromMainContainer}></View>
                <View style={styles.modalHeadingContainer}>
                    <Image source={Images.Location} style={styles.dropDownImg} resizeMode={"contain"} />
                    <View style={{ flex: 1 }}>
                        <AppText txtStyle={[styles.idTxt, { color: Colors.black, paddingStart: 0 }]}>White House</AppText>
                        <AppText txtStyle={[styles.idTxt, { marginTop: -8 }]}>10:35</AppText>
                    </View>
                </View>

                <View style={styles.footerContainer}>
                    <AppText txtStyle={styles.priceTxt}>$25.00</AppText>
                    <AppButton
                        btnTxt={"Cancel Trip"}
                        onPress={() => setCancelTripModal(!cancelTripModal)}
                        customButtonStyle={styles.btnLogin}
                        txtStyle={styles.cancelTxt}
                    />

                </View>

            </View>

            <CancelTripModalView
            setCancelTripModal ={setCancelTripModal}
            cancelTripModal={cancelTripModal}/>

        </View>
    )
}

export default Home
