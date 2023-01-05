import { createContext, useContext, useEffect, useState } from 'react'

const myContext = createContext()

const AppProvider = ({ children }) => {
  const [lightmode, setLightMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [goup, setGoup] = useState(false)
  const openLightmode = () => {
    setLightMode(true)
  }
  const closeLightmode = () => {
    setLightMode(false)
  }
  const openMenubar = () => {
    setIsMenuOpen(true)
    setGoup(true)
    setGoup(false)
  }
  const closeMenubar = () => {
    setIsMenuOpen(false)
  }
  console.log(goup)
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
        goup,
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
