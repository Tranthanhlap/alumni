import { View,Text,FlatList,TextInput,StyleSheet,TouchableOpacity,Keyboard,Pressable,Image} from 'react-native'
import React,{useState,useEffect} from 'react' 
import {firebase} from '../firebase-config'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  
import { useNavigation } from '@react-navigation/native'


const DetailsScreen = () => {
    const [todos,setTodos]=useState([]);
    const todoRef =firebase.firestore().collection('todos');
    const [addData,setAddData]=useState('');
    const [addDataName,setAddDataName]=useState('');
    const [addDataEmail,setAddDataEmail]=useState('');
    const [addDataPhone,setAddDataPhone]=useState('');
    const [addMajors,setMajors]=useState('');
    const navigation = useNavigation();
 
    // fetch data
    useEffect(()=> {
        todoRef
        .orderBy('cretedAt','desc')
        .onSnapshot(
            querySnapshot =>{
                const todos=[]
                querySnapshot.forEach((doc) =>{
                    const {heading,name,email,phone} = doc.data()
                    todos.push({
                        id: doc.id,
                        heading,
                        name,
                        email,
                        phone,
                    })
                })
                setTodos(todos)
            }
        )
    },[])



    //add

    const addTodo = () =>{
        if(addDataName && addDataName.length > 0 || addData && addData.length > 0 ){
            const timestamp= firebase.firestore.FieldValue.serverTimestamp();
            const data={
                heading: addData,
                name:addDataName,
                email:addDataEmail,
                phone:addDataPhone,
                cretedAt:timestamp
            };
            todoRef
            .add(data)
            .then(()=>{
                setAddData('')
                setAddDataName('')
                setAddDataEmail('')
                setAddDataPhone('')
                Keyboard.dismiss();
                alert('Done')
            })
            .catch(error =>{
                alert(error);
            })
        }
    }

    return(
        <View >
            <View style={styles.container}>
                <View>
                    <Text  style={styles.titleInput}>
                        <AntDesign name="idcard" size={24} color="black" />
                    </Text>
                    
                    <TextInput
                    style={styles.input}
                    placeholder="ID"
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(heading) => setAddData(heading)}
                    value={addData}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    />
                 </View>
                 <View>
                <Text style={styles.titleInput}>
                <Ionicons name="person" size={24} color="black" />
                    
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="name"
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(name) => setAddDataName(name)}
                    value={addDataName}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
                 </View>
                 <View>
                <Text  style={styles.titleInput}>
               <MaterialIcons name="email" size={24} color="black" />
                 </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(email) => setAddDataEmail(email)}
                    value={addDataEmail}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
                 </View>
                 <View>
                <Text  style={styles.titleInput}>
                    <FontAwesome name="phone" size={24} color="black" />     </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Phone number"
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(phone) => setAddDataPhone(phone)}
                    value={addDataPhone}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
                 </View>
                <View style={styles.buttonAdd}>
                <TouchableOpacity onPress={addTodo}  style={styles.buttonAdd1}>
                    <Text>
                        ADD
                    </Text>
                </TouchableOpacity>
                </View>
            </View>

            <FontAwesome
                name='trash-o'
                color='red'
                onPress={() => navigation.navigate('Show')}
                style={styles.iconDelete}
            />
           

        </View>
    )
}


export default DetailsScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#dddd',
        padding:15,
        margin:5,
        marginHorizontal:10,
        marginBottom:10,
    },
    innerContainerShow:{
        alignItems:'center',
        flexDirection:'column',
        marginLeft:15,
    },
    titleInput:{
        textAlign: 'left',
        padding: 20,
    },
    input:{
        width:'100%',
        backgroundColor: '#eee',
        borderRadius: 5,
        padding: 20,
        marginBottom:5,
    },
    buttonAdd:{
        alignItems:'center',
        justifyContent: 'center',
    },
    buttonAdd1:{
        height:47,
        borderRadius:5,
        backgroundColor: '#788eec',
        width:80,
        alignItems:'center',
        justifyContent: 'center',
        
    },
    innerContainer:{
        alignItems: 'center',
        flexDirection:'column',
        marginLeft:45,
        backgroundColor:'#dddddd'
    },
    itemHeading:{
        fontWeight:'bold',
        fontSize:18,
        marginRight:22,
    },
    iconDelete:{
        margin:5,
        fontSize:20,
        marginLeft:14,
    },
    tinyLogo:{
        width:'30%',
        height:'30%'
    },


});