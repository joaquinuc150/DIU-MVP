import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GroupPage from '../pages/group'
import HomePage from '../pages/home'
import HistoryPage from '../pages/history'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/group' element={<GroupPage />} />
        <Route path='/hours' element={<HomePage />} />
        <Route path='/history' element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
