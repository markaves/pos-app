import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';


import {Actions} from 'react-native-router-flux';

export default class MainPage extends Component<{}> {



	render() {
		return(
			<View style={styles.container}>
			    <Text>This is the main page</Text>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  }
});
