import React from 'react'
import NavBar from '../components/nav_bar'
import Profiles from  '../components/profiles.jsx'
import History from '../components/history.jsx'
import Exams from '../components/exams.jsx'
import SocialMedia from '../components/socialmedia.jsx'

export const HomePage = () => {
  return (
    <div>
      <div>
        <h1 className='page__title'>Mi Clínica</h1>
        <NavBar />
      </div>
      <div className='page'>
        <h2>Perfil</h2>
        <Profiles name="Freddy García" family="" edad="59" email="freddy.garcia@gmail.com" tel="+569 1234 5678" image="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png"/>
        <div className='page__body'>
        <History />
        <Exams />
        <SocialMedia />
        </div>
      </div>
    </div>
  )
}


export default HomePage
