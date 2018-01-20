import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

import * as firebase from 'firebase';

import {Actions} from 'react-native-router-flux';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDuHfXwrq5g3QrSXk1u6GKGbG212SliCd0",
    authDomain: "react-firebase-2d457.firebaseapp.com",
    databaseURL: "https://react-firebase-2d457.firebaseio.com",
    projectId: "react-firebase-2d457",
    storageBucket: "",
};

firebase.initializeApp(firebaseConfig);

export default class Logo extends Component<{}> {
  
  constructor(props) {
    super(props)
    this.state = { email: '', password: '' }
  }
  
  signUpUser = (email,password) => {
    try{
     if (this.state.password.length < 6) {
       alert("Please enter atleast 6 characters")
       return;
     } 
     firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    //var errorMessage = error.message;
    
    alert(error.message)
    console.log(error)
    // ...
  });
     
    }
    catch (error) {
      console.log(error.toString())
    }
  }  
  
  loginUser = (email, password) => {
    try{
      if (this.state.email.length > 0) {
        firebase.auth().signInWithEmailAndPassword(email,password).then(function (user) {
       console.log(user)
     })
      }
    }
    catch (error) {
      console.log(error.toString())
    }
  }
  
  mainpage() {
      Actions.mainpage();
  }
  


	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              onChangeText={(email) => this.setState({email})}
              keyboardType="email-address"
              //onSubmitEditing={()=> this.password.focus()}
              />
          
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              onChangeText={(password) => this.setState({passwowrd})}
              //ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button} onPress={this.loginUser(this.state.email, this.state.password)}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
             
           </TouchableOpacity>   
           <TouchableOpacity onPress={this.mainpage}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});