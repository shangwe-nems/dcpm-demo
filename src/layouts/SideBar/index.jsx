// import { Divider } from '@mantine/core'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BsColumnsGap, BsCalendar2Check, BsPeople, BsChatLeftDots, BsFileEarmark, BsGear } from 'react-icons/bs'
import { GiPill } from 'react-icons/gi'
import './sidebar.scss'

function SideBar() {
    const [active, setActive] = useState('dashboard')


    return (
        <nav className='sidebar'>
            <div className='logo'>
                <Link to="/" className='logoMerge'>
                    <img src='/logo-icon.png' alt='logo'/>
                </Link>
                <img src='/logo-text.png' alt='logo'/>
            </div>
            <div className={active === 'dashboard' ? 'navlinks active' : 'navlinks'}>
                <Link to="/auth/dashboard" className='link' onClick={() => setActive('dashboard')}>
                    <BsColumnsGap size={22} className='icon' /> Dashboard
                </Link> 
            </div>
            <div className={active === 'appointments' ? 'navlinks active' : 'navlinks'}>
                <Link to="/auth/appointments" className='link' onClick={() => setActive('appointments')}>
                    <BsCalendar2Check size={22} className='icon' /> Appointments
                </Link>
            </div>
            <div className={active === 'patients' ? 'navlinks active' : 'navlinks'}>
                <Link to="/auth/patients" className='link' onClick={() => setActive('patients')}>
                    <BsPeople size={22} className='icon' /> Patients
                </Link>
            </div>
            <div className={active === 'messages' ? 'navlinks active' : 'navlinks'}>
                <Link to="/auth/messages" className='link' onClick={() => setActive('messages')}>
                    <BsChatLeftDots size={22} className='icon' /> Messages
                </Link>
            </div>
            <div className={active === 'medications' ? 'navlinks active' : 'navlinks'}>
                <Link to="/auth/medications" className='link' onClick={() => setActive('medications')}>
                    <GiPill size={22} className='icon' /> Medications
                </Link>
            </div>
            <div className={active === 'documents' ? 'navlinks active' : 'navlinks'}>
                <Link to="/auth/documents" className='link' onClick={() => setActive('documents')}>
                    <BsFileEarmark size={22} className='icon' /> Documents
                </Link>
            </div>
            <div className={active === 'settings' ? 'navlinks active' : 'navlinks'}>
                <Link to="/auth/settings" className='link' onClick={() => setActive('settings')}>
                    <BsGear size={22} className='icon' /> Settings
                </Link>
            </div>
            <Outlet />
        </nav>
    )
}

export default  SideBar