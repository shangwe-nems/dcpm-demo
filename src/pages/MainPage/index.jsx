import React, { useEffect } from 'react'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'
import withProtect from '../../utils/withProtect'
import './mainpage.scss'
import SideBar from '../../layouts/SideBar';
import { Route, Routes } from 'react-router-dom';
import Reports from '../Reports';
import Error from '../Error';
import Settings from '../Settings';
import Dashboard from '../Dashboard';
import Appointments from '../Appointments';
import Patients from '../Patients';
import Medications from '../Medications';
import Messages from '../Messages';

function MainPage({ user }) {
    
    useEffect(() => {
        console.log('LoggedInUser: ', user)
    })
    
    return (
        <div className='app'>
            <div className='siderbar'>
                <SideBar />
            </div>
            <div className='mainContent'>
                <Header /> 
                <div className='sectionData'> 
                    <Routes>
                        <Route path='dashboard' element={<Dashboard path='dashboard'/>} />
                        <Route path='appointments' element={<Appointments path='appointments' />} />
                        <Route path='patients' element={<Patients path='patients' />} />
                        <Route path='messages' element={<Messages path='messages' />} />
                        <Route path='medications' element={<Medications path='medications' />} />
                        <Route path='documents' element={<Reports path='documents' />} />
                        <Route path='settings' element={<Settings path='settings' />} />
                        <Route path="*" element={<Error error_type={404} />}/>
                    </Routes>
                </div>
                <Footer />
            </div>            
        </div>
    )
}

export default withProtect(MainPage, true)