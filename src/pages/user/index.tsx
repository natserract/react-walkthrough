import React, { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { get } from '../../api/API'
import { useToastData } from '../../hooks'

type Props = {}

const User: React.FC<Props> = () => {
  const { state } = useLocation()
  const [toastData, setToastData] = useToastData()

  const [data, setData] = useState({})

  const fetchAlbum = useCallback(() => {
    const { userId } = state

    const reqAlbums = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`

    get(reqAlbums)
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        setToastData({ error: `Error: ${error.what}`, show: true })
      })
  }, [state, setToastData])

  useEffect(fetchAlbum, [])
  
  return <h2>User Pages</h2>
}

export default User