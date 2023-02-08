import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from "./Main"
import Tutorial from './Tutorial'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/tutorial" element={<Tutorial />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Router