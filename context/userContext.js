'use client'
import { useState, useContext, createContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
export const UserContext = createContext({})

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({})
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState('')
  const [colorTheme, setColorTheme] = useState('light')
  const [loggedIn, setLoggedIn] = useState(false)
  const [content, setContent] = useState('')
  const router = useRouter()
  const logout = () => {
    setUserInfo(null)
    setLoggedIn(false)
    router.push('/logout')
  }
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  useEffect(() => {
    const func = () => setShowMenu(false)
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', func)
    }
    func()

    return () => {
      window.removeEventListener('resize', func)
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        userInfo,
        showMenu,
        setShowMenu,
        logout,
        toggleMenu,
        setUserInfo,
        loggedIn,
        setLoggedIn,
        content,
        setContent,
        token,
        setToken,
        colorTheme,
        setColorTheme,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

export const useContextValue = () => {
  return useContext(UserContext)
}
