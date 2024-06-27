import React from 'react';
import { Grid,Box, Typography} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import Header from '../components/Header';
import './Contact.css'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Btbanner from '../components/Btbanner';
import Sidebar from '../components/Sidebar';

const Contact = () => {
    return (
        <div>
            <div className='ShowSidebar-Contact'>
                <Sidebar/>
            </div>
            <div className='ShowHeader-Contact'>
                <Header/>
            </div>
            <div>
                
            </div>            
            
            <Box>
                <Grid  
                    sx={{ 
                    padding: 2 ,justifyContent: "center", display: "flex",flexDirection: 'column',alignItems: 'center', height: '45vh'}}> 
                        <Typography variant='h3'>ที่อยู่ติดต่อศูนย์ประสานงานภาคใต้</Typography>
                        <p>ศูนย์ประสานงาน NSC ภาคใต้ : มหาวิทยาลัยสงขลานครินทร์ จังหวัดสงขลา</p> 
                        <p></p>                  
                        <FacebookIcon className="FacebookIcon"/>  <a href="https://www.facebook.com/nsc.th/ "><h3>NSC Thailand Southern Region (PSU)</h3></a>
                                                            
                </Grid>  
                <div className="w-full">
                <div>
                <iframe
                    title="NSC"
                    src={
                    "https://www.google.com/maps/embed/v1/place?key=AIzaSyCW6HXYlqqnvyEVcgjXfdFVZvHxz7l-btQ&q=+ สาขาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์ เลขที่ 15 ถนนกาญจนวณิชย์ อำเภอหาดใหญ่ จังหวัดสงขลา 90110"
                        }
                    width="100%"
                    height="400"
                    style={{ border: "0px" }}
                    aria-hidden="false"
                    className="mx-auto pt-2"
                ></iframe>
                </div>
            </div>

            <div className="blog-post">
                <div className="blog-post__img">
                    <img src="https://www.coe.psu.ac.th/script/staff/image_th.php?type=staff&id=57" alt=""/>
                </div>
                <div className="blog-poet_info">
                    {/* <div className="blog-post__date">
                        <span>Sunday</span>
                        <span>October 27 2022</span>
                    </div>  */}
                    <h1 className="blog-post__title">อ.เสกสรรค์ สุวรรณมณี</h1> 
                    <p className="blog-post__text">
                    {/* <strong>ตำแหน่ง : </strong>
                            ผู้ช่วยหัวหน้าสาขาวิชาวิศวกรรมคอมพิวเตอร์ฝ่ายพัฒนานักศึกษา */}
                        
                    <p><strong>โทรศัพท์ : </strong>
                            0 7428 7359 </p>
                    <p><strong>โทรสาร : </strong>
                            0 7421 2895 </p>  
                    <p>
                        <strong>Email : </strong>
                        <a href="mailto:sseksun@coe.psu.ac.th ">sseksun@coe.psu.ac.th </a></p>    
                    </p>           
                </div>           
            </div>  
            <div className="blog-post">
                <div className="blog-post__img" >
                    <img src="https://www.coe.psu.ac.th/script/staff/image_th.php?type=staff&id=52" alt=""/>
                </div>
                <div className="blog-poet_info">
                    {/* <div className="blog-post__date">
                        <span>Sunday</span>
                        <span>October 27 2022</span>
                    </div>  */}
                    <h1 className="blog-post__title"> คุณ วิมล  คำจันทร์ </h1> 
                    <p className="blog-post__text">
                    {/* <strong>ตำแหน่ง : </strong>
                        นักกิจการนักศึกษา (งานกิจการนักศึกษา) */}
                        
                    <p><strong>โทรศัพท์ : </strong>
                        0 7428 7076 </p>
                    <p><strong>โทรสาร : </strong>
                        0 7428 7076 </p>  
                    <p>
                        <strong>Email : </strong>
                        <a href="mailto:wimon@coe.psu.ac.th">wimon@coe.psu.ac.th</a></p>    
                    </p>           
                </div>           
            </div>                             
        </Box>
        <div>
                <Btbanner/>
            </div>  
            <Footer/>
        </div>
        
    );
};


export default Contact;