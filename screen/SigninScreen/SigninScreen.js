import {StyleSheet, View, Text ,Image,Alert,StatusBar,TextInput,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import logo from '../../assets/Image/barbershop-logo.webp'
import CustomerInput from '../../components/input'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp } from 'firebase/app';
import {firebaseConfig} from '../../firebase-config'


const SigninScreen = () => {

  const [username,setUsername] = React.useState('');
  const [password,setPassword] = React.useState('');
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () =>{
    createUserWithEmailAndPassword (auth,username,password)
    .then ((userCredential)=>{
      console.log('account created')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }
  const handleSignIn= () =>{
    signInWithEmailAndPassword (auth,username,password)
    .then ((userCredential)=>{
      console.log('Sign in')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('tabb')
    })
    .catch(error => {
      console.log(error)
    })
  }

  const onSignInPressed = () =>{
    navigation.navigate('tabb');
  }
  const onSignUpPressed = () =>{
    navigation.navigate('SignUpScreen');
  }
  const onSignInAdmin = () =>{
    navigation.navigate('SigninAdmin');
  }


  return (
    <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Image source={require('../../assets/Image/background.png')} style={styles.backgroundImage} />

    {/* lights */}
    <View style={styles.lightsContainer}>
      <Image source={require('../../assets/Image/light.png')} style={styles.lightImage} />
      <Image source={require('../../assets/Image/light.png')} style={styles.lightImageOpacity} />
    </View>

    {/* title and form */}
    <View style={styles.titleAndFormContainer}>

      {/* title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Login</Text>
      </View>

      {/* form */}
      <View style={styles.formContainer}>
        <View style={styles.formInput}>
          <CustomerInput
            placeholder="example@gmail.com" value={username} setvalue={setUsername} secureTextEntry={false}
            
            style={styles.formTextInput}
          />
        </View>
        <View style={styles.formInput}>
          <CustomerInput
           placeholder="Password" value={password} setvalue={setPassword} secureTextEntry={true}
            style={styles.formTextInput}
          />
        </View>

        <CustomButton onPress={handleSignIn} text="Sign In" /> 


      
        <CustomButton 
          text="Don't Have An Account ? Creat one" 
        onPress={onSignUpPressed} 
        type="TERTIARY"
        />
        <CustomButton 
          text="Login Admin" 
        onPress={onSignInAdmin} 
        type="TERTIARY"
        />

      </View>
    </View>
  </View>
)

  // return (
  //   <View style={styles.root}>
  //     <Image source={logo} 
  //     // style={[styles.logo,{height:height*0.3}]} resizeMode="contain"/>
  //     style={[styles.logo]} resizeMode="contain"/>
  //     <Text style={styles.text1}>Email</Text>
  //     <CustomerInput placeholder="example@gmail.com" value={username} setvalue={setUsername} secureTextEntry={false}/>
  //     <Text style={styles.text1}>Password</Text>
  //     <CustomerInput placeholder="Password" value={password} setvalue={setPassword} secureTextEntry={true}/>
    
  //     {/* <CustomButton onPress={signInWithEmailAndPassword} text="Sign In" /> */}
  //     <CustomButton onPress={handleSignIn} text="Sign In" />
  //     {/* <CustomButton 
  //       text="Forgot the password" 
  //       onPress={onForgotThePasswordPressed} 
  //       type="TERTIARY"
  //     /> */}
  //     {/* <CustomButton text="Sign In Google" onPress={onSignInGoogle} bgColor='#E7EAF4' fgColor='red'/> */}
  //     <CustomButton onPress={handleCreateAccount} text="Sign In Google" bgColor='#E7EAF4' fgColor='red'/>
  //     <CustomButton text="Sign In Facebook" onPress={onSignInFacbook} bgColor='#E7EAF4' fgColor='blue'/>

  //     <CustomButton 
  //       text="Don't Have An Account ? Creat one" 
  //       onPress={onSignUpPressed} 
  //       type="TERTIARY"
  //     />
  //   </View>
  // )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  lightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    width: '100%',
  },
  lightImage: {
    height: 225,
    width: 90,
  },
  lightImageOpacity: {
    height: 160,
    width: 65,
    opacity: 0.75,
  },
  titleAndFormContainer: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 40,
    paddingBottom: 10,
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  formContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    width:'100%'
  },
  
  formInput: {
    width: '100%',
    marginVertical: 5,
  },
  formTextInput: {
    color: 'gray',
  },
  formButton: {
    backgroundColor: '#00BFFF',
    padding: 15,
    borderRadius: 20,
    width: '100%',
    marginVertical: 5,
  },
  formButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#00BFFF',
  },
});
export default SigninScreen