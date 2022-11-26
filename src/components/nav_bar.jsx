import React from 'react'
import { NavLink } from 'react-router-dom'
import EventIcon from '@mui/icons-material/Event';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';



export const NavBar = () => {
  return (
    <nav className='nav-bar' style={{backgroundColor: '#2196F3'}}>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/hours' style={{color: '#E3F2FD', textDecoration: 'none'}}
      >
        <EventIcon />
        Reserva de hora
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/group' style={{color: '#E3F2FD', textDecoration: 'none'}}
      >
        <FamilyRestroomIcon />
        Grupo familiar
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/' style={{color: '#E3F2FD', textDecoration: 'none'}}
      >
        <AccountCircleIcon />
        Perfil
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        
      >
      <Button style={{color: '#E3F2FD',textTransform: 'none'}} >Cerrar Sesión</Button>
      
    </NavLink> 
    </nav>
  );
}

export default NavBar
