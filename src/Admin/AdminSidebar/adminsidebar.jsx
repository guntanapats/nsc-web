import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Asidebardata } from "./Asidebardata";
import ASubMenu from "./ASubMenu";
import { IconContext } from "react-icons/lib";
import PSU from 'C:/Users/COM/web/frontend/src/components/PSU.png'
import NSCwhite from './NSCwhite.png';
import NSCdes from 'C:/Users/COM/web/frontend/src/components/NSCdes.png';
import ButtonLogout from "C:/Users/COM/web/frontend/src/component2/Btlogout.jsx";

const Nav = styled.div`
    background: #085AB7; 
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-item: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    jusify-content: flex-start;
    align-items: center;
`;

const SideBarNav = styled.nav`
    background: #A9CBF2;
    width: 450px; 
    height: 100vh;
    display: flex;
    justify-content:center;
    position: fixed;
    top: 0 ;
    left: ${({Asidebar}) => (Asidebar ? '0' : '-100%')};
    transition: 200ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%
`;

const Right = styled.div`
    margin: 96rem ;
    // float: right;
    
`;

const Adminsidebar = () => {
    const [Asidebar, setAsidebar] = useState(false)
    const showAsidebar = () => setAsidebar(!Asidebar)
    return (
        <>
            <IconContext.Provider value={{ color: '#000000'}}>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={showAsidebar} />
                    <Link to="/home">
                        <Right>
                    <ButtonLogout content="Logout" />
                </Right>
                </Link>
                </NavIcon>
                <img src={NSCdes}style={{width: '15%',position: 'absolute',right: 1490,top:-35}}/>
                <img src={PSU} style={{width: '10%',position: 'absolute',right: 10,top:15}}/>
                <img src={NSCwhite} style={{width: '3%',position: 'absolute',right: 1770,top:10}}/>

            </Nav>
            
            <SideBarNav Asidebar ={Asidebar}>
                <SidebarWrap>
                <NavIcon to='#'>
                    <AiIcons.AiOutlineClose onClick={showAsidebar} />
                </NavIcon>
                {Asidebardata.map((item,index) => {
                    return <ASubMenu item={item} key={index}/>;
                })}
                </SidebarWrap>
            </SideBarNav>
        </IconContext.Provider>
        
        </>
    )
    
};

export default Adminsidebar;