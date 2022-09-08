import {SafeAreaView,Text, StyleSheet} from "react-native"

export default function List () {
    return (
        <SafeAreaView style = {styles.container}>
            <Text>List</Text>
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