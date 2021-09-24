import { createContext, useCallback, useMemo, useState, createElement, useContext } from 'react'

type Context<T> = T | (T | ((a: T) => void))[]

type ToastData = { error: string | null,  show: boolean }
const ToastDataCtx = createContext<Context<ToastData> | undefined>(undefined)

const WishlistCtx = createContext<unknown>(undefined)

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

export const useWishlistData = () => useContext(WishlistCtx)

export const WishlistProvider = ({ children }) => {
  const [wishlistData, setWishlistData] = useState<any[]>([]);

  const value = useMemo(() => [wishlistData, setWishlistData], [wishlistData])

  return createElement(WishlistCtx.Provider, { value }, children)
}

export const AllContextProvider = ({ children }) => createElement(
  ToastDataProvider,
  null,
  createElement(
    WishlistProvider,
    null,
    children
  ),
)
