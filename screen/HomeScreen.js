// import { View,Text,FlatList,TextInput,StyleSheet,TouchableOpacity,Keyboard,Pressable,Image,Dimensions} from 'react-native'
// import React,{useState,useEffect} from 'react' 
// import {firebase} from '../firebase-config'
// import { FontAwesome } from '@expo/vector-icons'
// import { AntDesign } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';  
// import { useNavigation } from '@react-navigation/native'
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { SelectList } from 'react-native-dropdown-select-list'
// import { SearchBar } from 'react-native-elements';


// // import { SearchBar } from '@rneui/themed';
// // import {Picker} from '@react-native-picker/picker';

// const Home = () => {
//     const [todos,setTodos]=useState([]);
//     const todoRef =firebase.firestore().collection('todos');
//     const navigation = useNavigation();
//     const [search, setSearch] = useState("")
//     const [selected, setSelected] = React.useState("");
//     const [masterData, setmasterData] = useState("")
//     // const [filterdData,setfilterdData] = useState("")

    
//     useEffect(()=> {
//         todoRef
//         .orderBy('cretedAt','desc')
//         .onSnapshot(
//             querySnapshot =>{
//                 const todos=[]
//                 querySnapshot.forEach((doc) =>{
//                     const {heading,name,email,phone} = doc.data()
//                     todos.push({
//                         id: doc.id,
//                         heading,
//                         name,
//                         email,
//                         phone,
//                     })
//                 })
//                 setTodos(todos)
//             }
//         )
//     },[])
//     const updateSearch = (search) => {
//         setSearch(search);
//       };

//       const deleteTodo =(todos)=>{
//         todoRef
//         .doc(todos.id)
//         .delete()
//         .then(()=>{
//             alert('deleted ok')
//         })
//         .catch(error =>{
//             alert(error);
//         })
//     }
//     // const ItemView =({item}) =>{
//     //     return (
//     //         <Text>
//     //             {item.name.toUpperCase()} 
//     //         </Text>
//     //     )
//     // }
//     // const ItemSeparatorView =({item}) =>{
//     //     return (
//     //        <View>

//     //        </View>
//     //     )
//     // }


//     const searchFilter = (item) => {
//         if(search === ""){
//             return (
//             <View>
//                 <Text>
                
//                 {/* {item.name.toUpperCase()} */}
                
//                 </Text>
//             </View>
//             );
//         }
//         if(item.name.toLowerCase().includes(search.toLowerCase())){
//             return(
//                 <View>
//                      <View style={styles.InformationIlumni}>
//                     <View style={styles.InformationIlumni1} >
//                         <Pressable
//                         onPress={() => navigation.navigate('Update',{item})}
//                         >
                     
//                      <MaterialIcons style={styles.iconview} name="preview" size={24} color="black" 
//                             onPress={() => navigation.navigate('DetailsAlumni',{item})}
//                      />
//                        <View style={styles.innerContainerShow}>
//                        <FontAwesome name="file-image-o" size={40} color="black" />
//                             <Text style={styles.itemHeading}>
//                             {item.heading[0].toUpperCase() + item.heading.slice(1)}
//                              </Text>                           
//                              <Text style={styles.itemName}>
//                             {item.name[0].toUpperCase() + item.name.slice(1)}
//                              </Text>
//                              <Text style={styles.itemName}>
//                             {item.email[0].toUpperCase() + item.email.slice(1)}
//                              </Text>
//                              <Text style={styles.itemName}>
//                             {item.phone[0].toUpperCase() + item.phone.slice(1)}
//                              </Text>
//                         </View>
//                         <FontAwesome
//                             name='trash-o'
//                             color='red'
//                             onPress={() => deleteTodo(item)}
//                             style={styles.iconDelete}
//                         />
//                         </Pressable>
//                     </View>
//                     </View>
//                 </View>
            
//             )
//         }
//     }


//   return (
//     <View>
//     <View style={{
//                    flexDirection:"row",
//                    alignItems:"center",
//                    marginTop:10,
//                    marginHorizontal:20,
//                    marginBottom:10,
//                }}>
//         {/* <View style={{width:"10%"}}>
//             <Entypo name="menu" size={24} color="black" />
//         </View> */}
//         <View style={styles.view}>
    
//         </View>

//     </View>
//     <View style={{
//                    paddingHorizontal:20,
//                    marginTop:10
//                }}>
//                    <Text style={{
//                        fontSize:30,
//                        fontWeight:"bold"
//                    }}>List Alumni</Text>
//     </View>
  
