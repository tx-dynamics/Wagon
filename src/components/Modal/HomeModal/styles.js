import { StyleSheet } from "react-native";
import { Colors, Fonts } from 'src/utils'

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(97, 97, 97, 0.59)",
  },
  homeModalCard: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 20,
    paddingBottom: 25,
    

  },
  headingTxt: {
    fontSize: 16,
    color: Colors.red,
    fontFamily: Fonts.SemiBold,
    fontWeight: "600"
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 21
  },

});
export default styles;
