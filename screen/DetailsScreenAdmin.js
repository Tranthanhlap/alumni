

import { View,Text,FlatList,TextInput,StyleSheet,TouchableOpacity,Keyboard,Pressable,Image,Dimensions} from 'react-native'
import React,{useState,useEffect} from 'react' 
import {firebase} from '../firebase-config'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';  
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { SearchBar } from '@rneui/themed';
// import {Picker} from '@react-native-picker/picker';

const DetailsScreenAdmin = () => {
    const [eventAlumni,seteventAlumni]=useState([]);
    const todoRef =firebase.firestore().collection('eventAlumni');
    const navigation = useNavigation();
    const [search, setSearch] = useState("")
    
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
    const updateSearch = (search) => {
        setSearch(search);
      };

      const deleteTodo =(eventAlumni)=>{
        todoRef
        .doc(eventAlumni.id)
        .delete()
        .then(()=>{
            alert('deleted ok')
        })
        .catch(error =>{
            alert(error);
        })
    }

  return (
    <View
        style={{
                flex:1   
               }}
    >
    <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:10,
                   marginHorizontal:20,
                   marginBottom:10,
               }}>
        <View style={{width:"10%",}}>
            <AntDesign name="addfile" size={24} color="black" 
                    onPress={() => navigation.navigate('InputEventAdmin')}
            />
        </View>
        <View style={styles.view}>
            {/* <SearchBar
            placeholder="Student Name ..."
            onChangeText={updateSearch}
            value={search}
        /> */}
        </View>

    </View>
    <View style={{
                   paddingHorizontal:20,
                   marginTop:10
               }}>
                   <Text style={{
                       fontSize:30,
                       fontWeight:"bold"
                   }}>Event</Text>
    </View>
    <View
    style={{
                flex:1   
               }}>

        <FlatList
                data={eventAlumni}
                renderItem={({item})=>(
                    <View style={styles.InformationIlumni}>
                    <View style={styles.InformationIlumni1} >
                        <Pressable
                        onPress={() => navigation.navigate('DetailsEvent',{item})}
                        >
                     
                     <MaterialIcons style={styles.iconview} name="preview" size={24} color="black" 
                            onPress={() => navigation.navigate('EventAlumniDetail',{item})}
                     />
                        {/* <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image-person.jpeg')}
                        /> */}
                       <View style={styles.innerContainerShow}>
                            <Text style={styles.day}>
                            {item.heading[0].toUpperCase() + item.heading.slice(1)}
                             </Text>                           
                             <Text style={styles.itemHeading}>
                            {item.name[0].toUpperCase() + item.name.slice(1)}
                             </Text>
                             <Text style={styles.detail} numberOfLines={3}>
                            {item.email[0].toUpperCase() + item.email.slice(1)}
                             </Text>
                             <Text style={styles.athur}>
                            {item.phone[0].toUpperCase() + item.phone.slice(1)}
                             </Text>
                        </View>
                        <FontAwesome
                            name='trash-o'
                            color='red'
                            onPress={() => deleteTodo(item)}
                            style={styles.iconDelete}
                        />
                        </Pressable>
                    </View>
                    </View>
                )}
            />
     </View>
    </View>
  )
}

export default DetailsScreenAdmin
const styles = StyleSheet.create({
    container:{
        backgroundColor:'F9F6F7',
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
        backgroundColor:'white'
    },
    itemHeading:{
        fontWeight:'bold',
        fontSize:18,
        alignContent:'center'
    },
    itemName:{
        fontSize:10,
        alignContent:'center'
    },
    iconview:{
        margin:5,
        fontSize:20,
        marginLeft:15,
    },
    iconDelete:{
        margin:5,
        fontSize:20,
        marginLeft:15,
    },
    tinyLogo:{
        width:'10%',
        height:'10%'
    },
    InformationIlumni:{
        backgroundColor:"#dddddd",
        borderRadius:30,
        marginRight:10,
        flexBasis: '50%',
        marginBottom:20,
    },
    view:{
        width:'60%',
        color:"#fff"
    },
    day:{
        color:'red',
        margin:10,
    },
    athur:{
        margin:5,
    },
    detail:{
        fontSize:10,
        margin:5
    },
});