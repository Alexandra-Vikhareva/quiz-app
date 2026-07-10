import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
