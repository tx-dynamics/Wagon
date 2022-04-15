import React from 'react'
import { StatusBar, Image, View } from "react-native"
import { Images } from 'src/utils'
import styles from './styles'

const Home = () => {


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



        </View>
    )
}

export default Home
