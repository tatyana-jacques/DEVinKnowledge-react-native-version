import { SafeAreaView, Text, StyleSheet, ScrollView, View, TouchableOpacity, StatusBar, FlatList} from "react-native"
import {commonStyles} from "../styles/CommonStyles"
import { useState, useEffect } from "react"
import { API } from "../services/api"
import Icon from "@expo/vector-icons/MaterialIcons"
import { TextInput } from "react-native-gesture-handler"
import {useIsFocused} from "@react-navigation/native"


export default function List({navigation}) {


    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [frontend, setFrontend] = useState(0)
    const [backend, setBackend] = useState(0)
    const [fullstack, setFullstack] = useState(0)
    const [soft, setSoft] = useState(0)
    const focusedScreen = useIsFocused()
   

   useEffect (()=>{
    if (focusedScreen===true){
        getPosts()
       
    }},[focusedScreen])



    function getPosts() {
        fetch(API + "/posts" + "?title_like=" + search)
            .then(async (response) => {
                const data = await response.json()
                const qtdFront = data.filter(item => item.category === "Frontend")
                const qtdBack = data.filter(item => item.category === "Backend")
                const qtdFull = data.filter(item => item.category === "Fullstack")
                const qtdSoft = data.filter(item => item.category === "SoftSkills")
                setData(data)
                setFrontend(qtdFront.length)
                setBackend(qtdBack.length)
                setFullstack(qtdFull.length)
                setSoft(qtdSoft.length)
                
            })
            .catch(() => alert("Houve um erro ao tentar listar os posts"))
    }




    function searchWord() {
        getPosts()
    }

    

   
    return (
        <SafeAreaView style={commonStyles.container}>
            <StatusBar />

        
                <Text style={styles.bigTittle}>DEVinKnowledge</Text>
                <View style={styles.search}>
                    <TextInput
                        style={styles.input}
                        selectionColor="#fff"
                        placeholder="Pesquise por uma tarefa"
                        autoCapitalize="none"
                        value={search}
                        onChangeText={setSearch} />
                    <TouchableOpacity onPress={searchWord}>
                        <Icon name="search" size={32} color="#8E64FA" style={{ marginHorizontal: 5 }} />
                    </TouchableOpacity>


                </View>

                <View style={styles.categoryArea}>
                    <Text style={styles.categoryText}>Total: {data.length}</Text>
                    <Text style={styles.categoryText}>Frontend: {frontend}</Text>
                    <Text style={styles.categoryText}>Backend: {backend}</Text>
                    <Text style={styles.categoryText}>Fullstack: {fullstack}</Text>
                    <Text style={styles.categoryText}>Soft: {soft}</Text>
                </View>
               <FlatList 
               
               data = {data}
               keyExtractor = { item => item.id}
               renderItem = {({item}) => <ListItem data = {item}/>}       
                        />

                 
                <TouchableOpacity style = {commonStyles.button} onPress = {()=>navigation.navigate("Registration")}>
                   <Text style = {commonStyles.buttonText}>Novo post</Text>
                </TouchableOpacity>


          
        </SafeAreaView>
    )

    function ListItem ({data}) {
        return (
        <TouchableOpacity style={styles.view}  onPress = {()=>navigateToEdit(data)}>
                            <Text style={styles.title}>{data.title}</Text>
                            <Text style={styles.paragraph}>{data.description}</Text>
    
                            <View style={styles.lttView}>
                                <Text style={styles.category}>{data.category}  /  {data.skill}</Text>
                                {data.video !== "" &&
                                    <TouchableOpacity onLongPress={()=>navigation.navigate("Video", {thisVideo: data.video})}>
                                        <Icon name="videocam" size={32} color="#888" />
                                   </TouchableOpacity>}
                            </View>
                       </TouchableOpacity>
        )
    }
    
}



const styles = StyleSheet.create({
   
    view:
    {
        margin: 10,
        borderWidth: 1,
        borderColor: "#888",
        padding: 15,
        alignItems: "center",
        backgroundColor: "#fff",
        minHeight: 100,
        width: "90%",
       

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
        fontWeight: "bold",

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
        fontSize: 36,
        fontWeight: "bold",
        color: "#8E64FA",
        alignSelf: "center",
        marginVertical: 20,
    },

    search: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        margin: 10,
        alignItems: "center",
        marginHorizontal: 10,
    },

    input: {
        width: "80%",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        color: "#888",
        fontSize: 20,
        marginLeft: 5,
        borderWidth: 1,
        borderColor: "#888",

    },
    categoryArea:
    {
        flexDirection: "row",
        flexWrap: "wrap",
        minHeight: 40,
        margin: 10,
        padding: 15,
        alignItems: "center",
        justifyContent: "center"

    },

    categoryText:
    {
        fontSize: 16,
        color: "#888",
        margin: 5,
        paddingHorizontal: 5,
        backgroundColor: "#fff",
        padding: 5,
        borderWidth: 1,
        borderColor: "#888",
    },

   


})