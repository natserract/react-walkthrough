import React, { useCallback, useEffect } from 'react'
import { useToastData } from '../../hooks'
import { get, getAll } from '../../api/API'
import { findsBy } from '../../utils/helper'

type Props = {}

const Home: React.FC<Props> = () => {
  const [toastData, setToastData] = useToastData()

  const fetchData = useCallback(() => {
    const reqAlbums = get('https://jsonplaceholder.typicode.com/albums')
    const reqUsers = get('https://jsonplaceholder.typicode.com/users')
    const reqPhotos = get('https://jsonplaceholder.typicode.com/photos')

    getAll([reqAlbums, reqUsers, reqPhotos])
      .then((data) => {
        const photosData = findsBy(data[2], data[1], ['id']) 
        const albumsData = findsBy(data[0], data[1], ['id']) 
        
        const result = { 
          photos: { ...photosData },
          albums: { ...albumsData }
        }

        console.log('result', result)
      })
    // .catch((error) => {
    //   setToastData({ error: `Error: ${error.what}`, show: true })
    // })
  }, [setToastData])

  useEffect(fetchData, []);

  return <h2>Home Page</h2>
}

export default Home