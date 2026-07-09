import { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import api from '../api/axios'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(() => !!localStorage.getItem('token'))

  useEffect(() => {
    let cancelled = false

    const checkAuth = async () => {
      const token = localStorage.getItem('token')
      if (!token) return

      try {
        const { data } = await api.get('/me')
        if (!cancelled) setUser(data)
      } catch {
        localStorage.removeItem('token')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    checkAuth()

    return () => {
      cancelled = true
    }
  }, [])

  const login = (token, userData) => {
    localStorage.setItem('token', token)
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext value={{ user, login, logout, loading }}>
      {children}
    </AuthContext>
  )
}