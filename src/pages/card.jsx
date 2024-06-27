import React, { Component } from "react";
import Card2 from "./card2";
import Card3 from "./card3";
import Card from "./cardui";
import Sidebar from '../components/Sidebar';
import './card.css'
import Header from '../components/Header';
import Footer from '../components/Footer'

import Btbanner from '../components/Btbanner';

class Cards extends Component{
  render(){
    return(
      <div >
        <div className='ShowSidebar-card'>
          <Sidebar/>
        </div>
        <div className='ShowHeader-card'>
                <Header/>
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

export default Cards;
