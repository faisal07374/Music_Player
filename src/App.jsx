import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftSidebar from './components/leftsidebar'
import RightSidebar from './components/rightsidebar'
import MainContent from './components/maincontent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-sky-200 via-sky-100 to-white text-sky-900 overflow-auto">
      <div className="flex min-h-screen">
        <LeftSidebar />
        <MainContent /> 
        <RightSidebar />
      </div>
    </div>
    </>
  )
}

export default App
