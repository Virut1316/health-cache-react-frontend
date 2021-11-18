import React, {Component} from 'react';
import 'reset-css';
import NavbarScroller from './components/Navbar'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Claims from './components/claims/Claims';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {Profile} from "./components/profile/Profile";

const navigation = {
    brand: {name: 'HealthCache', to: '/'},
    links: [
        {name: 'Profile', to: '/Profile'},
        {name: 'File Claim', to: '/FileClaim'},
        {name: 'Discussion Board', to: '/Discussion'}

    ]
};

export default class App extends Component {
    public render() {
        const {brand, links} = navigation;

        return (
            <div className="App">
                <Router>
                    <NavbarScroller brand={brand} links={links}/>
                    <Routes>
                        <Route path='/' element={<Navigate replace to='/login'/>}/>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="/FileClaim" element={<Claims/>}/>
                        <Route path="/Discussion"/>
                        {/*<Route path='*' element={<NotFound />} />*/}
                    </Routes>
                </Router>
            </div>
        );
    }
}