import { SafeAreaView, Text, StyleSheet, ScrollView, View, TouchableOpacity, StatusBar } from "react-native"
import { useState, useEffect } from "react"
import { API } from "../services/api"
import Icon from "@expo/vector-icons/MaterialIcons"

export default function List({ navigation }) {

    const [posts, setPosts] = useState([])

    // function navigateToVideo (post) {
    //     ("Video", {post.video})
    // }

    useEffect(() => {
        fetch(API + "/posts")
            .then(async (response) => {
                const data = await response.json()
                setPosts(data)
            })
            .catch(() => alert("Houve um erro ao tentar listar os posts"))

    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ScrollView>
                <Text style = {styles.bigTittle}>DEVinKnowledge</Text>
                {
                    posts.map(post => (
                        <View style={styles.view} key={post.id}>
                            <Text style = {styles.title}>{post.title}</Text>
                            <Text></Text>

                            <Text style = {styles.paragraph}>{post.description}</Text>

                            <View style={styles.lttView}>
                                <Text style = {styles.category}>{post.category}  /  {post.skill}</Text>
                                {post.video !== "" &&
                                    <TouchableOpacity>
                                        <Icon name="videocam" size={32} color="#888" />
                                    </TouchableOpacity>}
                            </View>

                        </View>

                    ))
                }



            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ccc",
        padding: 10,
    },
    view:
    {
        margin: 10,
        borderWidth: 2,
        borderColor: "#888",
        padding: 15,
        alignItems: "center",
        backgroundColor: "#fff"

    },
    lttView:
    {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        margin: 10,

    },
    title:
    {
        color: "#888",
        fontSize: 26,
        fontWeight: "bold"
    },

    paragraph: 
    {
        color: "#888",
        fontSize: 18,
    },

    category: 
    {
        color: "#888",
        fontSize: 18,
        fontWeight: "bold",

    },
    bigTittle: 
    {
        fontSize: 30,
        fontWeight: "bold",
        color: "#888",
        alignSelf: "center"
    }


})