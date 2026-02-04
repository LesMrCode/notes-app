import './App.css'
import DashboardContent from "./components/DashboardContent"
import Login from "./pages/login.jsx"
import Register from "./pages/register.jsx" 
import { Routes, Route} from "react-router-dom"


function App() {

  return (
    <Routes>
      <Route path= "/" element={<Login />} />
      <Route path= "/login" element={<Login />} />
      <Route path= "/register" element={<Register />} />
      <Route path= "/dashboard" element={<DashboardContent />} /> 
    </Routes>    
  )
}

export default App
