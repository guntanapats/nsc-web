import './App.css';

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NSC from './pages/NSC';
// import PSU from './pages/PSU';
import InfoQualification from './pages/InfoQuali';
import InfoType from './pages/InfoType';
import Member from './pages/Member';
import Cards from'./pages/card';
import Admin from './Admin/Admin';
import Admininfo from './Admin/info';
import Adminnscinfo from './Admin/nscinfo';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import MemberHome from './Member/HomeMember'
import MemberCards from './Member/card'
import MemberInfoType from './Member/InfoType';
import Contact from './pages/Contact'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './Context/AuthContext'
import ContactMember from './Member/ContactMember';

function App() {
//   const [width, setWindowWidth] = useState(0);

//   const updateDimensions = () => {
//     const width = window.innerWidth;
//     setWindowWidth(width);
//   };

//   // componentDidMount...runs only once
//   useEffect( () => {
//     updateDimensions();
//     window.addEventListener("resize", updateDimensions);
//     return () => window.removeEventListener("resize", updateDimensions);
//   }, [])

//   const responsive = {
//     showTopNavMenu: width > 1023
//   }
    // const token = localStorage.getItem('accessToken');

    // if(!token) {
    // return <LoginPage />
    // }


    return (
        <Router>
            {/* <BreakpointProvider>
            <Breakpoint large up>
                <div id='nav_container' ></div>
            </Breakpoint>
            <Breakpoint medium down>
            <div className='menu-icon'></div>
            </Breakpoint> */}
            <Routes>
                {/* <Route path='/admin' element={<Admin/>} />
                <Route path='/admin/post/info' element={<Admininfo/>} /> */}
                {/* <Route path='/admin/post/nscinfo' element={<Adminnscinfo/>} /> */}
                {/* <Route path="/PSU" element={<PSU/>} /> */}
                {/* <Route path="/Info/Qualification" element={<InfoQualification/>} /> */}

                <Route path="/Contact" element={<Contact/>} />
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Info" element={<InfoType/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/NSC" element={<Cards/>} />
                    
                    
                    
                        <Route path="/Member/Info" element={<MemberInfoType/>} />
                        <Route path="/Member/home" element={<MemberHome/>} />  
                        <Route path="/Member/NSC" element={<MemberCards/>}/>
                        <Route path="/Member" element={<Member/>} /> 
                        <Route path="/Member/Contact" element={<ContactMember/>} /> 
                        
                     
                
                    
                
            </Routes>
            {/* </BreakpointProvider> */}
      </Router>   
    );
}


export default App; 
