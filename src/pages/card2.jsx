import React from 'react';



const Card2 = props => {
    return (
        <div className='card text-center'>        
                <div className='overflow'>
                </div >
                <div className="card-body text-dark">
                <img src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-self-evaluation-resume-icon-image_1356561.jpg" alt="" width="200" height="200" />
                    <h4 className='card-title'>{props.title}</h4>
                    <p className="card-text text-secondary">
                    คัดเลือกผลงานจากข้อเสนอโครงการที่ส่งเข้ามา โดยกำหนดประเด็นพิจารณาไว้ 5 ด้าน เพื่อเป็นแนวทางให้คณะกรรมการใช้สำหรับการพิจารณาข้อเสนอ โครงการ โดยแต่ละกลุ่มเกณฑ์และน้ำหนักของการให้คะแนนต่างกันตามตารางที่กำหนด... 

                    </p>
                    <a href="http://fic.nectec.or.th/nsc15_Criterion" className="card-link">อ่านต่อเพิ่มเติม..</a>   
            </div>


        </div>
        
             
        
    );
}

export default Card2;