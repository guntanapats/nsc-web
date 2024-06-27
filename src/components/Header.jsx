import React from 'react'
import './Header.css'
import PSU from './PSU.png'
import NSCwhite from './NSCwhite.png'
import NSCdes from './NSCdes.png'

function Header(){
    const handleLogin = () => {
        window.location.href = "/login";
      };
    return(
        <div className="header1">
            <img className="NSCH" src={NSCdes}/>
            <img className="PSUH" src={PSU} />
            <img className="NSC2H" src={NSCwhite} />
        <div className='header'>
            <div className='container'>
                <div className='header-con'>
                    <div className='logo-container'>

                    </div>
                    <div className='menu'>
                        <li className='menu-link'>
                            <a href="/home">หน้าแรก</a>
                        </li>
                        <li className='menu-link'>
                            <a href="/NSC">เกี่ยวกับ NSC</a>
                        </li>
                        <li className='menu-link'>
                            <a href="/Info">ข้อมูลการแข่งขัน</a>
                        </li>
                        <li className='menu-link'>
                            <a href="/Contact">ติดต่อเรา</a>
                        </li>
                        <button className='button-header-login' onClick={handleLogin}>เข้าสู่ระบบ</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header;