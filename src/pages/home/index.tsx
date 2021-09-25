import React, { useCallback, useEffect, useState } from 'react'
import { useToastData } from '../../hooks'
import { get, getAll } from '../../api/API'
import { findsBy } from '../../utils/helper'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import styles from './styles'
import AlbumsGrid from '../../components/albums';
import FullscreenLoading from '../../components/loading';

type FieldState = {
  albums: any[],
  users: any[]
}

const useStyles = makeStyles(styles);

const Home: React.FC = () => {
  const classes = useStyles()
  const [, setToastData] = useToastData()

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<FieldState>()

  const fetchData = useCallback(() => {
    const reqAlbums = get('https://jsonplaceholder.typicode.com/albums')
    const reqUsers = get('https://jsonplaceholder.typicode.com/users')

    getAll([reqAlbums, reqUsers])
      .then((data) => {
        const usersData = data[1]
        const albumsData = findsBy(data[0], usersData, ['userId'])

        setData({
          albums: albumsData!!,
          users: usersData
        })
        setLoading(false)
      })
      .catch((error) => {
        setToastData({ error: `Error: ${error.what}`, show: true })
        setLoading(true)
      })
  }, [setToastData])

  useEffect(fetchData, []);

  useEffect(() => {
    console.log('data', data)
  }, [data])

  if (loading) return <FullscreenLoading />

  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid container spacing={3} alignItems="stretch" children={
        <AlbumsGrid data={data!!} />
      }/>
    </Container>
  )
}

export default Home