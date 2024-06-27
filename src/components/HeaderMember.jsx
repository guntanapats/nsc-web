import React from 'react'
import './HeaderMember.css'
import PSU from './PSU.png'
import NSCwhite from './NSCwhite.png'
import NSCdes from './NSCdes.png'
// import { Nav, NavDropdown } from 'react-bootstrap'

function HeaderMember(){
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.href = "/home";
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
                            <a href="/Member/home">หน้าแรก</a>
                        </li>
                        <li className='menu-link'>
                            <a href="/Member/NSC">เกี่ยวกับ NSC</a>
                        </li>
                        <li className='menu-link'>
                            <a href="/Member/Info">ข้อมูลการแข่งขัน</a>
                        </li>
                        <li className='menu-link'>
                            <a href="/Member/Contact">ติดต่อเรา</a>
                        </li>
                        <li className='menu-link'>
                            <a href="/Member">โครงการ</a>
                        </li>
                    <div className='username'>24p11s0052</div>
                    </div>
                    <button className='button-header' onClick={handleLogout}>ออกจากระบบ</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HeaderMember;