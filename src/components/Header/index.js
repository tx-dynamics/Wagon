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
            {props.LeftUserImageShow ?
                <Image source={props.LeftUserImage} style={[styles.leftUserImage, props.customLeftImage]} />
                : null
            }

            {props.headerNameLeftShow ?
                <View style={styles.headerTxtLeftContainer}>
                    <AppText txtStyle={[styles.headerTxt, props.headerCustomTxt]}>{props.headerNameLeft}</AppText>
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
            {props.thirdText ?
                <View style={[styles.headerTxtContainer ,{justifyContent:"flex-end", marginRight:20, flexDirection:"row", flex:1, }]}>

                    <View style={{height:6, width:6, backgroundColor:"#01C400", borderRadius:6, marginRight:10}}></View>
                    <AppText txtStyle={[styles.thirdTxt, props.headerCustomTxt]}>{props.headerNameRight}</AppText>
                </View>
                :
                null
            }
        </View>
    )
}
export default Header;
