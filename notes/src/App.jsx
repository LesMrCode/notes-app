import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardContent from "./components/DashboardContent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <DashboardContent />
    </div>
  )
}

export default App
