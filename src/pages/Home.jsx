import React from 'react';
import Table from '../components/1Table.png'
import Table2 from '../components/Table2.png'
import Login from '../component2/login';
import styled from "styled-components";
import Sidebar from '../components/Sidebar';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import './Home.css'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Btbanner from '../components/Btbanner';

const Home = () => {
    return (
        <div>
            <div className='ShowSidebar-Home'>
                <Sidebar/>
            </div>
            <div className='ShowHeader-Home'>
                <Header/>
            </div>
            <div>
                <Banner/>
            </div>
            <div className='bar'>
                <div className='secondbar'>
                    <div>
                        
                        <img className="img1-Home"src={Table} />
                         
                        
                        
                    </div>
                </div>
            </div>
            <Btbanner/>
            <Footer/>
        </div>
        
    );
};


export default Home;