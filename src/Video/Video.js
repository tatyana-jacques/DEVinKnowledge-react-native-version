import * as React from "react"
import {SafeAreaView,Text, StyleSheet, TouchableOpacity} from "react-native"
import {Video, AVPlaybackStatus} from "expo-av"
import { commonStyles } from "../styles/CommonStyles"


export default function VideoPage ({navigation, route}) {
    const {thisVideo} = route.params
    const video = React.useRef(null)
    const [status, setStatus]  = React.useState ({})
    return (
        <SafeAreaView style = {{...commonStyles.container, justifyContent: "space-around"}}>
           
            <Video
            style = {styles.video}
            ref={video}
            source = {{
                uri: thisVideo
            }}
            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate = {status => setStatus(()=>status)}
            />
             <TouchableOpacity style = {commonStyles.button} onPress = {()=>navigation.navigate("List")}>
                   <Text style = {commonStyles.buttonText}>Voltar</Text>
                </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet. create ({
   

    video:
    {
        width: "90%",
        minHeight: 200

    }

})