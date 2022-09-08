import {SafeAreaView,Text, StyleSheet} from "react-native"

export default function Registration () {
    return (
        <SafeAreaView style = {styles.container}>
            <Text>Registration</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet. create ({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }

})