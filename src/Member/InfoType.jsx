import React from 'react';
import Topic from '../components/Topic.png'
import Topic2 from '../components/Topic2.png'
import MemberSidebar from './Sidebar';
import './InfoTypeMember.css'
import HeaderMember from '../components/HeaderMember';
import Footer from '../components/Footer'
import Btbanner from '../components/Btbanner';

const MemberInfoType = () => {
    return (
        <div>
            <div className='ShowSidebarMember-Info'>
                <MemberSidebar/>
            </div>
            <div className="ShowHeaderMember-Info">
                <HeaderMember/>
            </div>
            <center>
                <img className='imgNSCMember-Info' src='https://www.eng.psu.ac.th/old-website/images/Moderator/hftimah/pru-bu132/Poster_NSC2022_Official.jpg'/>
            </center>
            <Btbanner/>
            <Footer/>
        </div>
    );
};

export default MemberInfoType;