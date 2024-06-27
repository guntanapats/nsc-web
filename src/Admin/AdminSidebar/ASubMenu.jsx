import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";


const SidebarLink = styled(Link)`
    display: flex;
    // color: #e1e9fc;
    color: #000000;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    list-style: none;
    height: 30px;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background: #252831;
        color: #e1e9fc;
        border-left: 4px solid #632ce4;
        cursor: pointer;
        
    },
    


`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left:3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    // color: #f5f5f5;
    color: #000000;
    font-size: 18px;

    &:hover{
        background: #632ce4;
        color: #e1e9fc;
        cursor: pointer;
    }

`;
const ASubMenu = ({ item }) =>{
    const [subnav,setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                
                <div>
                    

                    {item.icon}
                    <SidebarLabel>{item.title}
                    </SidebarLabel>
                    
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed: null }
                </div>      
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
            
        </>
    )

}

export default ASubMenu;