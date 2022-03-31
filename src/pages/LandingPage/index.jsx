import { Button } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './landingpage.scss'

function LandingPage() {
  const navigate = useNavigate();

  function goToLogin() {
    navigate('/login')
  }

  return (
    <div className='main-container'>
       <div className='dt-container'>
         <img src={'/dcpm-logo-1300x.png'} alt="" />
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         <Button onClick={() => goToLogin()} variant="gradient" gradient={{ from: 'orange', to: 'cyan', deg: 105 }} size='lg' uppercase>Get Started</Button>
       </div>
    </div>
  )
}

export default LandingPage