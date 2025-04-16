import React from 'react'
import "./App.css"
import Nav from './component/Nav/Nav'
import Home from './component/Home/Home'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Nav/>
   <Outlet/>
    </>
  )
}

export default App