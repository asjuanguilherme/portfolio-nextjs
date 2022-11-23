import { useRouter } from 'next/router'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { navigationItems } from './navigationItems'

type NavigationContextProps = {
  activeSection: keyof typeof navigationItems
  setActiveSection: Dispatch<SetStateAction<keyof typeof navigationItems>>
}

export const NavigationContext = createContext<NavigationContextProps>(
  {} as NavigationContextProps
)

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] =
    useState<keyof typeof navigationItems>('main')
  const router = useRouter()

  useEffect(() => {
    router
      .replace({ pathname: router.pathname, hash: activeSection }, undefined, {
        shallow: true
      })
      .catch(e => {
        if (!e.cancelled) throw e
      })
  }, [activeSection])

  return (
    <NavigationContext.Provider value={{ setActiveSection, activeSection }}>
      {children}
    </NavigationContext.Provider>
  )
}
