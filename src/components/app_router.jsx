import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GrupoFamiliarPage from '../pages/grupofamiliar'
import HomePage from '../pages/home'
import InternalPage from '../pages/internal'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/grupofamiliar' element={<GrupoFamiliarPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
