import { View,Text,FlatList,TextInput,StyleSheet,TouchableOpacity,Keyboard,Pressable,Image,ScrollView,} from 'react-native'
import React,{useState,useEffect} from 'react' 
import {firebase} from '../firebase-config'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  
import { useNavigation } from '@react-navigation/native'


const InputEventAdmin = () => {
    const [eventAlumni,seteventAlumni]=useState([]);
    
    const todoRef =firebase.firestore().collection('eventAlumni');
    const [addData,setAddData]=useState('');
    const [addDataName,setAddDataName]=useState('');
    const [addDataEmail,setAddDataEmail]=useState('');
    const [addDataPhone,setAddDataPhone]=useState('');
    const navigation = useNavigation();
 
    // fetch data
    useEffect(()=> {
        todoRef
        .orderBy('cretedAt','desc')
        .onSnapshot(
            querySnapshot =>{
                const eventAlumni=[]
                querySnapshot.forEach((doc) =>{
                    const {heading,name,email,phone} = doc.data()
                    eventAlumni.push({
                        id: doc.id,
                        heading,
                        name,
                        email,
                        phone,
                    })
                })
                seteventAlumni(eventAlumni)
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
            <ScrollView>
            <View style={styles.container}>
                <View>
                <View style={{width:"10%",}}>
                        <AntDesign name="back" size={24} color="black"
                    onPress={() => navigation.navigate('DetailsAdmin')}
                    />
                  </View>
                    <Text  style={styles.titleInput}>
                    <Ionicons name="today" size={24} color="black" />
                    </Text>
                    
                    <TextInput
                    style={styles.input}
                    placeholder="Date"
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(heading) => setAddData(heading)}
                    value={addData}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    />
                 </View>
                 <View>
                <Text style={styles.titleInput}>
                <MaterialIcons name="title" size={24} color="black" />
                    
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(name) => setAddDataName(name)}
                    value={addDataName}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
                 </View>
                 <View>
                <Text  style={styles.titleInput}>
                <MaterialIcons name="details" size={24} color="black" />
                 </Text>
                <TextInput
                    style={styles.inputDetail}
                    editable
                    multiline
                    numberOfLines={4}
                    placeholder="Detail"
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(email) => setAddDataEmail(email)}
                    value={addDataEmail}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
                 </View>
                 <View>
                <Text  style={styles.titleInput}>
                <Ionicons name="people-circle-sharp" size={24} color="black" />    </Text>
                <TextInput
                    style={styles.input}
                    placeholder="By"
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(phone) => setAddDataPhone(phone)}
                    value={addDataPhone}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
                 </View>
                <View style={styles.buttonAdd}>
                <TouchableOpacity onPress={addTodo}   style={styles.buttonAdd1}>
                    <Text>
                        ADD
                    </Text>
                </TouchableOpacity>
                </View>
            </View>

            </ScrollView>
          
           

        </View>
    )
}


export default InputEventAdmin

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
    inputDetail:{
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