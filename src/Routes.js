import React, { Component } from 'react';
import {Router, Stack, Scene, ActionConst } from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import MainPage from './pages/MainPage';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true} type={ActionConst.RESET} />
			      <Scene key="signup" component={Signup} title="Register"/>
			      <Scene key="mainpage" component={MainPage} title="MainPage" type={ActionConst.RESET}/>
			    </Stack>
			 </Router>
			)
	}
}