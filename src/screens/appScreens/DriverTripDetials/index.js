import React, { useState, useEffect } from 'react'
import { StatusBar, PermissionsAndroid, View, Image, Linking, TouchableOpacity } from "react-native"
import { useIsFocused, useNavigation } from '@react-navigation/native'
import styles from './styles'
import { Images, Colors } from 'src/utils'
import AppText from 'src/components/AppText'
import Geolocation from 'react-native-geolocation-service';
import Header from 'src/components/Header'
import AppButton from 'src/components/AppButton'
import CancelTripModalView from 'src/components/Modal/CancelTripModal'
import History from './History'
import Status from './Status'





import MapView, {
    Marker,
    PROVIDER_GOOGLE,
} from 'react-native-maps';

const Home = () => {
    let granted;
    let isFocused = useIsFocused()
    let navigation = useNavigation()



    const [cancelTripModal, setCancelTripModal] = useState(false);
    const [tripStatusCheck, setTripStatusCheck] = useState(true)

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
    const handleTripEvent = () => {
        setTripStatusCheck(!tripStatusCheck)
    }

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
                headerNameLeft={"Sam smith"}
                LeftUserImage={Images.User}
                LeftUserImageShow
                headerNameLeftShow
                headerNameRight={"In Bus"}
                thirdText
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
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10, marginHorizontal: 20 }}>
                    <TouchableOpacity onPress={() => handleTripEvent()}
                        style={[styles.btnContainer]}>
                        <AppText txtStyle={[styles.headingTxt, { color: tripStatusCheck ? Colors.red :"rgba(174, 0, 1, 0.37)" }]}>Status</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTripEvent()}
                        style={[styles.btnContainer]}>
                        <AppText txtStyle={[styles.headingTxt, { color: tripStatusCheck ?"rgba(174, 0, 1, 0.37)" : Colors.red }]}>History</AppText>
                    </TouchableOpacity>
                </View>

                {tripStatusCheck ?
                    <Status />
                    :
                    <History />

                }





            </View>



        </View>
    )
}

export default Home
