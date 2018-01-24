import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
} from 'react-native';

import { Constants, MapView, Location, Permissions } from 'expo';
import {Actions} from 'react-native-router-flux';
import {fetch} from 'react-native-simple-fetch';


export default class Farmer extends Component {
  
    constructor(props) {
    super(props)
    this.state = ({
      role: '', 
      uid: ''
    })
  
 
  }
  
  
  
  componentWillMount = async () => {
    try {
      const response = await fetch('https://i28tolzys1.execute-api.ap-southeast-2.amazonaws.com/prod/queryUserTable/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            username: this.props.uid
          },
          body: JSON.stringify({
            
          }),
        })
      const posts = await response.json()
      const role = posts.Item.role

      console.log(posts.Item.role);
        if (posts.Item.role == 'user') {
          Actions.mainpage({uid: this.props.uid, role: this.role});
        } else {
          Actions.mainpageadmin({uid: this.props.uid, role: this.role});
      } 
    } catch (e) {
      console.log(e);
    }
    console.log(this.props.uid);
    
  }
  
	render() {
    return (
      <View>
        
      </View>
    );
  }
}


