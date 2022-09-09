import { useState, useEffect } from "react"
import { SafeAreaView, Text, StyleSheet, StatusBar, View, TextInput, ScrollView, Dimensions, TouchableOpacity } from "react-native"
import { Picker } from "@react-native-picker/picker"
import { withSafeAreaInsets } from "react-native-safe-area-context"



export default function Registration({navigation}) {
    
    const [title, setTitle] = useState("")
    const [skill, setSkill] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [video, setVideo] = useState("")

    function addCard () {
        if (title<8)
        {
            alert ("Insira um título de no mínimo 8 caracteres!")
        }
        else if (skill<4)
        {
            alert ("Insira uma habilidade válida!")
        }
        else if (!category)
        {
            alert ("Escolha uma categoria!")
        }
        else if (description<32)
        {
            alert ("Insira uma descrição mais detalhada!")
        }
        else {
            navigation.navigate ("List")
        }

    }

    

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />



            <View style={styles.header}>
                <Text style={styles.headerText}>Novo post</Text>
            </View>
            <ScrollView style={{ width: "100%", marginLeft: "10%" }}>

                <TextInput
                    style={styles.input}
                    placeholder="Título"
                    selectionColor="#fff"
                    maxLength={64}
                    value={title}
                    onChangeText={setTitle}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Linguagem/Skill"
                    selectionColor="#fff"
                    maxLength={16}
                    value={skill}
                    onChangeText={setSkill}
                />

                <Picker
                    selectedValue={category}
                    onValueChange={(value) => setCategory(value)}
                    style={styles.picker}

                >
                    <Picker.Item label="Categoria" value="" />
                    <Picker.Item label="FrontEnd" value="frontend" />
                    <Picker.Item label="Backend" value="backend" />
                    <Picker.Item label="FullStack" value="fullstack" />
                    <Picker.Item label="Comportamental/Soft" value="soft" />

                </Picker>

                <TextInput
                    style={styles.input}
                    placeholder="Descrição"
                    selectionColor="#fff"
                    maxLength={512}
                    value={description}
                    onChangeText={setDescription}
                    multiline
                />


                <TextInput
                    style={styles.input}
                    placeholder="URL"
                    selectionColor="#fff"
                    value={video}
                    onChangeText={setVideo}
                />
                <TouchableOpacity style= {styles.button} onPress = {addCard}>
                    <Text style= {styles.buttonText}>Salvar</Text>
                </TouchableOpacity>


            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        backgroundColor: "#fff",
        height: Dimensions.get('screen').height,

    },

    header: {
        backgroundColor: "#8E64FA",
        width: "100%",
        height: 80,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        marginBottom: 20,


    },

    headerText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold"

    },

    input: {
        width: "90%",
        height: 30,
        backgroundColor: "#ccc",
        marginVertical: 10,
        fontSize: 18,
        paddingLeft: 10,
        color: "#888"

    },

    picker: {
        width: "90%",
        backgroundColor: "#ccc",
        marginVertical: 10,
        color: "#888"

    },
    button: {
        alignSelf: "center",
        backgroundColor: "#8E64FA",
        width: "30%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,

    },
    buttonText: {
        color: "white",
        fontSize: 20,
    }


})