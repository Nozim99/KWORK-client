import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Seller from './components/Seller'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Introduction />} />
        <Route path='/seller' element={<Seller />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
