import React from 'react';



const Card = props => {
    return (
        <div className='card text-center'> 
                       
                <div className='overflow'>
                </div >
                <div className="card-body text-dark">
                <img src="http://fic.nectec.or.th/sites/fic.nectec.or.th/files/logo/NSC_Logo.png" alt="" width="200" height="200"/>
                    
                    <h4 className='card-title'>{props.title}</h4>
                    <p className="card-text text-secondary">
                    การพัฒนาทักษะในการเขียนโปรแกรมหรือซอฟต์แวร์คอมพิวเตอร์นั้น 
                    ประเทศไทยมีศักยภาพในการแข่งขันกับต่างประเทศได้ แต่การผลิตบุคลากรที่
                    จะมาพัฒนาโปรแกรมคอมพิวเตอร์ให้เพียงพอนั้น จำต้อง.. 
                    </p>
                    <a href="https://www.scimath.org/article-technology/item/9810-national-software-contest" className="card-link">อ่านต่อเพิ่มเติม..</a>   
            </div>


        </div>
        
             
        
    );
}

export default Card;