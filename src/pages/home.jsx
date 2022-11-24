import React from 'react'
import NavBar from '../components/nav_bar'
import Profiles from  '../components/profiles.jsx'
import History from '../components/history.jsx'
import Exams from '../components/exams.jsx'
import SocialMedia from '../components/socialmedia.jsx'
export const HomePage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Mi Clínica</h1>
      <NavBar />
      <h2>Página de Inicio</h2>
       <Profiles/>
      <History />
      <Exams />
      <SocialMedia />
    </div>
  )
}


export default HomePage
