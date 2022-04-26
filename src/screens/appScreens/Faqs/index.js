import React, { useEffect, useState } from 'react'
import { StatusBar, Image, View, TouchableOpacity, FlatList, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Images, Colors } from 'src/utils'
import styles from './styles'
import Header from 'src/components/Header'
import AppText from 'src/components/AppText'
import AppButton from 'src/components/AppButton'


const SearchYourTrip = () => {
    let navigation = useNavigation()

    const [tripStatusCheck, setTripStatusCheck] = useState(true)
    const [visible, setVisible] = useState(-1);

    const setItem = (item, index) => {
        setVisible(visible === index ? -1 : index);
    };
    const data = [
        {
            id: 1,
            title: "What is Wagon?",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus urna nulla consequat bibendum pretium eleifend mattis. Nibh tortor sit erat malesuada sagittis arcu. Leo velit quis mattis blandit amet."
        },
        {
            id: 2,
            title: "How it working?",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus urna nulla consequat bibendum pretium eleifend mattis. Nibh tortor sit erat malesuada sagittis arcu. Leo velit quis mattis blandit amet."
        },
        {
            id: 3,
            title: "How we use the app?",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus urna nulla consequat bibendum pretium eleifend mattis. Nibh tortor sit erat malesuada sagittis arcu. Leo velit quis mattis blandit amet."
        },
        {
            id: 4,
            title: "What are the benefits of this app?",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus urna nulla consequat bibendum pretium eleifend mattis. Nibh tortor sit erat malesuada sagittis arcu. Leo velit quis mattis blandit amet."
        },
        
    ];



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
                headerName={"Faqs"}
                headerNameShow
                headerCustomTxt={{ color: Colors.white }}
                headerContainer={{ backgroundColor: Colors.red }}
                customLeftImage={{ tintColor: Colors.white }}
                leftArrowIcon={() => navigation.goBack(null)} />

            <View style={{ flex: 1 }}>
                <Image source={Images.WagonLogo} style={{ height: 158, width: "90%", marginVertical: 20, alignSelf: "center", borderRadius: 20 }} />

                <FlatList
                    style={{ marginTop: 0 }}
                    data={data}
                    keyExtractor={it => it.id.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => setItem(item, index)}
                            style={styles.listMainContainer}>
                            <View
                                style={styles.visibleContainer}>
                                <AppText txtStyle={[styles.headingTxt]}>{item.title}</AppText>
                                <Image style={{ width: 24, height:24 }} source={(visible === index) ? Images.DownChev : Images.UpChev} />

                            </View>
                            {visible === index && (
                                <AppText
                                txtStyle={[styles.desTxt]}>
                                    {item.detail}
                                </AppText>
                            )}

                        </TouchableOpacity>
                    )}
                />

            </View>


        </View>


    )
}

export default SearchYourTrip
