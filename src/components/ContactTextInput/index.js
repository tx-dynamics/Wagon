import React from 'react'
import { View, TextInput, Image, TouchableOpacity } from 'react-native'
import { Images } from 'src/utils'
import styles from './styles'
import AppText from 'src/components/AppText'


const ContactTextInput = (props) => {
    return (
        <View style={[styles.mainContianer, props.mainCustomContianer]}>
            {props.headerNameShow ?
            <AppText txtStyle={{textAlign:"left"}}>{props.headerName}</AppText>
                :null
            }
            <View style={[styles.container , props.customContainer]}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TextInput
                        {...props}
                        style={[styles.inputField, props.customInputStyle]}
                        placeholder={props.placeHolder}
                        placeholderTextColor={props.placeHolderColor}
                        multiline={props.multiline}
                        value={props.value}
                        editable={props.editable}
                        secureTextEntry={props.secureTextEntry}
                        onChangeText={props.onChangeText}
                        keyboardType={props.keyboardType}
                        textAlignVertical={props.textAlignVertical}
                        color={props.textColor}
                        maxLength={props.maxLength}
                        autoCapitalize={props.autoCapitalize}
                        returnKeyType={props.returnKeyType}
                        // onSubmitEditing={props.onSubmitEditing}
                        blurOnSubmit={props.blurOnSubmit}
                        ref={props.ref}
                    />
                    {props.secureText && (
                        <TouchableOpacity onPress={props.onPress} style={styles.iconContainer}>
                            <Image source={props.eyeOpen ? Images.EyeOpen : Images.PasswordEye} style={styles.eyeOpenIcon} resizeMode={"cover"} />
                        </TouchableOpacity>
                    )}
                   
                </View>

            </View>


        </View>


    )

}

export default ContactTextInput
