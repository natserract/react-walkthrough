import React, { useCallback, useEffect } from 'react'
import { useLocation } from 'react-router'
import { get } from '../../api/API'
import { useToastData } from '../../hooks'
type Props = {}

const Album: React.FC<Props> = () => {
  const { state } = useLocation()
  const { userId } = state;
  const [toastData, setToastData] = useToastData()

  const fetchAlbum = useCallback(() => {
    const reqAlbum = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`

    get(reqAlbum)
      .then((data) => {
        console.log('Album data', data, userId)
      })
      .catch((error) => {
        setToastData({ error: `Error: ${error.what}`, show: true })
      })
  }, [userId, setToastData])

  useEffect(fetchAlbum, [])

  return <h2>Detail Album</h2>
}

export default Album