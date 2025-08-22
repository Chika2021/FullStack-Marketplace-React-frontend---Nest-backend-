import './App.css'
import { Route, Routes  } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './component/Header'
import MarketPlace from './pages/MarketPlace'
import NotFound from './pages/NotFound'
import Footer from './component/Footer'
import Dashboard from './pages/admin/Dashboard'
import CreateProducts from './pages/admin/CreateProducts'
import Edit from './pages/admin/Edit'
import CreateUser from './pages/admin/users/CreateUser'
import Login from './pages/admin/Login'
import ProtectedRoute from './component/ProtectedRoute'

function App() {


  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/create" element={<ProtectedRoute><CreateProducts /></ProtectedRoute>} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/register" element={<CreateUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
