import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { Constants, MapView, Location, Permissions } from 'expo';
import {fetch} from 'react-native-simple-fetch';


export default class MainPage extends Component<{}> {
  
    constructor(props) {
    super(props)
    this.state = ({
      amount: ''
    })
  
 
  }
  
  state = {
    //mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    mapRegion: { latitude: 14.55116, 
            longitude: 121.04475, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    locationResult: null,
    //location: {coords: { latitude: 37.78825, longitude: -122.4324}},
    location: {coords: { latitude: 14.55116, 
            longitude: 121.04475,}},
  };
  
  sendAmount = async () => {
    if (this.state.amount.length > 0) {
    try {
      const response = await fetch('https://i28tolzys1.execute-api.ap-southeast-2.amazonaws.com/prod/addSale/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            uid: this.props.uid,
            amount: this.state.amount
            
          },
          body: JSON.stringify({
            
          }),
        })
      const posts = await response.json()
      

      console.log(posts);
      
    } catch (e) {
      console.log(e);
    }
    
    console.log(this.state.amount);
    this.state.amount=''
  }}
  
  componentDidMount() {
    this._getLocationAsync();
    console.log('statusBarHeight: ', StatusBar.currentHeight);
  }
  
  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

 _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
       location,
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location), location, });
 };


	render() {
    
		return(
			/*<MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />*/
      
      <View style={styles.container}>
      
      <MapView style={styles.map}
          
          region={{ 
            //latitude: this.state.location.coords.latitude, 
            latitude: 14.55116, 
            longitude: 121.04475,
            //longitude: this.state.location.coords.longitude, 
            latitudeDelta: 0.0922, 
            longitudeDelta: 0.0421 
          }}
          //onRegionChange={this._handleMapRegionChange}
          >
 
        <MapView.Marker
          coordinate={{ latitude: 14.55116, longitude: 121.04475 }}
          title="POS1"
          description="Sale P15,498"
          />
        </MapView>
        <TextInput  style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Enter Amount"
              keyboardType="numeric"
              placeholderTextColor = "#ffffff"
              onChangeText={(amount) => this.setState({amount})}
              //ref={(input) => this.password = input}
              value={this.state.amount}
              />  
           <TouchableOpacity style={styles.button}  >
             <Text style={styles.buttonText} onPress={this.sendAmount}>Send</Text>
           </TouchableOpacity> 
      </View>
        
        

			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    paddingVertical: 25,
    flex: 1,
    
    
  },
  
  map : {
    //backgroundColor:'#455a64',
    height: 300,
    paddingVertical: 50,
    //alignItems:'center',
    //justifyContent :'center'
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
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },  
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
});
