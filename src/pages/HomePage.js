import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import SalesReports from './sales/SalesReports'

function HomePage() {
    return (
        <div className='relative w-full h-full flex'>
            <Sidebar />

            <div className='w-full h-full ml-[200px] flex flex-col'>
                <Header />
                <SalesReports />
            </div>
        </div>
    )
}

export default HomePage