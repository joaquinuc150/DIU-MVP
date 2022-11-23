import React from 'react'
import { NavLink } from 'react-router-dom'
import EventIcon from '@mui/icons-material/Event';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        <EventIcon />
        Reserva de hora
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/internal'
      >
        <FamilyRestroomIcon />
        Grupo familiar
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/perfil'
      >
        <AccountCircleIcon />
        Perfil
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/home'
      >
      <Button variant="text" color = "error">Cerrar Sesión</Button>
      
    </NavLink> 
    </nav>
  );
}

export default NavBar
