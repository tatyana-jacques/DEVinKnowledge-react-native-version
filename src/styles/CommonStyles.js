import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ccc",
        padding: 10,
    },
    button:
    {
        backgroundColor: "#8E64FA",
        width: "50%",
        height: 40,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: "10%",
    },

    buttonText:
    {
        color:"#fff",
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "bold"
    }

})