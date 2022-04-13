import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Images } from 'src/utils'
import AppText from 'src/components/AppText'
import styles from './styles'

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={props.leftArrowIcon}>
                <Image source={Images.LeftArrow} style={styles.leftArrowIcon} />
            </TouchableOpacity>
            {props.headerNameShow ?
                <View style={styles.headerTxtContainer}>
                    <AppText style={styles.headerTxt}>{props.headerName}</AppText>
                </View>
                : null
            }
            <View style={styles.viewShow}></View>
        </View>
    )
}
export default Header;
