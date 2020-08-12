import React, { Component } from 'react';
import NavBar from './components/NavBar.js'
import {BrowserRouter, Route} from 'react-router-dom'
import  Home from './components/Home'
import About from './components/About';
import AppToDo from './components/AppToDo.js';
import Post from './components/Post.js'
class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar></NavBar>
                <Route path ="/Home" component={Home}></Route>
                <Route path ="/ListToDo" component={AppToDo}></Route>
                <Route path ="/About" component={About}></Route>
                <Route path ="/Post/:post_id" component={Post}></Route>
            </div>
        </BrowserRouter>
        
    )

  }




}

export default App;
