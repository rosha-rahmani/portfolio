import React from 'react'
import Hero from './Components/sections/Hero'
import Navbar from './Components/layout/Navbar'

export default function App() {
  return (
    <div className='min-h-screen bg-black text-red-50'>
      <Navbar/>

      <main>
        <Hero/>
      </main>
    </div>
  )
}
