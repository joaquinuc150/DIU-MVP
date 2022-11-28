import React from 'react'
import NavBar from '../components/nav_bar'
import Profiles from '../components/profiles'

export const GroupPage = () => {
  return (
    <div>
    <div>
    <h1 className='page__title'>Mi Clínica</h1>
      <NavBar />
    </div>
    <div className='page'>
      <h2>Grupo Familiar</h2>
      <Profiles 
      name="Freddy García" family="Padre" edad="59" email="freddy.garcia@gmail.com" tel="+569 1234 5678" 
      image="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png"
      />
      <Profiles 
      name="Margarita Espinoza" family="Madre" edad="56" email="mespinoza@gmail.com" tel="+569 1334 5598" 
      image="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png"/>
      <Profiles name="Ana García" family="Hija" edad="16" email="ana.garciae@gmail.com" tel="+569 4314 9732" 
      image="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png"
      />
    </div>
    </div>
  )
}

export default GroupPage
