import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as Ioicons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
// import NSC from './NSC.png';

export const SidebarData = [
    {
        title: 'หน้าแรก',
        path: '/Member/home',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'เกี่ยวกับ NSC',
        path: '/Member/NSC',
        icon: <AiIcons.AiFillProject />,
        // icon: <img src={NSC} height='30px'/>,
    },
    
    {
        title: 'ข้อมูลการแข่งขัน',
        path: '/Member/Info',
        icon: <FaIcons.FaRegNewspaper />,
        // iconClosed: <RiIcons.RiArrowDownSFill />,
        // iconOpened: <RiIcons.RiArrowUpSFill />,
        // subNav: [
        //     {
        //         title: 'หัวข้อการแข่งขัน',
        //         path: '/Info/Type',
        //     },
        //     {
        //         title: 'คุณสมบัติผู้สมัคร',
        //         path: '/Info/Qualification',
        //     }
        // ]
    },
    {
        title: 'ติดต่อเรา',
        path: '/Member/Contact',
        icon: <MdIcons.MdOutlineContactSupport />,
    },
    {
        title: 'โครงการ',
        path: '/Member',
        icon: <FaIcons.FaUniversity />,
    },
    {
        title: 'ออกจากระบบ',
        path: '/home',
        icon: <RiIcons.RiLogoutBoxLine />,
    }

    

]