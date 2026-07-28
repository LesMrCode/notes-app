import Layout from "./components/Layout.jsx";
import  Homepage  from "./pages/Homepage.jsx";
import DashboardContent from "./components/DashboardContent";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx"; 
import { Routes, Route} from "react-router-dom";


function App() {

  return (
    
    <Routes>

      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
       <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route> 

      <Route path="/dashboard" element={<DashboardContent />} />

      </Routes> 
  );
}

export default App
