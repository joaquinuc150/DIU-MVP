import React from 'react'
import { NavLink } from 'react-router-dom'
import EventIcon from '@mui/icons-material/Event';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

export const NavBar = () => {
  return (
    <nav className='nav-bar' style={{ display: 'flex', backgroundColor: '#2196F3'}}>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--inactive' : 'nav-bar__link--inactive'}`}
         style={{color: '#E3F2FD', textDecoration: 'none'}}
      >
        <EventIcon />
        Reserva de hora
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : 'nav-bar__link--inactive'}`}
        to='/group' style={{color: '#E3F2FD', textDecoration: 'none'}}
      >
        <FamilyRestroomIcon />
        Grupo familiar
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : 'nav-bar__link--inactive'}`}
        to='/' style={{color: '#E3F2FD', textDecoration: 'none'}}
      >
        <AccountCircleIcon />
        Perfil
      </NavLink>

    <Button style={{ marginLeft: 'auto', marginRight: '20px', color: '#E3F2FD', variant: 'text', textTransform: 'none'}}>
      <LogoutIcon />
      Cerrar Sesión
      </Button>    
    </nav>
  );
}

export default NavBar
