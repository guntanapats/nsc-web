import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import InfoType from './pages/InfoType';
import Member from './pages/Member';
import Cards from'./pages/card';
import Admin from './Admin/Admin';
import Admininfo from './Admin/info';
import Adminnscinfo from './Admin/nscinfo';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import Memberhome from './Member/HomeMember'
import MemberCards from './Member/card'
import MemberInfoType from './Member/InfoType';
import Contact from './pages/Contact'
import LoginPage from './pages/LoginPage'
import App from './App'

function App2() {
    <Router>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/NSC" element={<Cards/>} />
            <Route path="/Info" element={<InfoType/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Login" element={<LoginPage/>}/>
            {/* <App/> */}
        </Routes>
    </Router>
}

export default App2;