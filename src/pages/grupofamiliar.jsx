import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import Profiles from '../components/profiles'

export const GrupoFamiliarPage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Grupo Familiar</h2>
      <Profiles 
      name="Freddy Garcia" family="Padre" edad="59" email="freddy.garcia@gmail.com" tel="+569 1234 5678" 
      image="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png"
      />
      <Profiles 
      name="Margarita Espinoza" family="Madre" edad="56" email="freddy.garcia@gmail.com" tel="+569 1234 5678" 
      image="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png"/>
      <Profiles name="Ana Garcia" family="Hija" edad="16" email="freddy.garcia@gmail.com" tel="+569 1234 5678" 
      image="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png"
      />
    </div>
  )
}

export default GrupoFamiliarPage
