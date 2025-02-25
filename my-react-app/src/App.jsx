import { Routes, Route } from 'react-router'
import HomePage from "./pages/HomePage"
import { ClothesPage } from './pages/ClothesPage'
import { ShoesPage } from './pages/ShoesPage' 
import { AccessoriesPage } from './pages/AccessoriesPage'

function App() {
  

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='clothes' element={<ClothesPage />} />
        <Route path='shoes' element={<ShoesPage />} />
        <Route path='accessories' element={<AccessoriesPage />} />
      </Routes>
    </>
  )
}

export default App
