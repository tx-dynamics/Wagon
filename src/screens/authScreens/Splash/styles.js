import { StyleSheet } from 'react-native'
import { Colors } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.red
    },
    splashImage: {
        width: 394,
        height: 392,
        alignSelf: "center",
    },
    imageContainer: {
        flex:1,
        justifyContent: "center",
    },
    gifContainer: {
        position:"absolute",
        bottom:100,
        alignSelf:"center"
    },
    gifImage: {
        width: 120,
        height: 120,
        alignSelf: "center"
    }

})

export default styles