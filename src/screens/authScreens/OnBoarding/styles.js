import { StyleSheet } from 'react-native'
import { Colors } from 'src/utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  innerContainer: {
    height: "75%",
  },
  desTxt: {
    fontWeight: "400",
    position: "absolute",
    bottom: 60,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  onBoardingImage: {
    height: 156,
    width: 198
  },
  onBoardingImageThree: {
    height: 189,
    width: 161
  },
  onBoardingImageTwo: {
    height: 161,
    width: 267
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  btnContainer: {
    height: "25%",
    backgroundColor: "white",
    justifyContent: "center"
  }



})

export default styles