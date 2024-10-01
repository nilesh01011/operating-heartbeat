import React from 'react'
import { useNavigate } from 'react-router-dom';

function SubMenuItems({ ele }) {
    const pathname = window.location.pathname;

    const router = useNavigate();

    const handleRoutes = (ele) => {
        router(ele);
    };

    return (
        <span className={`text-[16px] py-[6px] px-[12px] font-[400] ${pathname === ele.link && "bg-[#D5E0F7] font-[700] text-[#061E4A]"} capitalize`} onClick={() => handleRoutes(ele.link)} >{ele.name}</span>
    )
}

export default SubMenuItems