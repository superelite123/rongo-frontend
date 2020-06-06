import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Login from 'pages/auth/Login';
import LoginConfirm from 'pages/auth/LoginConfirm';
import Footer from 'pages/layout/Footer';
class App extends Component {
    render() {
        return (
            <div style={{height:'100vh'}}>
                <div class='content' style={{height:'95%'}}>
                    <Route exact path="/" component={LoginConfirm}/>
                </div>
                <Footer height='5%'/>  
            </div>
        );
    }
}

export default App;