import { createContext, useCallback, useMemo, useState, createElement, useContext, useRef } from 'react'
import { UsersState } from './State'

type Context<T> = T | (T | ((a: T) => void))[]
type Dispatch<T> = React.Dispatch<React.SetStateAction<T[]>>

type ToastData = { error: string | null,  show: boolean }
const ToastDataCtx = createContext<Context<ToastData> | undefined>(undefined)

const UsersCtx = createContext<unknown>(undefined)

export const useToastData = () => useContext(ToastDataCtx) as [ToastData, Function]

export const ToastDataProvider = ({ children }) => {
  const [toastData, setToastData] = useState({ error: null, show: false })

  const setValue = useCallback(({ error, show }) => {
    if (typeof show !== 'boolean') throw new TypeError()
    setToastData({ error, show })
  }, [])

  const value = useMemo(() => [toastData, setValue], [toastData, setValue])

  return createElement(ToastDataCtx.Provider, { value }, children)
}

export const useUsersData = () => useContext(UsersCtx) as [UsersState, Function]

export const UsersProvider = ({ children }) => {
  const [usersData, setUsersData] = useState<UsersState>({
    favorites: []
  });

  const usersRef = useRef<UsersState>({
    favorites: []
  })

  const setValue = useCallback(({ data, id }) => {
    const { favorites } = usersRef.current
    const isToggled = favorites.includes(data)

    if (!isToggled) {
      favorites.push(data)
    }

    if (isToggled && favorites.length) {
      const newFavorites = favorites.filter(v => v.id !== id)
      usersRef.current.favorites = newFavorites
    }

    if (favorites.length) {
      setUsersData({
        favorites: usersRef.current.favorites
      })
    }
  }, [])

  const value = useMemo(() => [usersData, setValue], [usersData, setValue])

  return createElement(UsersCtx.Provider, { value }, children)
}

export const AllContextProvider = ({ children }) => createElement(
  ToastDataProvider,
  null,
  createElement(
    UsersProvider,
    null,
    children
  ),
)
