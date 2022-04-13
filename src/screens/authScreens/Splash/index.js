import React, { useEffect, useState } from 'react'
import { StatusBar, Image, View } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Images } from 'src/utils'
import styles from './styles'
import FastImage from 'react-native-fast-image'

const Splash = () => {
    let navigation = useNavigation()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 2000)
        setTimeout(() => {
            navigation.replace("SelectParentorDrive")
        }, 4000)
    }, [])
    return (
        <View
            style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.imageContainer}>
                <Image
                    source={Images.Logo}
                    style={styles.splashImage}
                    resizeMode={"contain"} />
            </View>
            {loading ?
                <View style={styles.gifContainer}>
                    <FastImage
                        source={Images.LogoGif}
                        style={styles.gifImage}
                    />
                </View>
                : null}


        </View>
    )
}

export default Splash
