import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import Login from './components/Login'

// Write checkAuth function here
const checkAuth =() => {
    const cookies = cookie.parse(document.cookie);
    console.log(cookies)
    return cookies["loggedIn"] ? true : false;
}


// Write ProtectedRoute function here
const ProtectedRoute =(props) => {

    const {component: Component, ...rest} =props;

    return(
        checkAuth() === true ? (<Component {...rest} />): (<Navigate to='/login' />)
    )
}


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute component={Home} />} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    );
};

export default Router;