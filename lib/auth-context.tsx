"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface User {
  id: string
  name: string
  email: string
  isPremium: boolean
  joinedAt: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  upgradeToPremium: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null, isLoading: true,
  login: async () => ({ success: false }),
  register: async () => ({ success: false }),
  logout: () => {},
  upgradeToPremium: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const saved = localStorage.getItem("trackup_user")
      if (saved) setUser(JSON.parse(saved))
    } catch (_) {}
    setIsLoading(false)
  }, [])

  const saveUser = (u: User) => {
    setUser(u)
    try { localStorage.setItem("trackup_user", JSON.stringify(u)) } catch (_) {}
  }

  const login = async (email: string, password: string) => {
    if (!email || !password) return { success: false, error: "Please fill in all fields" }
    if (password.length < 6) return { success: false, error: "Password must be at least 6 characters" }
    const mockUser: User = {
      id: Math.random().toString(36).slice(2),
      name: email.split("@")[0].replace(/[._]/g, " "),
      email, isPremium: false,
      joinedAt: new Date().toISOString(),
    }
    saveUser(mockUser)
    return { success: true }
  }

  const register = async (name: string, email: string, password: string) => {
    if (!name || !email || !password) return { success: false, error: "Please fill in all fields" }
    if (password.length < 6) return { success: false, error: "Password must be at least 6 characters" }
    const mockUser: User = {
      id: Math.random().toString(36).slice(2),
      name, email, isPremium: false,
      joinedAt: new Date().toISOString(),
    }
    saveUser(mockUser)
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    try { localStorage.removeItem("trackup_user") } catch (_) {}
  }

  const upgradeToPremium = () => {
    if (!user) return
    const updated = { ...user, isPremium: true }
    saveUser(updated)
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, upgradeToPremium }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
