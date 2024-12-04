import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogIn from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminViewLayout from "./components/admin-view/layout"
import AdminDashboard from "./pages/admin-view/dashboad"
import AdminFeatures from "./pages/admin-view/features"
import AdminProducts from "./pages/admin-view/products"
import AdminOrders from "./pages/admin-view/orders"

import NotFound from "./pages/not-found"

import ShoppingViewLayout from "./components/shopping-view/layout"
import ShoppingAccountPage from "./pages/shoping-view/AccountPage"
import ShoppingListing from "./pages/shoping-view/Listing"
import ShoppingCheckoutPage from "./pages/shoping-view/CheckoutPage"
import ShoppingHome from "./pages/shoping-view/Home"

function App() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<AuthLogIn/>}/>
          <Route path="register" element={<AuthRegister/>}/>
        </Route>
        <Route path="/admin" element={<AdminViewLayout/>}>
            <Route path="dashboard" element={<AdminDashboard/>}/>
            <Route path="products" element={<AdminProducts/>}/>
            <Route path="features" element={<AdminFeatures/>}/>
            <Route path="orders" element={<AdminOrders/>}/>
        </Route>
        <Route path="/shop" element={<ShoppingViewLayout/>}>
            <Route path="home" element = {<ShoppingHome/>}/>
            <Route path="listing" element = {<ShoppingListing/>}/>
            <Route path="checkout" element = {<ShoppingCheckoutPage/>}/>
            <Route path="account" element = {<ShoppingAccountPage/>}/>
        </Route>
        <Route path="*" element = {<NotFound/>}/>
      </Routes>
      
    </div>
  )
}

export default App
