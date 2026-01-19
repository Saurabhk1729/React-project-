import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
       <Navbar/>
      <div className='card'>
        <h1>Saurabh Kumar</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, adipisci.</p>
      </div>

      <Card></Card>
    </div>
  )
}

export default App
