import { createContext, useContext, useEffect, useState } from 'react'

const myContext = createContext()

const AppProvider = ({ children }) => {
  const [lightmode, setLightMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  const openLightmode = () => {
    setLightMode(true)
  }
  const closeLightmode = () => {
    setLightMode(false)
  }
  const openMenubar = () => {
    setIsMenuOpen(true)
  }
  const closeMenubar = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <myContext.Provider
      value={{
        isMenuOpen,
        lightmode,
        openMenubar,
        closeMenubar,
        openLightmode,
        closeLightmode,
        loading,
      }}
    >
      {children}
    </myContext.Provider>
  )
}

export const useProvider = () => {
  return useContext(myContext)
}

export default AppProvider
