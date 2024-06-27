import React from 'react';
import good from '../components/good.png'


const Card3 = props => {
    return (
        <div className='card text-center'>        
                <div className='overflow'>
                </div >
                <div className="card-body text-dark">
                    <img src={good} alt="" width="500" height="200"/>
                    <h4 className='card-title'>{props.title}</h4>
                    <p className="card-text text-secondary">
                    นักเรียนระดับมัธยมศึกษาที่เข้าร่วมโครงการ NSC ซึ่งมีคุณสมบัติตามเกณฑ์
                    ที่มหาวิทยาลัยกำหนด มีสิทธิ์ได้รับโควต้าเข้าศึกษาต่อในระดับอุดมศึกษาใน
                    มหาวิทยาลัยต่างๆ เช่น มหาวิทยาลัยเชียงใหม่ มหาวิทยาลัยสงขลานครินทร์  ทั้งนี้... 
                    </p>
                    <a href="https://nsc.siit.tu.ac.th/GENA/doc/NSC2021_Booklet.pdf" className="card-link">อ่านต่อเพิ่มเติม..</a>   
            </div>


        </div>
        
             
        
    );
}

export default Card3;