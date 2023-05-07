import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import Login from './components/Login'
import VinDecode from './containers/VinDecode'
import ScheduledMaintenance from './containers/ScheduledMaintenance'
import RegisterUser from './containers/RegisterUser'
import RepairLog from './containers/RepairLog'
import RegisterCar from './containers/RegisterCar'

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
            <Route path="/vindecode" element={<ProtectedRoute component={VinDecode} />} />
            <Route path="/userMaintenace" element={<ProtectedRoute component={ScheduledMaintenance} />} />
            <Route path="/repairlog" element={<ProtectedRoute component={RepairLog} />} />
            <Route path="/registerCar" element={<ProtectedRoute component={RegisterCar} />} />
            <Route path="/registerUser" element={<RegisterUser/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    );
};

export default Router;