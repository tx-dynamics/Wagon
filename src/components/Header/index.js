import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Images } from 'src/utils'
import AppText from 'src/components/AppText'
import styles from './styles'

const Header = (props) => {
    return (
        <View style={[styles.headerContainer, props.headerContainer]}>
            <TouchableOpacity onPress={props.leftArrowIcon} style={styles.viewShow}>
                <Image source={props.LeftImage} style={[styles.leftArrowIcon, props.customLeftImage]} />
            </TouchableOpacity>
            {props.headerNameShow ?
                <View style={styles.headerTxtContainer}>
                    <AppText txtStyle={[styles.headerTxt, props.headerCustomTxt]}>{props.headerName}</AppText>
                </View>
                : null
            }
            {props.thirdIcon ?
                <TouchableOpacity onPress={props.rightArrowIcon} style={styles.viewShow}>
                    <Image source={props.RightImage} style={[styles.leftArrowIcon, props.customRightImage]} />
                </TouchableOpacity>
                :
                <View style={styles.viewShow}></View>
            }
        </View>
    )
}
export default Header;
