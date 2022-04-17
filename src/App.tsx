import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Detail from './pages/Detail'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/collection/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
