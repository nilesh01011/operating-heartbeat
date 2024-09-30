import React from 'react'
import MenuItems from './MenuItems'
import { MenuItemsList } from '../data'

function Sidebar() {
    return (
        <aside className="w-[200px] text-gray-300 h-full fixed top-0 left-0 bg-[#061E4A]">
            <ul className='w-full h-full'>
                {MenuItemsList.map((ele, index) => (
                    <MenuItems key={index} ele={ele} />
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar