import { useState } from 'react'
import { Routes, Route } from 'react-router'
import HomePage from "./pages/HomePage"
import { ClothesPage } from './pages/ClothesPage'
import { ShoesPage } from './pages/ShoesPage' 
import { AccessoriesPage } from './pages/AccessoriesPage'
import { AccountsPage } from './pages/Accounts/AccountsPage'
import { AccountCardSignup } from './components/AccountCardSignup'

function App() {
  const [ cartQuantity, setCartQuantity ] = useState(0);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />} />
        <Route path='clothes' element={<ClothesPage cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />} />
        <Route path='shoes' element={<ShoesPage cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />} />
        <Route path='accessories' element={<AccessoriesPage cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />} />
        <Route path='account-login' element={<AccountsPage />} />
        <Route path='account-signup' element={<AccountCardSignup />} />
      </Routes>
    </>
  )
}

export default App
