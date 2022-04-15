import { StyleSheet } from 'react-native'
import { Colors } from 'src/utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.red
    },
    splashImage: {
        width: 250,
        height: 250,
        alignSelf: "center",
    },
    imageContainer: {
        height: "60%",
        justifyContent: "flex-end",
    },
    gifContainer: {
        height: "40%",
        justifyContent: "center",
    },
    gifImage: {
        width: 120,
        height: 120,
        alignSelf: "center"
    }

})

export default styles