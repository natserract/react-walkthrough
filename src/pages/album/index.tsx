import React, { useCallback, useEffect } from 'react'
import { useLocation } from 'react-router'
import { getAll, get } from '../../api/API'
import { useToastData } from '../../hooks'

const Album: React.FC = () => {
  const { state } = useLocation()
  const [toastData, setToastData] = useToastData()

  const fetchAlbum = useCallback(() => {
    const { userId, albumId } = state

    // Using the query in the url it takes less to load up because it doesn't have to load up all the items
    const reqAlbums =  get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    const reqPhotos = get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)

    getAll([reqAlbums, reqPhotos])
      .then((data) => {
        const result = {
          albums: data[0],
          photos: data[1]
        }
        console.log('Alls data', result)
      })
      .catch((error) => {
        setToastData({ error: `Error: ${error.what}`, show: true })
      })
  }, [state, setToastData])

  useEffect(fetchAlbum, [])

  return <h2>Detail Album</h2>
}

export default Album