import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
} from 'react-native';

import { Constants, MapView, Location, Permissions } from 'expo';


export default class MainPage extends Component<{}> {
  
  state = {
    //mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    mapRegion: { latitude: 14.55116, 
            longitude: 121.04475, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    locationResult: null,
    //location: {coords: { latitude: 37.78825, longitude: -122.4324}},
    location: {coords: { latitude: 14.55116, 
            longitude: 121.04475,}},
  };
  
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
      
      
      <MapView
          style={styles.container}
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
          coordinate={this.state.location.coords}
          title="My Marker"
          description="Some description"
          />
        <MapView.Marker
          coordinate={{ latitude: 14.55116, longitude: 121.04475 }}
          title="POS1"
          description="Sale P15,498"
          />
        <MapView.Marker
          coordinate={{ latitude: 14.55284, longitude: 121.04993 }}
          title="POS2"
          description="Sale P10,888"
          />
        <MapView.Marker
          coordinate={{ latitude: 14.54981, longitude: 121.04968 }}
          title="POS3"
          description="Sale P32,684"
          />
        </MapView>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    //backgroundColor:'#455a64',
    flex: 1,
    paddingVertical: 50,
    //alignItems:'center',
    //justifyContent :'center'
  }
});
