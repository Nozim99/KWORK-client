import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Footer />
    </div>
  )
}

export default App
