import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import LoginPage from './LoginPage'

const App = () => 
	<div>
		<h1>Meal Planning/Recipe App!</h1>
		<LoginPage/>
	</div>

export default App;