//     <TextInput
//         value={search}
//         style={styles.textInput}
//         placeholder='Name Alumni'
//         onChangeText={(text) =>  setSearch(text)}
//     />
    
//     <FlatList
//         data= {todos}
        
//         renderItem ={({item,index})=>(
//             searchFilter(item)
//         )}
//     />






//         {/* <FlatList
//                 data={todos}
//                 numColumns={2}
//                 renderItem={({item})=>(
//                     <View style={styles.InformationIlumni}>
//                     <View style={styles.InformationIlumni1} >
//                         <Pressable
//                         onPress={() => navigation.navigate('Update',{item})}
//                         >
                     
//                      <MaterialIcons style={styles.iconview} name="preview" size={24} color="black" 
//                             onPress={() => navigation.navigate('Update',{item})}
//                      />
//                        <View style={styles.innerContainerShow}>
//                        <FontAwesome name="file-image-o" size={40} color="black" />
//                             <Text style={styles.itemHeading}>
//                             {item.heading[0].toUpperCase() + item.heading.slice(1)}
//                              </Text>                           
//                              <Text style={styles.itemName}>
//                             {item.name[0].toUpperCase() + item.name.slice(1)}
//                              </Text>
//                              <Text style={styles.itemName}>
//                             {item.email[0].toUpperCase() + item.email.slice(1)}
//                              </Text>
//                              <Text style={styles.itemName}>
//                             {item.phone[0].toUpperCase() + item.phone.slice(1)}
//                              </Text>
//                         </View>
//                         <FontAwesome
//                             name='trash-o'
//                             color='red'
//                             onPress={() => deleteTodo(item)}
//                             style={styles.iconDelete}
//                         />
//                         </Pressable>
//                     </View>
//                     </View>
//                 )}
//             /> */}
//     </View>
//   )
// }

// export default Home
// const styles = StyleSheet.create({
//     container:{
//         backgroundColor:'#dddd',
//         padding:15,
//         margin:5,
//         marginHorizontal:10,
//         marginBottom:10,
//     },
//     innerContainerShow:{
//         alignItems:'center',
//         flexDirection:'column',
//         marginLeft:15,
//     },
//     titleInput:{
//         textAlign: 'left',
//         padding: 20,
//     },
//     input:{
//         width:'100%',
//         backgroundColor: '#eee',
//         borderRadius: 5,
//         padding: 20,
//         marginBottom:5,
//     },
//     buttonAdd:{
//         alignItems:'center',
//         justifyContent: 'center',
//     },
//     buttonAdd1:{
//         height:47,
//         borderRadius:5,
//         backgroundColor: '#788eec',
//         width:80,
//         alignItems:'center',
//         justifyContent: 'center',
        
//     },
//     innerContainer:{
//         alignItems: 'center',
//         flexDirection:'column',
//         marginLeft:45,
//         backgroundColor:'white'
//     },
//     itemHeading:{
//         fontWeight:'bold',
//         fontSize:18,
//         alignContent:'center'
//     },
//     itemName:{
//         fontSize:10,
//         alignContent:'center'
//     },
//     iconview:{
//         margin:5,
//         fontSize:20,
//         marginLeft:15,
//     },
//     iconDelete:{
//         margin:5,
//         fontSize:20,
//         marginLeft:15,
//     },
//     tinyLogo:{
//         width:'10%',
//         height:'10%'
//     },
//     InformationIlumni:{
//         backgroundColor:"#dddddd",
//         borderRadius:30,
//         marginRight:10,
//         flexBasis: '50%',
//         marginBottom:20,
//     },
//     view:{
//         width:'100%',
//         color:"#fff"
//     },
//     textInput:{
//         height:40,
//         borderWidth:1,
//         paddingLeft:20,
//         margin:5,
//         borderColor:'#009688'

//     },


// });




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

const Home = () => {
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
    <View>
    <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:10,
                   marginHorizontal:20,
                   marginBottom:10,
               }}>
        <View style={{width:"10%",}}>
            <AntDesign name="addfile" size={24} color="black" 
                    onPress={() => navigation.navigate('DetailsAdmin')}
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

        <FlatList
                data={eventAlumni}
                renderItem={({item})=>(
                    <View style={styles.InformationIlumni}>
                    <View style={styles.InformationIlumni1} >
                        <Pressable
                        onPress={() => navigation.navigate('DetailsEvent',{item})}
                        >
                     
                     <MaterialIcons style={styles.iconview} name="preview" size={24} color="black" 
                            onPress={() => navigation.navigate('EventUpdate',{item})}
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
  )
}

export default Home
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