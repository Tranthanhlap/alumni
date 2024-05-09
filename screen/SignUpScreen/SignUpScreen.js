import {StyleSheet, View,Alert, Text} from 'react-native'
import React,{useState} from 'react'
import CustomerInput from '../../components/input'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {initializeApp } from 'firebase/app';
import {firebaseConfig} from '../../firebase-config'

const SignUpScreen = () => {

  const [username,setUsername] = useState('');
  // const [Email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  // const [passwordRepeat,setPasswordRepeat] = useState('');
  const navigate = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () =>{
    createUserWithEmailAndPassword (auth,username,password)
    .then ((userCredential)=>{
      console.log('account created')
      const user = userCredential.user;
      console.log(user)
      alert('done')
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }

  const navigation = useNavigation();

  const onRegisterPressed = () =>{
    navigation.navigate('ConfirmEmailScreen');
  }


  const onSignInGoogle = () =>{
    console.warn("Sign in");
  }

  const onSignInFacbook = () =>{
    console.warn("Sign in");
  }

  const onSigninPressed = () =>{
    navigation.navigate('SigninScreen');
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Creat An Acount</Text>

      <CustomerInput placeholder="Username" value={username} setvalue={setUsername}/>

      {/* <CustomerInput placeholder="Email" value={Email} setvalue={setEmail}/> */}

      <CustomerInput placeholder="Password" value={password} setvalue={setPassword} secureTextEntry={true}/>
    
      {/* <CustomerInput placeholder="PasswordRepeat" value={passwordRepeat} setvalue={setPasswordRepeat} secureTextEntry={true}/>
     */}
      <CustomButton text="Register" onPress={handleCreateAccount}/>
  
      <CustomButton text="Sign In Google" onPress={onSignInGoogle} bgColor='#E7EAF4' fgColor='red'/>
      <CustomButton text="Sign In Facebook" onPress={onSignInFacbook} bgColor='#E7EAF4' fgColor='blue'/>

      <CustomButton 
        text="Have an account? sign in" 
        onPress={onSigninPressed} 
        type="TERTIARY"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems:'center',
  },
  logo:{
      width:'100%',
      height:'30%',
  },
  title:{
      fontSize:24,
      fontWeight:'bold',
      color:'black',
      margin:10,
  }
});
export default SignUpScreen