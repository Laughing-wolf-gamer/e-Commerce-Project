import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogIn from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminViewLayout from "./components/admin-view/layout"

function App() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<AuthLogIn/>}/>
          <Route path="register" element={<AuthRegister/>}/>
        </Route>
        <Route path="/admin" element={<AdminViewLayout/>}>
          
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
