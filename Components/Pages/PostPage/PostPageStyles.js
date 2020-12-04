import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  card: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
  },
  heading: { fontSize: 28, textAlign: "center" },
  content: { marginTop: 20, fontSize: 20, color: "grey" },
  comment: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CDCDCD",
  },
  text: { color: "white", fontSize: 20 },
  name: { color: "#229954", marginBottom: 10 },
  commenthead: {
    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 20,
    color: "#007aff",
  },
});
