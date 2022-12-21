import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Administrator } from './Pages/Administrator';
import { HomePage } from './Pages/HomePage'


 const App = () => {
  return (
    <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path = "administrator" element = {<Administrator />} />
    </Routes>
  )
}

export default App;