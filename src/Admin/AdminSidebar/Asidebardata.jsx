import React from "react";

import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as FiIcons from "react-icons/fi";


export const Asidebardata = [
    {
        title: 'หน้าหลัก',
        path: '/admin',
        icon: <AiIcons.AiFillHome />,
    },
    { 
        title: 'โพสต์',
        path: '',
        icon: <FiIcons.FiEdit/>,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'ข้อมูลและรายละเอียดทั่วไป',
                path: '/admin/post/info',
            },
            {
                title: 'คุณสมบัติผู้สมัคร',
                path: '/admin/post/nscinfo',
            }
        ]
    },

    
    
]


    

