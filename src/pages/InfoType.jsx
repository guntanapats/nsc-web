import React from 'react';
import Topic from '../components/Topic.png'
import Topic2 from '../components/Topic2.png'
import Sidebar from '../components/Sidebar';
import './InfoType.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Btbanner from '../components/Btbanner';

const InfoType = () => {
    return (
        <div>
            <div className='ShowSidebar-Info'>
                <Sidebar/>
            </div>
            <div className="ShowHeader-Info">
                <Header/>
            </div>
            <center>
                <img className='imgNSC-Info' src='https://www.eng.psu.ac.th/old-website/images/Moderator/hftimah/pru-bu132/Poster_NSC2022_Official.jpg'/>
            </center>
            <Btbanner/>
            <Footer/>
        </div>
    );
};

export default InfoType;