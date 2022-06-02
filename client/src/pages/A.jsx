import React from 'react'
import { Outlet } from 'react-router';
import Header from '../components/Header';

function A() {
  return (
    <div>
   <Header/>
   <Outlet/>


    </div>
  )
}

export default A