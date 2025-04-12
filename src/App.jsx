import React from 'react'
import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gray-800 text-white flex flex-col justify-center items-center'>
      <Header />

      <Home />
      
      <Footer />

    </div>
  )
}

export default App