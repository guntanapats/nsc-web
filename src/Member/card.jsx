import React, { Component } from "react";
import Card2 from "./card2";
import Card3 from "./card3";
import Card from "./cardui";
import MemberSidebar from './Sidebar';
import './cardMember.css'
import HeaderMember from '../components/HeaderMember';
import Footer from '../components/Footer'

import Btbanner from '../components/Btbanner';

class MemberCards extends Component{
  render(){
    return(
      <div >
        <div className='ShowMemberSidebar-card'>
          <MemberSidebar/>
        </div>
        <div className='ShowMemberHeader-card'>
                <HeaderMember/>
            </div>
            
        
          <center>
          <div className="Container">
           <h1 align='center'>อยากรู้อะไรเกี่ยวกับ NSC</h1>
            </div>
            <div className="CardContainer">
              <div className="col-md-4">
                <Card title='ความเป็นมา'/>
              </div>
              <div className="col-md-4">
                <Card2 title='เกณฑ์การให้คะเเนน'/>
              </div>
              {/* <div className="col-md-4">
                <Card3 title='ประโยชน์ที่จะได้รับ'/>
              </div> */}
              
            
        </div></center>
        <Btbanner/>
        <Footer/>
      </div> 
    );
  }

}

export default MemberCards;
