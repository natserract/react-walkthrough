import { createContext, useCallback, useMemo, useState, createElement, useContext, useRef } from 'react'
import { UsersState } from './State'

type Context<T> = T | (T | ((a: T) => void))[]
type Dispatch<T> = React.Dispatch<React.SetStateAction<T[]>>

type ToastData = { error: string | null, show: boolean }
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

export const useUsersData = () => useContext(UsersCtx) as [UsersState, Function, Function]

export const UsersProvider = ({ children }) => {
  const [usersData, setUsersData] = useState<UsersState>({
    users: {
      favorites: {},
      comments: {}
    }
  });

  const usersRef = useRef<UsersState>({
    users: {
      favorites: {},
      comments: {}
    }
  })
  const favoriteItemsRef = useRef<any[]>([])
  const commentsItemsRef = useRef<any[]>([])

  const setFavoriteValue = useCallback(({ data, albumId, photoId }) => {
    const isToggled = !!favoriteItemsRef.current.filter(v => v.id === photoId).length

    if (!isToggled) {
      favoriteItemsRef.current.push({ ...data?.photos })
    } else {
      favoriteItemsRef.current = favoriteItemsRef.current.filter(v => v.id !== photoId) || []
    }

    usersRef.current.users.favorites[albumId] = {
      ...data?.albums,
      items: favoriteItemsRef.current.filter(v => v.albumId === albumId)
    }

    const isItemsOnAlbum = !!favoriteItemsRef.current.filter(v => v.albumId === albumId).length

    if (!isItemsOnAlbum) {
      delete usersRef.current.users.favorites[albumId]
    }

    setUsersData({
      users: {
        ...usersData.users,
        favorites: { ...usersRef.current.users.favorites }
      },
    })
  }, [usersData.users])

  const setCommentsValue = useCallback(({ text, stateLocation, photoId }) => {
    commentsItemsRef.current.push({
      text,
      id: photoId
    })

    const { userId, albumId } = stateLocation

    usersRef.current.users.comments[photoId] = {
      id: photoId,
      userId,
      albumId,
      contents: commentsItemsRef.current.filter(v => v.id === photoId),
    }

    setUsersData({
      users: {
        ...usersData.users,
        comments: { ...usersRef.current.users.comments }
      },
    })
  }, [usersData.users])

  const value = useMemo(() => [usersData, setFavoriteValue, setCommentsValue], [usersData, setFavoriteValue, setCommentsValue])

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
