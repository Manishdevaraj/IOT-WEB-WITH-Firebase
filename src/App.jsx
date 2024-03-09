import { Route, Routes } from "react-router-dom"
import Pagelayout from "./pagelayout/Pagelayout"
import Dashboard from "./pages/Dasboard"
import Auth from "./pages/Auth"
import Analytics from "./pages/Analytics"
import Records from "./pages/Records"
import Controls from "./pages/Controls"
import Pagenot from "./pages/Pagenot"
import { Usercontextprovider } from "./Context/Usercontext"
import ProtectedRoute from "./Hooks/ProtectedRoute"
function App() {
  return (
    <>

    <Usercontextprovider>
    <Pagelayout>
      <ProtectedRoute>
    <Routes>
        <Route path="/auth" element={<Auth/>}/>
        
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/analytics" element={<Analytics/>}/>
        <Route path="/controls" element={<Controls/>}/>
        <Route path="/records" element={<Records/>}/>
        <Route path="*" element={<Pagenot/>}/>
   </Routes>
    </ProtectedRoute>
    </Pagelayout>
     </Usercontextprovider> 

      
       
    </>
  )
}

export default App
