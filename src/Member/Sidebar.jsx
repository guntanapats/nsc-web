import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from "./Sidebardata";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import PSU from '../components/PSU.png'
import NSCwhite from '../components/NSCwhite.png';
import NSCdes from '../components/NSCdes.png';
import ButtonLogout from "../component2/Btlogout";
import './sidebarMember.css'

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
    width: 415px; 
    height: 120vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0 ;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 200ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%
`;
const MemberSidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{ color: '#000000'}}>
            <div className="Nav">
                <div className="NavIcon" to='#'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </div>
                
                {/* <img src={NSCdes}style={{width: '15%',position: 'absolute',right: 1490,top:-35}}/>
                <img src={PSU} style={{width: '10%',position: 'absolute',right: 10,top:15}}/>
                <img src={NSCwhite} style={{width: '3%',position: 'absolute',right: 1770,top:10}}/> */}
                <img className="NSC" src={NSCdes}/>
                <img className="PSU" src={PSU} />
                <img className="NSC2" src={NSCwhite} />
                
            </div>
            <SideBarNav sidebar ={sidebar}>
                <SidebarWrap>
                <div className="NavIcon"  to='#'>
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                </div>
                {SidebarData.map((item,index) => {
                    return <SubMenu item={item} key={index}/>;
                })}
                </SidebarWrap>
            </SideBarNav>
        </IconContext.Provider>
        
        </>
    )
    
};

export default MemberSidebar;