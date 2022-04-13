import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Apptext from 'src/components/AppText';
import { Images } from 'src/utils'
import styles from './styles'


const AppButton = ({ buttonTitle, onPress, style, customStyle, ImageButton }) => {

    return (
        ImageButton ?
            <TouchableOpacity
                onPress={onPress}
                style={[styles.buttonContainer, customStyle]}
                customStyle={style}>
                <Apptext style={styles.buttonTextWithImage}>{buttonTitle}</Apptext>
                <Image source={Images.RightChev} style={styles.leftArrowIcon} />

            </TouchableOpacity>
            :
            <TouchableOpacity
                onPress={onPress}
                style={[styles.buttonContainer, customStyle]}
                customStyle={style}>
                <Apptext style={styles.buttonText}>{buttonTitle}</Apptext>

            </TouchableOpacity>
    );
};

export default AppButton;