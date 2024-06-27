import React from 'react';
import Table from '../components/1Table.png'
import Table2 from '../components/Table2.png'
import Login from '../component2/login';
import styled from "styled-components";
import MemberSidebar from './Sidebar';
import { Link } from "react-router-dom";
import HeaderMember from '../components/HeaderMember';
import './HomeMember.css'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Btbanner from '../components/Btbanner';

const MemberHome = () => {
    return (
        <div>
            <div className='ShowSidebarMember-Home'>
                <MemberSidebar/>
            </div>
            <div className='ShowHeaderMember-Home'>
                <HeaderMember/>
            </div>
            <div>
                <Banner/>
            </div>
            <div className='bar'>
                <div className='secondbar'>
                    <div>
                        
                        <img className="img1Member-Home"src={Table} />
                         
                        
                        
                    </div>
                </div>
            </div>
            <Btbanner/>
            <Footer/>
        </div>
        
    );
};


export default MemberHome;