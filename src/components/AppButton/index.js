import React from 'react';
import { TouchableOpacity, Image, } from 'react-native';
import Apptext from 'src/components/AppText';
import styles from './styles'


const AppButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.buttonContainer, props.customButtonStyle]}>
            <Apptext txtStyle={props.txtStyle}>{props.btnTxt}</Apptext>
            <Image source={props.ImageBack} style={[styles.leftArrowIcon, props.leftButtonStyle]} />
        </TouchableOpacity>

    );
};

export default AppButton;